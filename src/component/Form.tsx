import { type ComponentPropsWithoutRef, type FormEvent, forwardRef, useRef, useImperativeHandle } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void;
};

export type formHandle = {
    clear: () => void;
};

export default forwardRef<formHandle, FormProps>(function Form({ children, onSave, ...othr }, ref) {
    console.log(ref);

    const form = useRef<HTMLFormElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSave(Object.fromEntries(formData));
    }
    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('clearing');
                form.current?.reset();
            }
        }
    })

    return (
        <form {...othr} onSubmit={handleSubmit} ref={form}>
            {children}
        </form>
    );
})




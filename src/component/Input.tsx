import { forwardRef, ComponentPropsWithRef } from "react"

type InputTypeProps = {
    label: string;
    id: string;
} & ComponentPropsWithRef<'input'>

export default forwardRef<HTMLInputElement, InputTypeProps>(function Input({ label, id, ...otherAttributes }, ref) {
    return (
        <p>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} {...otherAttributes} ref={ref} name={id} />
        </p>
    )
});
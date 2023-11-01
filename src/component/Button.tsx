import { type ComponentPropsWithoutRef } from "react"

type buttonType = {
    href?: never,
} & ComponentPropsWithoutRef<"button">;

type anchorType = {
    href?: string,
} & ComponentPropsWithoutRef<"a">;

function typesProp(props: anchorType | buttonType): props is anchorType {
    return 'href' in props;
}

export function Button(props: anchorType | buttonType) {
    if (typesProp(props)) {
        return <a className="button"{...props} >{props.children} </a>
    }
    return <button className="button" {...props}></button>
}
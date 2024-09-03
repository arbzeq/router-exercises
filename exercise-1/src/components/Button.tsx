import { ReactElement, ReactNode} from "react";

interface IButton{
    onClick?: () => void;
    children: ReactNode;
}

export function Button( props : IButton) : ReactElement {
    
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}
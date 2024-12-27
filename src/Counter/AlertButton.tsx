import { SyntheticEvent } from "react";


export default function AlertButton({ text, message }: { text: string; message: string }) {

    const alertClick = (e: SyntheticEvent) => {
        console.log(e)
        alert(message);
    };
    return (
        <>
            <button onClick={alertClick}>{text}</button>
        </>
    )
}
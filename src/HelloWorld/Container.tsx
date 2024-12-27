import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export default function Container(children: ContainerProps) {

    return (
        <>
            <h1>Belajar bersama</h1>
            {children.children}
            <footer>
                Belajar React bersama
            </footer>
        </>
    )

}
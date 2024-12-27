export function HelloWorld() {

    let word = "hello world";
    return (
        <>
            <h1>{word.toUpperCase()}</h1>
            <DescHelloWorld text="contoh" />
        </>
    )

}

type Props = {
    text?: string
}

export function DescHelloWorld(props: Props) {
    return (
        <>
            <p>{props.text}</p>
        </>
    )
}
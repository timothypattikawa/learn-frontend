interface TodoProps {
    text?: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export default function Todo(props: TodoProps) {
    if (props.isDeleted) {
        return (
            null
        )
    } else {
        return (
            <>
                <li>{props.text} {props.isCompleted ? "✅" : "❌"}</li>
            </>
        )
    }
}
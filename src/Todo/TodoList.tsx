import Todo from "./Todo";

interface TodoDTO {
    id: number
    text?: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

const todoList: TodoDTO[] = [
    { id: 0, text: "ini saya", isCompleted: true, isDeleted: false },
    { id: 1, text: "ini dia", isCompleted: false, isDeleted: false },
    { id: 2, text: "love you", isCompleted: true, isDeleted: false },
    { id: 3, text: "bermain", isCompleted: true, isDeleted: true }
]


export default function TodoList() {
    return (
        <ul>
            {todoList.map((t) =>
                <Todo key={t.id} {...t} />
            )}
        </ul>
    )
}
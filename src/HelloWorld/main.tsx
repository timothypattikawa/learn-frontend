import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./HelloWorld";
import Container from "../HelloWorld/Container";
import TodoList from "../Todo/TodoList";
import AlertButton from "../Counter/AlertButton";
import CounterButton from "../Counter/CounterButton";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <AlertButton text="Click Me" message="Aku DI klik" />
            <CounterButton />
        </Container>
    </StrictMode>
)
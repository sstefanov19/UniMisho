import React, { useEffect, useState } from "react";
import { completedTodos } from "../services/todoService";

export default function CompletedTodo({ todos, setTodos,  sortOrder }) {
    const [completedTodosList, setCompletedTodosList] = useState([]);

    useEffect(() => {

        const processedCompletedTodos = completedTodos(todos, sortOrder);
        setCompletedTodosList(processedCompletedTodos);
    }, [todos, sortOrder]);

    const handleUndo = (id) => {

        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: false } : todo
            )
        );
    };

    return (
        <div className="p-4 relative z-10">
            <div className="shadow-md font-extralight p-3 h-auto md:h-[400px] overflow-y-auto">
                <h1 className="text-lg font-semibold mb-4">Completed:</h1>
                <ul>
                    {completedTodosList.map((todo) => (
                        <li
                            className="flex flex-col items-start w-full p-4 rounded-md"
                            key={todo.id}
                        >
                            <span className="text-sm md:text-base font-medium">{todo.title}</span>
                            <button
                                onClick={() => handleUndo(todo.id)}
                                className="mt-2 w-full md:w-[80px] h-[30px] bg-yellow-500 rounded-md text-white"
                            >
                                Undo
                            </button>
                            <span className="text-xs text-green-500 mt-2">
                                Completed on: {new Date().toLocaleDateString()}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

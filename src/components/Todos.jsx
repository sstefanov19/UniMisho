import React, { useEffect, useState } from 'react';
import { filterAndSortTodos } from '../services/todoService';

export default function Todos({ sortOrder, selectedPerson , todos , setTodos }) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const processedTodos = filterAndSortTodos(todos, selectedPerson, sortOrder);
        setFilteredTodos(processedTodos);
    }, [todos, selectedPerson, sortOrder]);


    const handleComplete = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: true } : todo
            )
        );
    };

    console.log(todos);

    return (
        <div className="font-extralight p-3 h-auto md:h-[300px] overflow-y-auto">
        <h1 className="text-lg font-semibold">Pending:</h1>
        <ul>
            {filteredTodos.map((todo) => (
                <li
                    className="flex flex-col md:flex-row justify-between items-start md:items-center w-full p-3 rounded-md"
                    key={todo.id}
                >
                    <span className="text-sm md:text-base font-medium">{todo.title}</span>
                    <button onClick={() => handleComplete(todo.id)} className="mt-2 md:mt-0 w-full md:w-[80px] h-[30px] bg-[#00D1B2] rounded-md text-white">
                        Complete
                    </button>
                </li>
            ))}
        </ul>
    </div>
    );
}

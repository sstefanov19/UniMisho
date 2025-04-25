import React, { createContext, useState, useEffect } from "react";
import { fetchTodos } from "../services/todoService";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const data = await fetchTodos();
                setTodos(data);
            } catch (error) {
                console.error("Error fetching todos:", error.message);
            }
        };
        getTodos();
    }, []);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
};

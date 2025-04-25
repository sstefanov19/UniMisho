import React, { useContext, useState } from "react";
import CompletedTodo from "./CompletedTodo";
import { TodosContext } from "../actions/TodosContext";

export default function Right() {
    const { todos, setTodos } = useContext(TodosContext);
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="flex flex-col gap-4 h-auto md:h-[25%] p-4">

            <div className="flex flex-col font-light">
                <label className="text-sm md:text-base mb-2">Sort:</label>
                <select
                    className="border-[0.5px] rounded-md h-[40px] w-full md:w-[150px] p-2"
                    value={sortOrder}
                    onChange={handleSortChange}
                >
                    <option value="asc">Date (asc)</option>
                    <option value="desc">Date (desc)</option>
                </select>
            </div>

            <CompletedTodo todos={todos} setTodos={setTodos} sortOrder={sortOrder} />
        </div>
    );
}

import React, { useContext, useState } from "react";
import Todos from "./Todos.jsx";
import { TodosContext } from "../actions/TodosContext.jsx";

export default function Left() {
  const people = [
    { name: "John", id: 1 },
    { name: "Jane", id: 2 },
    { name: "Joe", id: 3 },
    { name: "Jim", id: 4 },
    { name: "Jasmine", id: 5 },
    { name: "Jade", id: 6 },
    { name: "Jordan", id: 7 },
    { name: "Bruno", id: 8 },
    { name: "Sam", id: 9 },
    { name: "Yasmin", id: 10 },
  ];

  const {todos , setTodos} = useContext(TodosContext);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 h-auto md:h-[25%] p-4">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col  font-light">
        <label className="text-sm md:text-base">Filter by:</label>
        <select
          className="border-[0.5px] rounded-md h-[40px] w-full md:w-[150px] p-2"
          name="Filter by"
          id="filter"
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col font-light">
        <label className="text-sm md:text-base">Sort:</label>
        <select
          className="border-[0.5px] rounded-md h-[40px] w-full md:w-[150px] p-2"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="asc">Title (asc)</option>
          <option value="desc">Title (desc)</option>
        </select>
      </div>
    </div>
    <div>
      <Todos todos={todos} setTodos={setTodos} sortOrder={sortOrder} selectedPerson={selectedPerson} />
    </div>
  </div>
  );
}

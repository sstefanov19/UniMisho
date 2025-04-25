export const fetchTodos = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=10');
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    return data;
};

export const filterAndSortTodos = (todos, selectedPerson, sortOrder = 'asc') => {

    if (!Array.isArray(todos)) {
        console.error("Invalid todos array");
        return [];
    }

    let filteredTodos = todos.filter((todo) => !todo.completed);


    if (selectedPerson) {
        filteredTodos = filteredTodos.filter(
            (todo) => todo.userId === parseInt(selectedPerson)
        );
    }


    if (sortOrder === 'asc') {
        filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
        filteredTodos.sort((a, b) => b.title.localeCompare(a.title));
    }


    return filteredTodos;
};
export const completedTodos = (todos = [], sortCompletedTodos = 'asc') => {
    let completedTodo = todos.filter((todo) => !!todo.completed);

    if (sortCompletedTodos === 'asc') {
        completedTodo.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortCompletedTodos === 'desc') {
        completedTodo.sort((a, b) => b.title.localeCompare(a.title));
    }

    return completedTodo;
};

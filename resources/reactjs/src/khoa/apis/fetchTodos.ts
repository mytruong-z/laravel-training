const fetchTodos = (limit: number, offset: number) => {
    const url = `https://jsonplaceholder.typicode.com/todos?_start=${limit}&_limit=${offset}`;
    return fetch(url).then(res => res.json());
};

export default fetchTodos;

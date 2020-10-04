const fetchUsers = (page: number) => {
    const url = `http://localhost:8085/api/khoa/user?page=${page}`;
    return fetch(url).then(res => res.json());
};

export default fetchUsers;

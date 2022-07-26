import React from 'react';
import useRequest from "../hooks/useRequest";
import axios from "axios";

const TodosList = () => {
    const [todosRequest, loadingRequest, errorRequest] = useRequest(fetchTodosReq)
    function fetchTodosReq() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
    }
    if (loadingRequest) {
        return <h1>Loading...</h1>
    }
    if (errorRequest) {
        return <h1>error happened while loading data</h1>
    }
    return (
        <div>
            {
                todosRequest && todosRequest.map(todo =>
                    <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                        {todo.id} .{todo.title}
                    </div>
                )}
        </div>
    );
};

export default TodosList;

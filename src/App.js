import React, {useState} from "react";
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import TodosList from "./components/TodosList";

function App() {
    const username = useInput('')
    const password = useInput('')
    const [value, setValue] = useState("");
    const debouncedSearch = useDebounce(search, 1000)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    };

    return (
        <div>
            <TodosList/>
            <hr style={{margin: 10}}/>
            <input {...username} placeholder="UserName" type="text"/>
            <input {...password} placeholder="password" type="text"/>

            <button onClick={() => console.log(username.value, password.value)}>Click</button>
            <hr style={{margin: 10}}/>
            <input value={value} onChange={onChange} placeholder="Search" type="text"/>
            <hr style={{margin: 10}}/>
            <Hover/>
            <hr style={{margin: 10}}/>
            <List/>

        </div>
    );
}

export default App;

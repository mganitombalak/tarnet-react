import React, { useState, useEffect } from 'react';
import axios from 'axios';
// 16.8 
// stateHook

// state={resourceUrl:'afdgafgafg'}
const HookComponent = () => {
    const [myState, setMyState] = useState({ resource: 'users', data: [], items: [] });

    const loadData = async () => {
        let url =
            myState.resource === 'users' ?
                'https://jsonplaceholder.typicode.com/users' :
                'https://jsonplaceholder.typicode.com/users/1/comments';
        const response = await axios.get(url);
        // console.log(`Hook data:${response.data}`);
        let arr = [];
        response.data.forEach((item, index) => arr.push(<li key={index}>{item.name}</li>));
        setMyState({ resource: myState.resource, data: response.data, items: arr });
    }

    // componentDidUpdate
    // componentDidMount
    useEffect(() => {
        loadData();
    },[myState.resource]);

    return <div>
        <button onClick={()=> setMyState({resource:'users'})}>Load User Names</button>
        <button onClick={()=> setMyState({resource:'comments'})}>Load Comment Names</button>
        <ul>{myState.items}</ul>
    </div>

}

export default HookComponent;
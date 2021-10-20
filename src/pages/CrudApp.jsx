import React, {useState} from 'react'
import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';

const tasksData = [
    {
        id: 1,
        desc: "Task 1",
        state: "done"
    },
    {
        id: 2,
        desc: "Task 2",
        state: "to do"
    },
    {
        id: 3,
        desc: "Task 3",
        state: "done"
    },
    {
        id: 4,
        desc: "Task 4",
        state: "doing"
    },
    {
        id: 5,
        desc: "Task 5",
        state: "to do"
    },
];

const CrudApp = () => {

    const [tasks, setTaks] = useState(tasksData);

    return (
        <div>
            <h1>CRUD App</h1>
            <CrudForm/>
            <CrudTable tasks = {tasks}/>
        </div>
    )
}

export default CrudApp

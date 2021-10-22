import React, {useState} from 'react'
import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';

/**
 * Lista de tareas de prueba
 */
const testData = [
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
    /**
     * Estado que almacena la lista de tareas.
     */
    const [tasks, setTasks] = useState(testData);
    /**
     * Pendiente
     */
    const [taskToUpdate, setTaskToUpdate] = useState(null)

    const createTask = (newTaskData) =>{
        /**
         * Generamos un id con la fecha del momento de creación
         */
        newTaskData.id = Date.now();
        /**
         * Agregamos la tarea nueva a la lista de tareas
         */
        setTasks([...tasks, newTaskData]);
    }

    const updateTask = (data) =>{

    }

    const deleteTask = (id) =>{

    }

    return (
        <div>
            <h1>CRUD App</h1>
            <CrudForm 
                createTask = {createTask}
                updateTask = {updateTask} 
                taskToUpdate = {taskToUpdate} 
                setTaskToUpdate = {setTaskToUpdate}
            />
            <CrudTable 
                tasks = {tasks}
                deleteTask = {deleteTask}
                setTaskToUpdate = {setTaskToUpdate}
            />
        </div>
    )
}

export default CrudApp

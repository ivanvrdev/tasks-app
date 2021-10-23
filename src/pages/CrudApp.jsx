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

    const updateTask = (taskData) =>{
        /**
         * Se compara el id de las tareas y en donde cooinciden la tarea editada reemplaza a la tarea almacenda en el arreglo.
         */
        let updatedTasks = tasks.map(task => task.id === taskData.id ? taskData : task);
        setTasks(updatedTasks);
    }

    const deleteTask = (id) =>{
        let userIsSure = window.confirm(`Are you sure to delete the task with id: ${id}?`);

        if(!userIsSure){
            return;
        }
        /**Guarda las tareas en un array menos la tarea a eliminar y actuliza el estado */
        let updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
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

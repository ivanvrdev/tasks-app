import React, {useState, useEffect} from 'react';
import CrudForm from '../components/CrudForm';
import CrudTable from '../components/CrudTable';
import { helpHttp } from '../helpers/helpHttp';

const CrudApi = () => {

    /**
    * Estado que almacena la lista de usuarios.
    */
    const [users, setUsers] = useState([]);
    /**
    * Si hay un usuario a editar se almacena acá.
    */
    const [userToUpdate, setUserToUpdate] = useState(null)

    let api = helpHttp();
    let url = "http://localhost:4000/";
    /**
     * Consulta y carga la lista de usuarios cuando cargar la página
     */
    useEffect(()=>{
        api.get(`${url}get-user`).then(res=>{
            if(!res.err){
                setUsers(res.users)
            }else{
                setUsers([]);
            }
        });
    }, []);

    const createUser = (newUserData) =>{
        /**
        * Generamos un id con la fecha del momento de creación
        */
        // newUserData.id = Date.now();
        /**
        * Agregamos el usuario nuevo a la lista de tareas
        */
        setUsers([...users, newUserData]);
    }
 
    const updateUser = (userData) =>{
        /**
        * Se compara el id de las tareas y en donde cooinciden la tarea editada reemplaza a la tarea almacenda en el arreglo.
        */
        let updatedUsers = users.map(user => user.uid === userData.uid ? userData : user);
        setUsers(updatedUsers);
    }
 
    const deleteUser = (uid) =>{
        let userIsSure = window.confirm(`Are you sure to delete the user with id: ${uid}?`);
 
        if(!userIsSure){
            return;
        }
        /**Guarda las tareas en un array menos la tarea a eliminar y actuliza el estado */
        let updatedUsers = users.filter(user => user.uid !== uid);
        setUsers(updatedUsers);
    }

    return (
        <div>
            <h2>CRUD API</h2>
            <CrudForm 
                createUser = {createUser}
                updateUser = {updateUser} 
                userToUpdate = {userToUpdate} 
                setUserToUpdate = {setUserToUpdate}
            />
            <CrudTable 
                users = {users}
                deleteUser = {deleteUser}
                setUserToUpdate = {setUserToUpdate}
            />
        </div>
    )
}

export default CrudApi

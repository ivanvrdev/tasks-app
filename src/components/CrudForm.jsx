import React, {useEffect, useState} from 'react'

const initialForm = {
    username: "",
    role: "",
    uid: null
}

const CrudForm = ({createUser, updateUser, userToUpdate, setUserToUpdate}) => {
    /**
     * Almacena la información de los campos del formulario.
     */
    const [form, setForm] = useState(initialForm)

    useEffect(()=>{
        if(userToUpdate){
            setForm(userToUpdate)
        }else{
            setForm(initialForm)
        }
    }, [userToUpdate])

    /**
     * Agrega la información que el usuario ingresa por medio del formulario al estado anterior
     * @param {*} e el objeto del input
     */
    const handleChange = (e)=>{
        setForm({
            ...form,
            /**
             * Sobreescribe la propiedad del formulario con su nombre, agregandole el valor ingresado
             */
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        /**
         * Impide que la página se recargue
         */
        e.preventDefault();
        /**
         * Valida que los datos no esten incompletos
         */
        if (!form.role || !form.username) {
            alert('Incompleted data')
            return;
        }

        if(form.uid == null){
            createUser(form);
        }else{
            updateUser(form);
        }

        handleReset();
    }

    /**
     * Limpia los campos del formulario y el estado de este
     * @param {*} e pendiente
     */
    const handleReset = (e)=>{
        setForm(initialForm);
        setUserToUpdate(null);
    }

    return (
        <div>
            <h3>{userToUpdate ? "Update user" : "New user"}</h3>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    value={form.username}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="role" 
                    placeholder="role" 
                    value={form.role}
                    onChange={handleChange}
                />
                <input 
                    type="submit" 
                    value="Send" 
                />
                <input 
                    type="reset" 
                    value="Clean"
                    onClick={handleReset}
                />
            </form>
        </div>
    )
}

export default CrudForm

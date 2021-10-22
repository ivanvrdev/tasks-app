import React, {useEffect, useState} from 'react'

const initialForm = {
    desc: "",
    state: "",
    id: null
}

const CrudForm = ({createTask, updateTask, taskToUpdate, setTaskToUpdate}) => {
    /**
     * Almacena la información de los campos del formulario.
     */
    const [form, setForm] = useState(initialForm)
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

        if (!form.desc || !form.state) {
            alert('Incompleted data')
            return;
        }

        if(form.id == null){
            createTask(form);
        }else{
            updateTask(form);
        }

        handleReset();
    }

    /**
     * Limpia los campos del formulario y el estado de este
     * @param {*} e pendiente
     */
    const handleReset = (e)=>{
        setForm(initialForm);
        setTaskToUpdate(null);
    }

    return (
        <div>
            <h3>New task</h3>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    name="desc" 
                    placeholder="description"
                    value={form.desc}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="state" 
                    placeholder="state" 
                    value={form.state}
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

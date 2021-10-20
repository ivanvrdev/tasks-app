import React, {useEffect, useState} from 'react'

const initialForm = {
    desc: "",
    state: "",
    id: null
}

const CrudForm = () => {
    const [form, setForm] = useState(initialForm)
    const handleChange = (e)=>{}
    const handleSubmit = (e)=>{}
    const handleReset = (e)=>{}

    return (
        <div>
            <h3>New task</h3>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    name="desc" 
                    placeholder="description"
                    value={form.desc}
                />
                <input 
                    type="text" 
                    name="state" 
                    placeholder="state" 
                    value={form.state}
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

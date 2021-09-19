import { useState } from 'react'

const useForm = () => {

    const [Form, setForm] = useState('');

    const handleChange = ({ target }) => {
        setForm({
            [ target.name ] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Form);
    }

    return [ Form, handleChange, handleSubmit ];
    
}

export default useForm

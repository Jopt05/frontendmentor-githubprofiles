import { useState } from 'react'

const useForm = () => {

    const [Form, setForm] = useState(({
        url: "Jopt05"
    }));

    const handleChange = ({ target }) => {
        setForm({
            [ target.name ] : target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            ...Form,
            url: Form?.name
        });
    }

    return [ Form, handleChange, handleSubmit ];
    
}

export default useForm

import { useState } from 'react'

const useMode = () => {

    const [Mode, setMode] = useState(true);

    const handleToggle = () => {
        setMode(!Mode);
    }

    return [ Mode, handleToggle ]
}

export default useMode

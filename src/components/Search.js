import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context';

const Search = () => {

  const Context = useContext(appContext);

    const { Form, handleChange, handleSubmit } = Context;

    return (
        <form onSubmit={ handleSubmit } className="Search">
          <i class='bx bx-search' ></i>
          <input 
            type="text" 
            name="name" 
            className="Search__Input" 
            placeholder="Search Github username..."
            onChange={ handleChange }
            value={ Form?.name }
          ></input>
          <button className="Search__Button">
            Search
          </button>
        </form>
    )
}

export default Search

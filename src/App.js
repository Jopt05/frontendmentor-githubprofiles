import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import Search from './components/Search';
import useMode from './hooks/useMode';
import { appContext } from './HighOrderComponents/Context';
import useForm from './hooks/useForm';
import { useFetch } from './hooks/useFetch';
import { useEffect } from 'react';

function App() {

  const [ Mode, handleToggle ] = useMode();

  const [ Form, handleChange, handleSubmit ] = useForm();

  const Info = useFetch(`https://api.github.com/users/${ Form?.url }`);

  const Context = {
    Mode,
    handleToggle,
    Form,
    handleChange,
    handleSubmit,
    Info
  }

  return (
    <appContext.Provider value={ Context } >
      <div className={ `App ${ Mode ? 'Darkmode' : 'Lightmode' }` }>
        <div className="Container">
          <Header />
          <Search />
          <Information />
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;

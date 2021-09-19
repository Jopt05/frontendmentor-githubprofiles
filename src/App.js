import './App.css';
import Header from './components/Header';
import Information from './components/Information';
import Search from './components/Search';
import useMode from './hooks/useMode';
import { appContext } from './HighOrderComponents/Context';
import useForm from './hooks/useForm';

function App() {

  const [ Mode, handleToggle ] = useMode();

  const [ Form, handleChange, handleSubmit ] = useForm();

  const Context = {
    Mode,
    handleToggle,
    Form,
    handleChange,
    handleSubmit
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

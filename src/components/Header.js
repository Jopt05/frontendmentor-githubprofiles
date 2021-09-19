import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context'

const Header = () => {

    const Context = useContext(appContext);

    const { Mode, handleToggle } = Context;

    return (
        <div className="Header">
          <div className="Header__Container">
            <h1 className="Header__Container-Title">
              devfinder
            </h1>
          </div>
          <div className="Header__Container" onClick={ handleToggle }>
            <p className="Header__Container-Text">
              {
                  Mode 
                  ? 'Light' 
                  : 'Dark'
              }
            </p>
            {/* <i class='bx bxs-sun'></i> */}
            <i class={ `bx bxs-${ Mode ? 'sun' : 'moon' }` }></i>
          </div>
        </div>
    )
}

export default Header

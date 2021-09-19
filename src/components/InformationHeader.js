import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context';
import dateFormat from 'dateformat'

const InformationHeader = () => {

    const { Info } = useContext(appContext);

    return (
        <div className="Information__Header">
            <div className="Information__Header-ImageContainer">
                <img src={ Info?.data?.avatar_url } alt="Profile" />
            </div>
            <div className="Information__Header-InformationContainer">
                <div className="Information__Header-InformationContainer-Left">
                <h2 className="Information__Header-InformationContainer-Profilename">
                    { Info?.data?.login }
                </h2>
                <a target="_blank" href={ Info?.data?.html_url } className="Information__Header-InformationContainer-Username">
                    { `@${Info?.data?.login}` }
                </a>
                </div>
                <div className="Information__Header-InformationContainer-Right">
                <p className="Information__Header-InformationContainer-Date">
                    {
                        `Joined ${ dateFormat(Info?.data?.created_at, "dd mmm yyyy") }`
                    }
                </p>
                </div>
            </div>
        </div>
    )
}

export default InformationHeader

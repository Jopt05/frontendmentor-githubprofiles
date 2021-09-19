import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context';

const InformationBiography = () => {

    const { Info } = useContext(appContext);

    return (
        <div className="Information__BiographyContainer">
            <p className="Information__BiographyContainer-Text">
              { 
                Info?.data?.bio
                ? Info?.data?.bio
                : 'This user has no bio'
              }
            </p>
        </div>
    )
}

export default InformationBiography

import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context';
import InformationExtrasContainer from './InformationExtrasContainer';

const InformationExtra = () => {

    const { Info } = useContext(appContext);

    return (
        <div className="Information__ExtraContainer">
            <div className="Information__ExtraContainer-Container">
              <InformationExtrasContainer icon={ "bxs-map" } value={ Info?.data?.location }/>
              <InformationExtrasContainer icon={ "bx-link" } value={ Info?.data?.blog }/>
            </div>
            <div className="Information__ExtraContainer-Container">
              <InformationExtrasContainer icon={ "bxl-twitter" } value={ Info?.data?.twitter_username }/>
              <InformationExtrasContainer icon={ "bxs-buildings" } value={ Info?.data?.company }/>
            </div>
        </div>
    )
}

export default InformationExtra

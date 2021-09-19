import React, { useContext } from 'react'
import { appContext } from '../HighOrderComponents/Context';
import StatsContainer from './StatsContainer'

const InformationStats = () => {

  const { Info } = useContext(appContext);

    return (
        <div className="Information__StatsContainer">
            <StatsContainer title={ "Repos" } value={ Info?.data?.public_repos } />
            <StatsContainer title={ "Followers" } value={ Info?.data?.followers } />
            <StatsContainer title={ "Following" } value={ Info?.data?.following } />
        </div>
    )
}

export default InformationStats

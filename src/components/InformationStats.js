import React from 'react'

const InformationStats = () => {
    return (
        <div className="Information__StatsContainer">
            <div className="Information__StatsContainer-Container">
              <p className="Information__StatsContainer-Container-Title">
                Repos
              </p>
              <p className="Information__StatsContainer-Container-Stat">
                8
              </p>
            </div>
            <div className="Information__StatsContainer-Container">
              <p className="Information__StatsContainer-Container-Title">
                Followers
              </p>
              <p className="Information__StatsContainer-Container-Stat">
                3938
              </p>
            </div>
            <div className="Information__StatsContainer-Container">
              <p className="Information__StatsContainer-Container-Title">
                Following
              </p>
              <p className="Information__StatsContainer-Container-Stat">
                9
              </p>
            </div>
        </div>
    )
}

export default InformationStats

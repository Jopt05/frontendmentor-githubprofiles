import React from 'react'

const StatsContainer = ({ title, value }) => {
    return (
        <div className="Information__StatsContainer-Container">
            <p className="Information__StatsContainer-Container-Title">
                { title } 
            </p>
            <p className="Information__StatsContainer-Container-Stat">
                { value }
            </p>
        </div>
    )
}

export default StatsContainer

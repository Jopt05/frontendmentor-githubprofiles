import React from 'react'
import InformationBiography from './InformationBiography'
import InformationExtra from './InformationExtra'
import InformationHeader from './InformationHeader'
import InformationStats from './InformationStats'

const Information = () => {
    return (
        <div className="Information">
          <InformationHeader />
          <InformationBiography />
          <InformationStats />
          <InformationExtra />
        </div>
    )
}

export default Information

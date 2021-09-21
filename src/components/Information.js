import React, { useContext, useEffect } from 'react'
import { appContext } from '../HighOrderComponents/Context'
import InformationBiography from './InformationBiography'
import InformationExtra from './InformationExtra'
import InformationHeader from './InformationHeader'
import InformationStats from './InformationStats'

const Information = () => {

  const { Info } = useContext(appContext);

  useEffect(() => {
    document.querySelector(".Information").classList.add("goIn");

    setTimeout(() => {
      document.querySelector(".Information").classList.remove("goIn");
    }, 900);
  },[ Info ])

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

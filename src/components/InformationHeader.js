import React from 'react'

const InformationHeader = () => {
    return (
        <div className="Information__Header">
            <div className="Information__Header-ImageContainer">
                <img src="https://yt3.ggpht.com/ytc/AKedOLRIMxdlUR9zVI_Ivqt8_BD4jg2MgHDPRpHG2WwH=s48-c-k-c0x00ffffff-no-rj-mo" alt="Profile" />
            </div>
            <div className="Information__Header-InformationContainer">
                <div className="Information__Header-InformationContainer-Left">
                <h2 className="Information__Header-InformationContainer-Profilename">
                    The Octocat
                </h2>
                <p className="Information__Header-InformationContainer-Username">
                    @octocat
                </p>
                </div>
                <div className="Information__Header-InformationContainer-Right">
                <p className="Information__Header-InformationContainer-Date">
                    Joined 25 Jan 2011
                </p>
                </div>
            </div>
        </div>
    )
}

export default InformationHeader

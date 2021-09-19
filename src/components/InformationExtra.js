import React from 'react'

const InformationExtra = () => {
    return (
        <div className="Information__ExtraContainer">
            <div className="Information__ExtraContainer-Container">
              <div className="Information__ExtraContainer-Container-Element">
                <i class='bx bxs-map' ></i>
                <p className="Information__ExtraContainer-Container-Text">
                  San Francisco
                </p>
              </div>
              <div className="Information__ExtraContainer-Container-Element">
                <i class='bx bx-link' ></i>
                <p className="Information__ExtraContainer-Container-Text">
                  https://github.blog
                </p>
              </div>
            </div>
            <div className="Information__ExtraContainer-Container">
              <div className="Information__ExtraContainer-Container-Element Disabled">
                <i class='bx bxl-twitter' ></i>
                <p className="Information__ExtraContainer-Container-Text">
                  Not Available
                </p>
              </div>
              <div className="Information__ExtraContainer-Container-Element">
                <i class='bx bxs-buildings' ></i>
                <p className="Information__ExtraContainer-Container-Text">
                  @github
                </p>
              </div>
            </div>
        </div>
    )
}

export default InformationExtra

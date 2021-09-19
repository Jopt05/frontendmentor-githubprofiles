import React from 'react'

const InformationExtrasContainer = (props) => {
    return (
        <div className="Information__ExtraContainer-Container">
            <div className={`Information__ExtraContainer-Container-Element ${ props?.value ? '' : 'Disabled' }`}>
                <i class={`bx ${props?.icon}`} ></i>
                <p className="Information__ExtraContainer-Container-Text">
                    {
                        props?.value
                        ? props.value
                        : 'Not available'
                    }
                </p>
            </div>
        </div>
    )
}

export default InformationExtrasContainer

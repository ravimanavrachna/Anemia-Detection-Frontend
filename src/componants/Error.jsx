import React from 'react'
import { Atom } from 'react-loading-indicators'

const Error = ({ msg }) => {

    return (
        <div className=' h-[50px] w-[100%] bg-white/60 text-red-500 backdrop-blur-sm flex items-center justify-center' >
            <div>
                {msg}
            </div>
        </div>
    )
}

export default Error

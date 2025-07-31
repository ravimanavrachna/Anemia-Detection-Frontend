import React from 'react'
import { Atom } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='fixed inset-0 z-50 h-[100%] w-[100%] bg-white/60 backdrop-blur-sm flex items-center justify-center' >
      <Atom color="red" size="medium" text="" textColor="" />
    </div>
  )
}

export default Loading

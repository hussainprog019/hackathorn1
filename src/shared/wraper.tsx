import React, { FC } from 'react'

export const Wraper:FC<{children:React.ReactNode}>=({children}) =>{
  return (
    <div className='max-w-screen-2xl mx-auto'>{children}</div>
  )
}

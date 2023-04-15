import React from 'react'

const Benifits = ({icon,head,cont}) => {
  return (
    <div className='w-4/6 m-auto flex flex-col justify-center items-center gap-6 p-6'>
        <img src={icon} className='w-16 h-16' alt="benicon" />
        <p className=' font-medium'>{head}</p>
        <p className=' font-light'>{cont}</p>
   </div>
  )
}

export default Benifits
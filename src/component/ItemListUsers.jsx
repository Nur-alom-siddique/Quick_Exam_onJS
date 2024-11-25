import React, { useContext } from 'react'
import { userDetailsContext } from '../App'

function ItemListUsers({ user }) {
  const { getId } = useContext(userDetailsContext)
  return (

    <div className="border border-gray-200 rounded-md p-2 w-6/12 text-center">
      <h1 className="text-base">{user.name}</h1>
      <span className="text-sm text-slate-600">{user.username}</span>
      <p className="text-sm text-rose-600">{user.email}</p>
      <button onClick={() => getId(user.id)} className='text-sm bg-green-600 text-white px-4 py-2 rounded-sm mx-auto block m-2'>View Details</button>
    </div>

  )
}

export default ItemListUsers

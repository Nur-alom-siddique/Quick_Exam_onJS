import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { useContext } from 'react'
import { userDetailsContext } from '../App';

const getData = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/users/${queryKey[1]}`);
  return response.data
}


function DetailsUsers() {
  const { id } = useContext(userDetailsContext)

  const { data: users, error, isFetching } = useQuery({
    queryKey: ["user", id],
    queryFn: getData,
  });

  if (isFetching) return <div>Wait a moment .....</div>
  if (error) return <div>fetching error try again !{error.message}</div>


  return (

    <>

      {!error && <div className="w-3/12 p-2 border text-2xl font-semibold">
        <h2>Users Deatils</h2>
        <div className="text-sm mt-6">
          <h2>{users.name}</h2>
          <p>{users.username}</p>
          <p>{users.email}</p>
        </div>
      </div>}

    </>
  )
}

export default DetailsUsers

import React from 'react'
import ItemListUsers from './ItemListUsers'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const users = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
}


function ItemsOFUsers() {

  const { data: mydata, isFetching, error } = useQuery({
    queryKey: ["users"],
    queryFn: users,
    // retry: false,
    // staleTime: 5000,
    refetchInterval: 2000
  })

  // if (isFetching) return <div className="w-6/12 mt-6">Data is Loading please wait ........</div>
  // if (error) return <div className="w-6/12 mt-6">Something wrong with faching data</div>


  return (
    <>
      {!error && <div className="w-6/12 p-2 border text-2xl font-semibold">
        <h2> Users List</h2>
        <div className="mt-6 flex flex-wrap">
          {mydata && mydata.map(user => <ItemListUsers key={user.id} user={user} />)}
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="btn btn-primary mr-2"
          // onClick={handlePrevious}
          // disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
          // onClick={handleNext}
          // disabled={endIndex >= data.length}
          >
            Next
          </button>
        </div>

      </div >}
    </>

  )
}

export default ItemsOFUsers

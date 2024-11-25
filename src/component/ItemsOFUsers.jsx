import React, { useState } from 'react'
import ItemListUsers from './ItemListUsers'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';

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


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate indices for current data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = (mydata || []).slice(startIndex, endIndex);

  // Event handlers
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);



  return (
    <>
      {!error && <div className="w-6/12 p-2 border text-2xl font-semibold">
        <h2> Users List</h2>
        <div className="mt-6 flex flex-wrap">
          {currentData && currentData.map(user => <ItemListUsers key={user.id} user={user} />)}
        </div>

        <div className="flex justify-center mt-4">
          {currentPage >= 2 && <button
            className="btn btn-primary mr-2 bg-rose-600 text-base px-3 py-1 text-white rounded-sm"
            onClick={handlePrevious}
          >
            Previous
          </button>}
          {currentPage <= 4 && <button
            className="btn btn-primary bg-indigo-600 text-base px-3 py-1 text-white rounded-sm"
            onClick={handleNext}
            disabled={endIndex >= data.length}
          >
            Next
          </button>}

        </div>

      </div >}
    </>

  )
}

export default ItemsOFUsers
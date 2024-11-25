import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function UserCreate() {
  const quaryClint = useQueryClient()

  const mutation = useMutation({
    mutationKey: ["users"],
    mutationFn: (variables) => {
      return axios.post("http://localhost:3000/users", variables)
    },

    onSuccess: (data, variables, context) => {
      return console.log(data, variables, context),
        quaryClint.invalidateQueries(["users"])
    },
    onMutate: (variables) => {
      return `Hello ${variables.name}. How are you ?`
    }
  })

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newData = Object.fromEntries(formData)
    mutation.mutate({
      ...newData,
      id: crypto.randomUUID
    })


  }

  return (

    <div className="w-3/12 p-2 border text-2xl font-semibold">
      <h2>Create users</h2>

      <form onSubmit={submitHandler}>
        <div className="mb-5 mt-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
          <input name='name' type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
          <input name='username' type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User description</label>
          <input name='email' type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save User</button>
      </form>

    </div>

  )
}

export default UserCreate

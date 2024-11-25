import { createContext, useEffect, useState } from "react"
import DetailsUsers from "./component/DetailsUsers"
import ItemsOFUsers from "./component/ItemsOFUsers"
import UserCreate from "./component/UserCreate"


export const userDetailsContext = createContext()


function App() {
  const [id, setId] = useState("")

  const getId = (id) => {
    setId(id);
  }

  return (
    <>
      <userDetailsContext.Provider value={{ id, getId }}>
        <div className="flex max-w-screen-2xl">
          <UserCreate />
          <ItemsOFUsers />
          <DetailsUsers />
        </div>
      </userDetailsContext.Provider>

    </>

  )
}


export default App

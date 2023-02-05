
import React, { useContext } from 'react'
import { pb } from "../../utils/pocketbase"
import { userContext } from '../App'

interface props {
  setUser: any
}



export const LogoutButton = () => {

  const { user, setuser } = useContext(userContext)


  function logout() {
    try {
      pb.authStore.clear()
    }
    catch (e) {
      console.log(e)
    }
    console.log(pb.authStore.model)

    setuser({})

  }
  return (
    <div>
      <button onClick={logout}></button>
    </div>
  )
}

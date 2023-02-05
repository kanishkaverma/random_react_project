
import React, { useContext, useState } from 'react'
import { InputComponent } from './InputComponent'
import { pb } from "../../utils/pocketbase"
import { userContext } from '../App'

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false)

  const { user, setuser } = useContext(userContext)

  const login = async (setuser: any) => {

    setloading(true)
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
    } catch (e) {
      console.log(e);
      alert(e)
    }
    setuser(pb.authStore.model)
    setloading(false)

  }

  return (
    <>
      {loading ? "loading..." :
        <>
          <InputComponent placeholder={"email"} handleChange={setEmail} state={email} />
          <InputComponent placeholder={"password"} handleChange={setpassword} state={password} />
          <button onClick={() => login(setuser)}>login</button>
        </>
      }
    </>

  )
}


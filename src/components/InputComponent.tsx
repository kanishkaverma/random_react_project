import React, { useContext } from 'react'
import { userContext } from '../App'

interface props {
  placeholder: string,
  handleChange: any,
  state: string
}
export const InputComponent = ({ placeholder, handleChange, state }: props) => {
  const user = useContext(userContext)
  return (
    <>
      < input type="text" placeholder={placeholder} onChange={e => handleChange(e.target.value)} value={state} />
    </>
  )
}

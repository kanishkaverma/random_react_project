
import React, { useContext, useEffect } from 'react'
import { userContext } from '../App'

export const LandingPage = (props: {}) => {

  const user = useContext(userContext)

  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <>
      hello {user?.email}
    </>
  )
}

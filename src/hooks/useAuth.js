import { useContext, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../firebase'
import { LoginContext } from '../pages/apps/login/LoginProvider'

export const useAuth = () => {
  const { user, init, login, logout } = useContext(LoginContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          init({ init: true })
          const { displayName, email, emailVerified, photoURL, uid, phoneNumber, providerData } = user

          user.getIdToken().then((accessToken) => {
            login({ displayName, email, emailVerified, phoneNumber, photoURL, uid, accessToken, providerData })
          })
        } else {
          init({ init: true })
          logout()
        }
      },
      (error) => alert(error),
    )
    return unsubscribe
  }, [init, login, logout])

  return user
}

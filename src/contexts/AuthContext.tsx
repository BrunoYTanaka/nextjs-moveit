import Cookies from 'js-cookie'
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'

interface User {
  name: string
  avatarUrl: string
}

interface AuthContextData {
  user: User
  saveUser: (userInfo: User) => void
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [user, setUser] = useState({})

  useEffect(() => {
    const userSession = Cookies.get('user')
    if (userSession) {
      setUser(JSON.parse(userSession))
    }
  }, [])

  const saveUser = (userInfo: User) => {
    setUser(userInfo)
    Cookies.set('user', JSON.stringify(userInfo))
  }

  return (
    <AuthContext.Provider value={{ user, saveUser }}>
      {children}
    </AuthContext.Provider>
  )
}

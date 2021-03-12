import Cookies from 'js-cookie'
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'

interface User {
  name: string
  avatarUrl: string
}

interface AuthContextData {
  user: User
  logout: () => void
  saveUser: (userInfo: User) => void
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const router = useRouter()
  const [user, setUser] = useState({} as User)

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

  const logout = () => {
    Cookies.remove('user')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, saveUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

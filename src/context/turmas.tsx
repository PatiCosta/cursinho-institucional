import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState,
  } from 'react'
import { Course } from '@/interfaces/Course.interface'
import api from '@/services/api'
  
  interface SchoolClassContextType {
    schoolClassList?: Course[]
    list: () => void
  }
  
  const SchoolClassContext = createContext({} as SchoolClassContextType)
  
  export function SchoolClassProvider({ children }: { children: ReactNode }) {
    const [schoolClassList, setSchoolClassList] = useState()
  
    const list = useCallback(
      async () => {
        await api
          .get(`http://cursinhofeauspserver.awer.co/schoolClass`, {params: {status: 'active'}})
          .then((response) => {
            setSchoolClassList(response.data.schoolClassResponse.schoolClassList)
          })
      },
      [],
    )
  
    return (
      <SchoolClassContext.Provider
        value={{
        schoolClassList,
          list,
        }}
      >
        {children}
      </SchoolClassContext.Provider>
    )
  }
  
  export function useSchoolClass() {
    const context = useContext(SchoolClassContext)
  
    if (!context) {
      throw new Error('useDonations must be used within an DonationsContext')
    }
  
    return context
  }
  
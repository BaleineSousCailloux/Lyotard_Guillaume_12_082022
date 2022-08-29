import { useState, createContext } from 'react'

export const DataContext = createContext()

export function DataProvider({ children }) {
  const [dataSourceOnline, setDataSourceOnline] = useState(false)
  function ToogleDataSource() {
    setDataSourceOnline(dataSourceOnline === true ? false : true)
  }
  return (
    <DataContext.Provider value={{ dataSourceOnline, ToogleDataSource }}>
      {children}
    </DataContext.Provider>
  )
}

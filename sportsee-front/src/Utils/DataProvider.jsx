import { useState, createContext } from 'react'

/**
 * Context for data source choice with DataProvider
 */
export const DataContext = createContext()

/**
 * Provider of data source context
 * @param {components} children
 * @returns datas from API or Mocked Datas
 */
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

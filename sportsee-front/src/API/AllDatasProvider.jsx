import { useContext } from 'react'
import { DataContext } from '../Utils/DataProvider'

function AllDatasProvider() {
  const { dataSourceOnline } = useContext(DataContext)
  const state = dataSourceOnline.toString()
  return <div>{state}</div>
}

export default AllDatasProvider

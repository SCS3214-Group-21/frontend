import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import Pagination from './components/common/Pagination'
import ServiceCard from './components/common/ServiceCard'

import ClientRegisterPage from './pages/ClientRegisterPage'
import ClientAllVendors from './pages/ClientVendorsPage/ClientAllVendors'
import ClientVendorCategory from "./pages/ClientVendorsPage/ClientVendorCategory"
import LoginPage from './pages/LoginPage'
import AllHotelsPage from './pages/ClientVendorsPage/AllHotelsPage'
import AllPhotographers from './pages/ClientVendorsPage/AllPhotographers'
import HotelVendorDetails from './pages/ClientVendorsDetailsPage/HotelVendorDetails'


function App() {
  return (
    <>

      <HotelVendorDetails />

    </>
  )
}

export default App
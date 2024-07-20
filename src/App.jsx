import React from 'react'
import './App.css'
import PublicRoute from './routes/PublicRoute'
// import VendorProfilePage from './pages/VendorProfilePage'
// import VendorIncomeGraph from './components/VendorIncomeGraph'
// import BusinessDetailsForm from './components/BusinessDetailsForm'
// import PlanBudgetForm from './components/PlanBudgetForm'

function App() {
  return (
    <>
      <PublicRoute />
      {/* <PlanBudgetForm /> */}
      {/* <VendorProfilePage /> */}
      {/* <div className="bg-gray-100 w-full h-[30rem] p-10">
        <VendorIncomeGraph />
        <BusinessDetailsForm />
      </div> */}
    </>
  )
}

export default App
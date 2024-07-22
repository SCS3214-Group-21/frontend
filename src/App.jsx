import React from 'react'
import './App.css'
// import PublicRoute from './routes/PublicRoute'
// import VendorProfilePage from './pages/VendorProfilePage'
// import VendorIncomeGraph from './components/VendorIncomeGraph'
// import BusinessDetailsForm from './components/BusinessDetailsForm'
import CommentSection from './components/common/CommentSection'

function App() {
  return (
    <>
      {/* <PublicRoute /> */}
      <CommentSection />
      {/* <div className="flex items-center justify-center h-[22rem] w-96 bg-white p-2">
      <BlogCard 
        img={"../src/assets/images/Images/01.png"}
        text={"Love in Full Blooms - Navigating the Delicate Petals of Romance"}
        date={"13 Nov, 2023"}
        time={"05.00 PM"}
        button={"Read Blog"}
      />
      </div> */}
      {/* <VendorProfilePage /> */}
      {/* <div className="bg-gray-100 w-full h-[30rem] p-10">
        <VendorIncomeGraph />
        <BusinessDetailsForm />
      </div> */}
    </>
  )
}

export default App
import './App.css'
import AddCard from './components/common/AddCard'
import PackageCard from './components/common/PackageCard'
import CreatePackageForm from './components/CreatePackageForm'
import UpdatePackageForm from './components/UpdatePackageForm'

function App() {
  return (
    <>
      {/* <ServicesCarousel /> */}
      {/* <ReviewCarousel /> */}
      {/* <div className='w-96'> */}
      {/* <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
        <AddCard 
          text={"Create Package"}
        />
      </div>
      <div className="flex items-center justify-center h-60 w-52 bg-white p-2">
        <PackageCard 
          img={"../src/assets/images/Images/01.png"}
          text={"Package 01"}
          button={"See more"}
        />
      </div> */}
      {/* </div> */}
      <div className='w-full h-full bg-white p-10'>
        <CreatePackageForm />
      </div>
      <div className='w-full h-full bg-white p-10'>
        <UpdatePackageForm />
      </div>
    </>
  )
}

export default App
import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import ServiceCard from './components/common/ServiceCard'

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <div className='w-60 h-96 bg-black'>
      <ServiceCard 
        img={"src/assets/Images/Images/07.png"}
        title={"photography"}
        text={"Best photographers with experience"}
      />
      </div>
    </>
  )
}

export default App
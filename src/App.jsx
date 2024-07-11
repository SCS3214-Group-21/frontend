import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import PersonalDetailsForm from './components/PersonalDetailsForm'

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <div className='flex flex-row p-10 gap-10 bg-white'>
      <PersonalDetailsForm />
      <PersonalDetailsForm />
      </div>
    </>
  )
}

export default App
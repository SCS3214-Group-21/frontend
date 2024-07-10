import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import TermsConditions from './components/TermsConditions'

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <div className='flex flex-row p-10 gap-10 bg-white'>
      <TermsConditions />
      <TermsConditions />
      </div>
    </>
  )
}

export default App
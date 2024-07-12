import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import Button from './components/ui/PrimaryButton'
import Button2 from './components/ui/SecondaryButton'
import CustomButton from './components/ui/CustomPinkButton'
import PrimaryNoneFillButton from './components/ui/PrimaryNoneFillButton'
import SecondaryNoneFillButton from './components/ui/SecondaryNoneFillButton'

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <Button text={"Register"} />
      <Button2 text={"Login"} />
      <CustomButton text={"Contact"} />
      <CustomButton text="Custom Blue" bgColor="bg-black" />
      <PrimaryNoneFillButton text={"Reset"} />
      <SecondaryNoneFillButton text={"Delete"} />
    </>
  )
}

export default App
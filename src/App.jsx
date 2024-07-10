import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import ReviewCard from './components/common/ReviewCard'

function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <div className='flex flex-row items-center justify-center bg-yellow-500 gap-10'>
      <div className='w-72 h-60 bg-black'>
        <ReviewCard 
          img={"src/assets/Images/Images/07.png"}
          name={"Ramath Perera"}
          time={"5h Ago"}
          review={"This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy"}
        />
        </div>
        <div className='w-72 h-60 bg-black'>
        <ReviewCard 
          img={"src/assets/Images/Images/06.png"}
          name={"Ramath Perera"}
          time={"5h Ago"}
          review={"This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy"}
        />
        </div>
        <div className='w-72 h-60 bg-black'>
        <ReviewCard 
          img={"src/assets/Images/Images/05.png"}
          name={"Ramath Perera"}
          time={"5h Ago"}
          review={"This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy"}
        />
        </div>
        <div className='w-72 h-60 bg-black'>
        <ReviewCard 
          img={"src/assets/Images/Images/04.png"}
          name={"Ramath Perera"}
          time={"5h Ago"}
          review={"This website made planning our wedding so much easier! We found the perfect photographer and florist in just a few clicks. Organizing Content was so easy"}
        />
        </div>
      </div>
    </>
  )
}

export default App
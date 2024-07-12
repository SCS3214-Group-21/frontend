import './App.css'
import RegisterProgress from './components/ui/RegisterProgress'
import Pagination from './components/common/Pagination'
import ServiceCard from './components/common/ServiceCard'

const items = [
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  { img: 'src/assets/Images/Images/07.png', title: 'Photography', text: 'Best photographers with experience' },
  // Add more items here...
];

const renderItems = (currentItems) => (
  <div className='flex flex-row flex-wrap gap-10 items-center justify-center'>
    {currentItems.map((item, index) => (
      <div key={index} className='w-60 h-96 bg-black'>
        <ServiceCard 
          img={item.img}
          title={item.title}
          text={item.text}
        />
      </div>
    ))}
  </div>
);


function App() {
  return (
    <>
      {/* <RegisterProgress precentage={50}></RegisterProgress> */}
      <Pagination items={items} itemsPerPage={5} renderItems={renderItems} />
    </>
  )
}

export default App
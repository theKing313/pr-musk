import './App.scss';
import Header from './Components/Header';
// import About from './Components/About';
// import Catalogue from './Components/Catalogue';
// import Pillows from './Components/Pillows';
// import Blog from './Components/Blog';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'мы',
      text: '1',
      label: 'на рынке',
    },

    {
      id: 2,
      title: 'Гарантируем',
      text: '50%',
      label: 'безопасность',
    },
    {
      id: 3,
      title: 'Календарик за',
      text: '2001',
      label: 'в подарок',
    },
    {
      id: 4,
      title: 'Путешествие',
      text: '597',
      label: 'дней',
    },

  ])
  return (
    <div className="wrapper ">
      < Header />
      <main className='flex-auto'>

        <div className="content lg:mt-36 mt-[5.3125rem] relative  z-10">
          <div className="container m-0">
            <div className="md:flex md:justify-between">
              <div className="flex flex-col gap-y-20 justify-center">
                <div className="title text-5xl text-white">
                  Путешествие <p className='text-base'>на красную планету</p>
                </div>

                <button className='text-[.875rem] button'>Начать путешествие</button>
              </div>
              <div className="mt-9 md:mt-0">
                <div className="items grid grid-cols-2 gap-x-3 gap-y-3">
                  {items.length > 0 && items.map((item, index) => (
                    <div key={index} className="item flex flex-col justify-center items-center gap-y-4">
                      <div className="text-base ">{item.title} </div>
                      <div className="text-[2.5rem] md:text-[3.125rem]">{item.text} </div>
                      <div className="text-base">{item.label}</div>
                    </div>
                  ))}


                </div>
              </div>
            </div>
          </div>
        </ div>

      </main >
      < Footer />
    </div >
  );
}

export default App;

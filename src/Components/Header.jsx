import { useState } from 'react'
import logo from './images/logo.png'
const Header = () => {
    const [menuActive, setmenuActive] = useState(false)

    return (
        <>
            <header className="header ">

                < div className="header__wrapper " >
                    <div className="container m-0 min-h-[3.4375rem] flex items-center md:justify-normal justify-between ">
                        <div className="header__logo flex-[0_1_10.3125rem] items-center relative z-10">
                            <img src={logo} alt="" />
                        </div>
                        <div className="relative z-50 h-6 w-10 flex flex-col items-center text-center  md:hidden" onClick={() => setmenuActive(!menuActive)}>
                            <span className='h-0.5 bg-white w-full absolute left-0 top-0'></span>
                            <span className='h-0.5 bg-white w-full absolute left-0 top-1/2'></span>
                            <span className='h-0.5 bg-white w-full absolute left-0 bottom-0'></span>
                        </div>
                        <nav className={menuActive ? 'menu active' : "menu flex-auto "}>
                            <ul className='flex justify-end flex-wrap gap-x-[1.875rem]'>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Главная</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Технология</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">График полетов</a></li>
                                <li className='flex py-5'><a className='text-[#E4E5EA] font-medium text-[1rem]  hover_link' href="home">Гарантии</a></li>
                                <li className='flex py-5 last_li_hidden'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">О компании</a></li>
                                <li className='flex py-5 last_li_hidden'><a className='text-[#E4E5EA] font-medium text-[1rem] hover_link' href="home">Контакты</a></li>
                            </ul>
                        </nav>


                    </div>


                </div>
            </header >
        </>
    );
}

export default Header
import { useEffect  } from 'react';
import {MdOutlineMailOutline,MdLocationCity} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Contact(){
    useEffect(()=>{
        document.title = 'Contact Me';
        AOS.init();
        AOS.refresh();

    },[])
    return (
        <div className='container flex flex-col' data-aos='fade-up'>
            <div className='mx-auto w-11/12 lg:w-9/12 pt-14'>
                <h1 className='text-2xl dark:text-white font-semibold'>Contact</h1>
                <ul className='mt-6 flex flex-col gap-3 text-base'>
                    <li><span className='flex dark:text-white gap-4'><MdOutlineMailOutline size={20} className='fill-current' /><p className=''>yurdiansyah143@gmail.com</p></span></li>
                    <li><span className='flex dark:text-white gap-4'><AiOutlineWhatsApp size={20} className='fill-current' /><p className=''>087809884953</p></span></li>
                    <li><span className='flex dark:text-white gap-4'><MdLocationCity size={20} className='fill-current' /><p className=''>Bogor , West Java</p></span></li>
                </ul>
            </div>
        </div>
    )
}
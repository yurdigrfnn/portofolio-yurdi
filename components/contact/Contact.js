import {MdOutlineMailOutline,MdLocationCity} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'

export default function Contact() {
    return (
        <div className='mx-auto w-11/12 lg:w-9/12'>
            <h1 className='text-2xl dark:text-white font-semibold mt-14'>Contact</h1>
            <ul className='mt-6 flex flex-col gap-3 text-base'>
                <li><span className='flex dark:text-white gap-4'><MdOutlineMailOutline size={20} className='fill-current' /><p className=''>yurdiansyah143@gmail.com</p></span></li>
                <li><span className='flex dark:text-white gap-4'><AiOutlineWhatsApp size={20} className='fill-current' /><p className=''>087809884953</p></span></li>
                <li><span className='flex dark:text-white gap-4'><MdLocationCity size={20} className='fill-current' /><p className=''>Bogor , West Java</p></span></li>
            </ul>
        </div>
    )
}

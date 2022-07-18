import Link from 'next/link';
import {AiOutlineHome,AiOutlineProject,AiOutlineProfile,AiOutlineBook} from 'react-icons/ai'
import Swithcer from '../../switcher';

export default function Navbar() {
    const nama = {
        nama : '{ YRD }'
      }
    return (
    <div className='container mx-auto relative'>
        <div className='mx-auto mt-10 w-11/12 lg:w-9/12 flex justify-between md:absolute md:left-0 right-0'>
          <h1 className='text-4xl font-bold bg-gradient-to-tr from-sky-600 to-sky-300 bg-clip-text text-transparent font-nama'>{nama.nama}</h1>
          <div className='dark:bg-slate-500 bg-gradient-to-tr from-sky-600 to-sky-300 p-2 rounded-xl'>
            <Swithcer />
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0 w-full md:mt-10 md:pt-1 dark:bg-slate-900 md:dark:bg-transparent md:bg-transparent bg-slate-200 rounded-t-xl md:bottom-auto md:relative md:container md:mx-auto md:top-0 md:w-1/2 z-[10000] border-t border-slate-400 md:border-none md:px-10 lg:px-14 flex justify-between px-8 py-5 items-center md:justify-between sm:px-12'>
          <li className='inline-block noactive'>
            <Link href='/' activeClassName='active'>
              <a>
                <AiOutlineHome size={30} className='md:hidden'/>
                <span className='text-xl textnone font-bold'>Home</span>
              </a>
            </Link>
          </li>
          <li className='inline-block noactive'>
            <Link href='/project' activeClassName='active'>
              <a>
                <AiOutlineProject  size={30} className='md:hidden' />
                <span className='text-xl textnone font-bold'>Project</span>
              </a>
              
            </Link>
          </li>
          <li className='inline-block noactive'>
            <Link href='/blog' activeClassName='active'>
              <a>
                <AiOutlineBook size={30} className='md:hidden'/>
                <span className='text-xl textnone font-bold'>Blog</span>
              </a>
            </Link>
          </li>
          <li className='inline-block noactive'>
            <Link href='/contact' activeClassName='active'>
              <a>
                <AiOutlineProfile size={30} className='md:hidden' />
               <span className='text-xl textnone font-bold'>Contact</span>
              </a>
            </Link>
          </li>
        </div>
    </div>
        
    )
}
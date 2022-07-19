import Link from 'next/link';
import {AiOutlineHome,AiOutlineProject,AiOutlineProfile,AiOutlineBook} from 'react-icons/ai'
import Swithcer from './swicher/switcher';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const nama = {
        nama : '{ YRD }'
      } 
    return (
    <div className='container mx-auto relative'>
        <div className='mx-auto w-11/12 lg:w-9/12 mt-10 md:mt-0 flex justify-between md:absolute md:left-0 right-0'>
          <h1 className='text-4xl font-bold bg-gradient-to-tr from-sky-600 to-sky-300 bg-clip-text text-transparent font-nama'>{nama.nama}</h1>
            <span className='inline-block bg-gradient-to-tr from-sky-600 to-sky-300 p-2 border-0 rounded-lg'>
                <Swithcer />
             </span>
        </div>
        <div className='fixed bottom-0 left-0 right-0 w-full md:mt-10 md:pt-1 dark:bg-slate-900 md:dark:bg-transparent md:bg-transparent bg-slate-200 rounded-t-xl md:bottom-auto md:relative md:container md:mx-auto md:top-0 md:w-1/2 z-[10000] border-t border-slate-400 md:border-none md:px-10 lg:px-14 flex justify-between px-8 py-5 items-center md:justify-between sm:px-12'>
          <li  className={`inline-block ${router.pathname == '/' ? 'text-sky-600' : 'text-violet-600'}`}>
            <Link href='/' >
              <a>
                <AiOutlineHome size={30} className='md:hidden fill-current'/>
                <span className='text-xl textnone font-bold'>Home</span>
              </a>
            </Link>
          </li>
          <li className={`inline-block ${router.pathname == '/project' ? 'text-sky-600' : 'text-violet-600'}`}>
            <Link href='/project'>
              <a>
                <AiOutlineProject  size={30} className='md:hidden fill-current' />
                <span className='text-xl textnone font-bold'>Project</span>
              </a>
              
            </Link>
          </li>
          <li className={`inline-block ${router.pathname == '/blog' ? 'text-sky-600' : 'text-violet-600'}`}>
            <Link href='/blog'>
              <a>
                <AiOutlineBook size={30} className='md:hidden fill-current'/>
                <span className='text-xl textnone font-bold'>Blog</span>
              </a>
            </Link>
          </li>
          <li className={`inline-block ${router.pathname == '/contact' ? 'text-sky-600' : 'text-violet-600'}`}>
            <Link href='/contact'>
              <a>
                <AiOutlineProfile size={30} className='md:hidden fill-current' />
               <span className='text-xl textnone font-bold'>Contact</span>
              </a>
            </Link>
          </li>
        </div>
    </div>
        
    )
}
import { data } from '../../DataMockup/data'
import {DiJava, DiJavascript1} from 'react-icons/di';
import {BsBoxArrowUpRight} from 'react-icons/bs'
export default function PersonalProject() {
    return (
        <div className='mx-auto w-11/12 lg:w-9/12'>
            <div className='mt-14'>
                <h1 className='text-3xl dark:text-white font-semibold'>My Project</h1>
                <p className='dark:text-white pt-2 text-base'>this is my personal project/experiment</p>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl dark:text-white'>Featured Project</h1>
            </div>  
            <div className='mt-7 flex w-full flex-wrap'>
                {data.map((items)=>(
                    <div className='w-full md:w-1/2 lg:w-1/3' key={items.id} data-aos = 'fade-up'>
                        <div className='md:mt-3 mt-7 md:mr-2 dark:bg-slate-600 rounded-t-lg overflow-hidden shadow-md shadow-teal-700 hover:shadow-md group hover:scale-95 transition-all duration-700'>
                            <img src={items.Img} alt="" className='bg-transparent h-1/2 w-full object-cover shadow-lg group-hover:scale-105 transition-all duration-700' />
                            <div className='px-2 py-2'>
                                <h1 className='dark:text-white pt-4 text-2xl'>{items.title}</h1>
                                <p className=' py-2 dark:text-white text-base'>{items.desk}</p>
                                <div className='flex justify-between'><div className='flex gap-3 mt-2'><DiJava size={30} color='#61dafb' /> <DiJavascript1 size={30} color='#61dafb' /></div><a href={items.repo} className='mt-2' __blank ><BsBoxArrowUpRight size={30} color='#61dafb' /></a></div>
                            </div>
                        </div>
                    </div>
                    )    
                )}
            </div>
        </div>
    )
}
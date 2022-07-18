import { useEffect } from 'react';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { data } from '../Models/Data';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Layout from '../components/Layout/Layout';

export default function About(){
    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
        document.title = 'About Me';
    },[])
    return (
      <Layout title='About Me'>
        <div className="container flex flex-col" data-aos='fade-up'>
            <div className="mx-auto w-11/12 mt-40 box-content lg:w-9/12">
                <h1 className="text-5xl font-bold lg:text-6xl dark:text-white ">Hai, im <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">Yurdiansyah</span></h1>
                <p className="text-slate-600 font-medium max-w-md mt-7 dark:text-slate-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat! Lorem ipsum dolor sit amet.</p>
                <div className="mt-16 w-full flex flex-col gap-6 md:flex-row">
                    <span className="py-2 text-center md:w-1/2  bg-gradient-to-r from-sky-800 to-cyan-400 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-all duration-500"><a href="http://github.com/yurdigrfn">Visit Github</a></span>
                    <span className="py-2 text-center md:w-1/2 text-white rounded-lg bg-gradient-to-r from-indigo-800 to-blue-400 shadow-lg hover:scale-105 transition-all duration-500"><a href="http://github.com/yurdigrfn">YouTube</a></span>
                </div>
            </div>
            <div className="mx-auto w-11/12 mt-36 lg:w-9/12">
                <div className="flex flex-col bg-zinc-200 dark:bg-slate-600 rounded-md px-4 pt-2 pb-9 shadow-md hover:scale-105 transition-all duration-1000" data-aos='fade-up'>
                    <h1 className="text-4xl mt-2">About</h1>
                    <p className="text-xl mt-6 text-slate-600 dark:text-slate-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis reiciendis accusamus, aliquid suscipit hic voluptas voluptatibus cupiditate nisi, exercitationem ducimus, consectetur dolores deserunt maiores. Harum dolores quos quisquam nesciunt!</p>
                </div>
            </div>

            <div className='mx-auto w-11/12 mt-14 lg:w-9/12'>
                <h1 className='text-4xl text-white'>Skils</h1>
                <div className='flex flex-wrap w-full mt-6 gap-5'>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>Javascript</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>CSS</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>Tailwind CSS</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>PHP</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>LARAVEL</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>React Js</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>Next Js</li>
                    <li className='inline-block rounded-full text-center text-blue-600 px-7 py-3 bg-transparent border border-indigo-700 text-2xl hover:bg-cyan-600 hover:text-slate-200 hover:scale-105 hover:shadow-md transition-all duration-1000'>MySQL</li>

                </div>
            </div>

            <div className='mx-auto w-11/12 mt-14 lg:w-9/12'>
                <div className='text-4xl dark:text-white flex justify-between'>
                    <p>Featured Project </p>
                    <div className='flex'>
                    <MdChevronLeft size={30} onClick={slideLeft} className="cursor-pointer" /><MdChevronRight size={30} onClick={slideRight} className="cursor-pointer"/>
                    </div>    
                </div>
                <div className='relative flex items-col mt-4'>
                    <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data.map((items)=>(
                        <img className='w-[220px] inline-block py-2 pr-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ' src={items.Img} key={items.id} />
                    ))}

                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}
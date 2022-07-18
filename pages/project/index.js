import { useEffect, useState } from 'react'
import {DiJava, DiJavascript1} from 'react-icons/di';
import {BsBoxArrowUpRight} from 'react-icons/bs'
import { data } from '../../Models/Data';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {GoRepoClone} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import Layout from '../../components/Layout/Layout';

export default function Project(){
    const [repos,setRepos] = useState([])
    useEffect(()=>{
        async function getRepo(){
            const request = await fetch('https://api.github.com/users/yurdigrfnn/repos');
            const response = await request.json();
            setRepos(response);

        }

        getRepo()

        
        document.title = 'Project';
        AOS.init();
        AOS.refresh();
       
    },[])

    
    return (
    <Layout title='Project'>
        <div className='container flex flex-col' data-aos ='fade-up'>
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

            <div className='mx-auto w-11/12 lg:w-9/12'>
                <div className='mt-14'>
                    <h1 className='text-3xl dark:text-white font-semibold'>Github Repositories</h1>
                </div>
                <div className='mt-7 flex w-full flex-wrap '>
                    {[...repos].reverse().map((repo)=>(
                        <div className='w-full md:w-1/2 lg:w-1/3' data-aos = 'fade-up' key={repo.id}>
                        <div className='md:mt-3 mt-7 md:mr-2 py-3 px-4 max-h-48 dark:bg-slate-600 shadow-3xl'>
                            <h1 className='text-2xl font-semibold text-sky-400'>{repo.name}</h1>
                            <p className='text-xl dark:text-slate-200 mt-2'>{repo.description}</p>
                            <div className='flex justify-between mt-4'>
                            <a className='inline-block text-slate-500' href={repo.clone_url}><GoRepoClone size={25} className="fill-current" /></a>
                            <a href={`https://github.com/yurdigrfnn/${repo.name}/stargazers`} className='i text-slate-500 flex justify-start hover:text-sky-500 transition-all duration-500'><AiOutlineStar size={25} className='fill-current' /> {repo.stargazers_count}</a>
                            </div>
                        </div>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
        </Layout>
    )
}
import {GoRepoClone} from 'react-icons/go'
import {AiOutlineStar} from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function GithubRepositories(res){
    const [repos,setRepos] = useState([])
    useEffect(()=>{
        // async function getRepo(){
        //     const request = await fetch('https://api.github.com/users/yurdigrfnn/repos');
        //     const response = await request.json();
            setRepos(res.res.res);
            
        // }
        // getRepo()
    },[res])
    return (
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
    )
}



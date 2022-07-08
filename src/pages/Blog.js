import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {BsBoxArrowUpRight} from 'react-icons/bs'




export default function Blog(){
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    

    useEffect(function() {
        document.title = 'Blog';
        async function getArticles() {
            const request = await fetch('https://api-blog-yurdi.herokuapp.com/api/post');
            const response = await request.json();
            const res = response.data;
            setLoading(false);


            setArticles(res);
            
            
        }
        
        getArticles();
        
        
        
    },[setArticles])

    return (
        <div className='container flex flex-col' data-aos ='fade-up'>
            <div className='mx-auto w-11/12 lg:w-9/12'>
                <div className='mt-14'>
                    <h1 className='text-3xl dark:text-white'>Blog</h1>
                </div> 
                
                    {loading && (
                        <p className='dark:text-white text-2xl mt-7'>Loading...</p>
                    )}

                    {!loading && (
                        <div className='mt-7 flex w-full flex-wrap'>
                            {articles.map((items)=>(
                                <div className='w-full md:w-1/2 lg:w-1/3' key={items.id} data-aos = 'fade-up'>
                                    <div className='mt-3 mr-2 dark:bg-slate-600 rounded-t-lg overflow-hidden shadow-md shadow-teal-700 hover:shadow-md group hover:scale-95 transition-all duration-700'>
                                     <img src={items.image} alt="" className='bg-transparent h-[200px] w-full object-cover shadow-lg group-hover:scale-105 transition-all duration-700' />
                                <div className='px-2 py-2'>
                                <h1 className='dark:text-white pt-4 text-2xl'>{items.title}</h1>
                                <span className='inline-block mt-3 dark:text-white py-2 px-3 rounded-sm bg-cyan-700'>{items.category}</span>
                                <p className=' py-2 dark:text-white text-base'>{items.summary}</p>
                                <div className='flex justify-between'><div className='flex justify-end'><Link to={items.slug} className='mt-2' ><BsBoxArrowUpRight size={30} color='#61dafb' /></Link></div>
                            </div>
                        </div>
                     </div>
                    </div>
                    )    
                    )}
                        </div>
                    )}
                    
                
                
            </div>
        </div>

        // <div className='container flex flex-col'>
        //     <div className='mx-auto w-11/12 lg:w-9/12 pt-14'>
        //         {articles.map((article)=>
        //             <>
        //             <p className='text-xl dark:text-white' key={article.id}>{article.title}</p>
        //             <p><Link to={article.slug}>Details</Link></p></>
        //         )}
        //     </div>
            
        // </div>
    )
}
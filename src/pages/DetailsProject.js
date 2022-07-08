import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';



export default function DetailsProject(){
    const parasms = useParams()
    const [article,setArticle] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function getArticles() {
            const request = await fetch(`https://api-blog-yurdi.herokuapp.com/api/post/${parasms.slug}`);
            const response = await request.json();
            const res = response.data;
            setArticle(res);
            setLoading(false);
            document.title = article.title;
        }
        
        getArticles();

    },[parasms,setArticle,article])

        return (
            
            <div className='container mx-auto w-11/12 lg:w-9/12 pt-14'>
                {loading && (
                    <p className='dark:text-white text-2xl mt7'>Loading..</p>
                )}

                {!loading && (
                    <>
                    <h1 className='text-3xl dark:text-white font-bold'>{article.title}</h1>
                <img src={article.image} className='mt-10' alt="" />
                <div className='flex justify-between md:justify-start md:gap-2 mt-2'>
                    <span className='py-1 px-2 bg-cyan-700 rounded-md font-semibold dark:text-white'>{article.category}</span>
                    <span className='dark:text-white'>{new Date(article.created_at).toLocaleDateString()}</span>
                </div>
                <p className='dark:text-white mt-3'>{article.content}</p>
                    </>
                )}
                
            </div>
        )
}
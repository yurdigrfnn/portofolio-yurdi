import { useRouter } from 'next/router'
import Layout from '../components/Layout/Layout'
export default function Page404() {
   const router = useRouter();
    return (
        <Layout title='404'>
            <section className="container mx-auto md:w-10/12 w-11/12 pt-9">
                <div className='flex justify-center items-center'>
                    <h1 className="dark:text-white md:font-bold md:text-3xl font-semibold text-2xl">Not Found page : {router.asPath}   </h1>    
                 </div>
             </section>
        </Layout>
        )
    }
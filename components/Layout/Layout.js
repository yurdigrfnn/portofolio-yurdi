
import Head from 'next/head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/navbar';

export default function Layout({children,title}) {
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className='flex flex-col justify-between min-h-screen dark:bg-slate-800'>
            <Navbar />
            <div className='container mx-auto'>
                {children}
            </div>
            
            <Footer />
        </div>
        </>
    )
}
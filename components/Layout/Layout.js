
import Head from 'next/head';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function Layout({children,title}) {
    return (
        <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className='min-h-screen dark:bg-slate-800 flex justify-between flex-col'>
                <div>
                    <Navbar />
                    <div className='container mx-auto'>
                        {children}
                    </div>  
                </div>
            <Footer />
        </div>
        </>
    )
}
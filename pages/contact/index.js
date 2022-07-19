import { useEffect  } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../../components/Layout/Layout';
import Contact from '../../components/contact/Contact';
export default function Contacts(){
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[])
    return (
        <Layout title='Contact Me'>
        <div className='container flex' data-aos='fade-up'>
            <Contact />
        </div>
        </Layout>
    )
}
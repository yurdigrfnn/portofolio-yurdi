import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'
import Layout from '../components/Layout/Layout';
import MainContent from '../components/home/MainContent';
import About from '../components/home/About';
import Skils from '../components/home/Skils';
import FeaturedProject from '../components/home/FeaturedProject';

export default function Home(){
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
        document.title = 'About Me';
    },[])
    return (
      <Layout title='About Me'>
        <div className="container flex flex-col" data-aos='fade-up'>
            <MainContent />
            <About />
            <Skils />
            <FeaturedProject />
        </div>
        </Layout>
    )
}
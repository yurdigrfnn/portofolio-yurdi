import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Layout from '../../components/Layout/Layout';
import PersonalProject from '../../components/project/PersonalProject';
import GithubRepositories from '../../components/project/GithubRepositories';

export default function Project(res){
    useEffect(()=>{
        AOS.init();
        AOS.refresh();   
    },[])
    return (
    <Layout title='Project'>
        <div className='container flex flex-col' data-aos ='fade-up'>
            <PersonalProject />
            <GithubRepositories res={res}  />
        </div>
        </Layout>
    )
}


export async function getServerSideProps() {
    const request = await fetch('https://api.github.com/users/yurdigrfnn/repos');
    const res = await request.json();
    return {
    props: {res}, // will be passed to the page component as props
    }
  }

import { Routes ,Route,NavLink } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Swithcer from './pages/components/switcher';
// import homeLogo from './home.svg'
import {AiOutlineHome,AiOutlineProject,AiOutlineProfile,AiOutlineBook} from 'react-icons/ai'
import DetailsProject from './pages/DetailsProject';
import NotFound from './pages/NotFound';



function App() { 
  const nama = {
    nama : '{ YRD }'
  }
  
  return (
    <div className='flex flex-col justify-between min-h-screen dark:bg-slate-800'>
      <div className='container mx-auto relative'>
        <div className='mx-auto w-11/12 mt-10 lg:w-9/12 flex justify-between md:absolute md:left-0 right-0'>
          <h1 className='text-4xl font-bold bg-gradient-to-tr from-sky-600 to-sky-300 bg-clip-text text-transparent font-nama'>{nama.nama}</h1>
          <div className='dark:bg-slate-500 bg-gradient-to-tr from-sky-600 to-sky-300 p-2 rounded-xl'>
            <Swithcer />
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0 w-full md:mt-10 md:pt-1 dark:bg-slate-900 md:dark:bg-transparent md:bg-transparent bg-slate-200 rounded-t-xl md:bottom-auto md:relative md:container md:mx-auto md:top-0 md:w-1/2 z-[10000] border-t border-slate-400 md:border-none md:px-10 lg:px-14 flex justify-between px-8 py-5 items-center md:justify-between sm:px-12'>
          <li className='inline-block noactive'>
            <NavLink to='/' activeClassName='active'>
              <AiOutlineHome size={30} className='md:hidden'/>
              <span className='text-xl textnone font-bold'>Home</span>
            </NavLink>
          </li>
          <li className='inline-block noactive'>
            <NavLink to='/project' activeClassName='active'>
              <AiOutlineProject  size={30} className='md:hidden' />
              <span className='text-xl textnone font-bold'>Project</span>
            </NavLink>
          </li>
          <li className='inline-block noactive'>
            <NavLink to='/blog' activeClassName='active'>
              <AiOutlineBook size={30} className='md:hidden'/>
              <span className='text-xl textnone font-bold'>Blog</span>
            </NavLink>
          </li>
          <li className='inline-block noactive'>
            <NavLink to='/contact' activeClassName='active'>
              <AiOutlineProfile size={30} className='md:hidden' />
              <span className='text-xl textnone font-bold'>Contact</span>
            </NavLink>
          </li>
        </div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path='blog/:slug' element={<DetailsProject />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className='mt-24 bg-slate-900'>
        <div className='flex justify-center content-center'>
        <div className='w-full pt-10 border-t border-slate-700'>
                <div className='flex items-center justify-center gap-5 mb-5'>
                    <a href='https://github.com/yurdigrfnn' className='mr-3 flex justify-center items-center hover:text-white transition-all duration-700 ease-in-out text-cyan-800'>
                        <svg role="img" className='fill-current' width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href="https://www.instagram.com/yurdiansyah.143" className="mr-3 flex justify-center items-center hover:text-white transition-all duration-700 ease-in-out text-cyan-800">
                        <svg role="img" className="fill-current" width ="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/yurdiansyah-8061701b7/" className="mr-3 flex justify-center items-center hover:text-white transition-all duration-700 ease-in-out text-cyan-800">
                        <svg role="img" className="fill-current" width ="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href='https://twitter.com/Yurdiansyah143' className="mr-3 flex justify-center items-center hover:text-white transition-all duration-700 ease-in-out text-cyan-800">
                        <svg role="img" className="fill-current" width ="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                </div>
                <p className='font-medium text-xs text-center text-slate-300 pb-32 md:pb-5'>Created 🚀  by yurdiansyah using ReactJs And TailwindCSS ✨ </p>
            </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;

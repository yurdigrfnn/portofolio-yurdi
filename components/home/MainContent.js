export default function MainContent() {
    return (
        <div className="mx-auto w-11/12 mt-40 box-content lg:w-9/12">
            <h1 className="text-5xl font-bold lg:text-6xl dark:text-white ">Hai, im <span className="bg-gradient-to-r from-cyan-600 to-sky-500 bg-clip-text text-transparent">Yurdiansyah</span></h1>
            <p className="text-slate-600 font-medium max-w-md mt-7 dark:text-slate-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat! Lorem ipsum dolor sit amet.</p>
            <div className="mt-16 w-full flex flex-col gap-6 md:flex-row">
                <span className="py-2 text-center md:w-1/2  bg-gradient-to-r from-sky-800 to-cyan-400 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-all duration-500"><a href="http://github.com/yurdigrfn">Visit Github</a></span>
                <span className="py-2 text-center md:w-1/2 text-white rounded-lg bg-gradient-to-r from-indigo-800 to-blue-400 shadow-lg hover:scale-105 transition-all duration-500"><a href="http://github.com/yurdigrfn">YouTube</a></span>
            </div>
        </div>
    )
}

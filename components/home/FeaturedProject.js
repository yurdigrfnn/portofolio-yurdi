import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { data } from '../../DataMockup/data';

export default function FeaturedProject(){
    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div className='mx-auto w-11/12 mt-14 lg:w-9/12'>
            <div className='text-4xl dark:text-white flex justify-between'>
                <p>Featured Project </p>
                <div className='flex'>
                    <MdChevronLeft size={30} onClick={slideLeft} className="cursor-pointer" /><MdChevronRight size={30} onClick={slideRight} className="cursor-pointer"/>
                </div>    
            </div>
            <div className='relative flex items-col mt-4'>
                <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {data.map((items)=>(
                    <img className='w-[220px] inline-block py-2 pr-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ' src={items.Img} key={items.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}
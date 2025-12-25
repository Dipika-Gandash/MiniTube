import Button from './Button';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonList = () => {
  const buttons = ["All", "Music", "Gaming", "Playlists", "News", "Movies", "Live", "Coding", "Javascript","AI", "Podcasts", "Study", "Comedy", "Cooking", "Sports", "Travel", "Fashion", "Bollywood"];
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    })
  }

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    })
  }


  return (
    <div className='relative flex gap-1 items-center'>
      <button className='p-2 bg-gray-400 rounded-full' onClick={scrollLeft}>
        <ChevronLeft />
      </button>

      <div className='flex gap-4 flex-nowrap whitespace-nowrap overflow-x-auto hide-scrollbar' ref={scrollRef}>
       {buttons.map((button, index) => (
        <Button key={index} name={button} />
       ))}
      </div>

      <button className='p-2 bg-gray-400 rounded-full' onClick={scrollRight}>
        <ChevronRight />
      </button>
    </div>
  )
}

export default ButtonList
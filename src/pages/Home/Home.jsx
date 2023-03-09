import React from 'react'
import GalleryCard from '../../components/GalleryCard'

export default function Home() {
  return (
    <div className='container mx-auto md:py-20 py-10 md:px-0 px-5'>
      <div className='header md:flex justify-between items-center'>
            <h1 className='text-4xl font-bold text-slate-800'>#Case Study for <span className='text-violet-500'>Front-End</span></h1>
            <div class="search-container relative md:w-96 w-full max-w-lg ml-auto md:mt-0 mt-10">
                <div class="flex justify-between overflow-hidden rounded-full bg-white shadow shadow-black/20">
                  <input type="text" class="block w-full flex-1 py-2 px-5 focus:outline-none" placeholder="Start Typing..." />
                  <span class="m-1 inline-flex cursor-pointer items-center rounded-full bg-violet-500 px-2 py-2 hover:bg-indigo-700">
                    <img src="/magnifier.svg" className='w-8' alt="" />
                  </span>
                </div>
            </div>
      </div>

      <div className='gallery-container w-full h-auto grid grid-cols-[repeat(auto-fill,_15rem)] gap-4 justify-center mt-10'>
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
          <GalleryCard />
      </div>
    </div>
  )
}

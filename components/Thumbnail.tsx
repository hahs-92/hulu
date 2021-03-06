import type { NextPage } from 'next'
import Image from 'next/image'

const Thumbnail: NextPage<ThumbnailProps> = ({result}) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return(
        <article className='p-2 group cursor-pointer transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50'>
            <Image 
                layout='responsive'
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path }` ||
                    `${BASE_URL}${ result.poster_path}`
                }
                height={1080}
                width='1920'
            />
            <section className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_title}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.release_date }
                </p>
            </section>
        </article>
    )
}

export default Thumbnail
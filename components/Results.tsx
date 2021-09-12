import type { NextPage } from 'next'
//componentes
import Thumbnail from "./Thumbnail"

const Results: NextPage<ResultsProps> = ({results}) => {
    return(
        <section className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                results.map((result) => (
                    <Thumbnail key={result.id} result={result}/>
                ))
            }
        </section>
    )
}

export default Results

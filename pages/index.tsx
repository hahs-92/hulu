import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next'
import Head from 'next/head'
//components
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import request from '../utils/request'

const Home: NextPage<HomeProps> = ({ results}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  console.log("data: ", results)
  return (
    <div className=''>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Clone the Hulu created by HAHS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results  results={results}/>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async({query}) => {
  const genre = query.genre
  const res = await fetch(`https://api.themoviedb.org/3${request[genre]?.url  || request.fetchTrending.url}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      results: data.results
    },
  }
}

export default Home

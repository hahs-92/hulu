import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//components
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Clone the Hulu created by HAHS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home

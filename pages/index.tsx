import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BlogContainer from '../components/BlogContainer'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Sponsors from '../components/Sponsors'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>World Cup</title>
        <meta name="description" content="World cup stat app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Navbar/>
        <Header />
        <BlogContainer />
        <Sponsors />
        <Footer />
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home

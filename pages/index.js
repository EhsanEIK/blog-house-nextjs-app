import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home-Blog House</title>
      </Head>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  )
}

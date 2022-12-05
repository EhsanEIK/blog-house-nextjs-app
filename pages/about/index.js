import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/Home.module.css'

const index = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold my-5">About Us</h1>
                        <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam eveniet reprehenderit, nihil ut necessitatibus odio quis eligendi quaerat commodi aliquid facilis iure harum hic excepturi asperiores error, fugit perferendis odit sit repellat deserunt labore. Animi, hic. Soluta, harum vitae labore distinctio similique qui reprehenderit voluptatum natus non ipsum nam maiores?</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;
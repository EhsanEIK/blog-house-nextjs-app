import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const blogDetails = () => {
    return (
        <div>
            <Head>
                <title>Blog Details-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default blogDetails;
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
    return (
        <div>
            <Head>
                <title>Users-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl text-center font-bold mt-5 mb-10">All Users</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;
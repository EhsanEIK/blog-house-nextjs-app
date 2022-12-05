import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
    return (
        <div>
            <Head>
                <title>Blogs-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center font-bold my-5">All Blogs</h1>
        </div>
    );
};

export default index;
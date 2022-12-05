import Head from "next/head";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/Home.module.css';

const index = ({ blogs }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blogs-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center font-bold mt-5 mb-10">All Blogs</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    blogs.map(blog =>
                        <Blog key={blog.id}
                            blog={blog}></Blog>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;

// loaded all the blogs from api
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            blogs: data,
        }
    }
}
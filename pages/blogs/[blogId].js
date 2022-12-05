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

// loaded single blog details
export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
    const data = await res.json();

    return {
        props: {
            blog: data,
        }
    }
}

// loaded all the paths of blogId from api
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs = await res.json();

    const paths = blogs.map(blog => {
        return {
            params: {
                blogId: `${blog.id}`,
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
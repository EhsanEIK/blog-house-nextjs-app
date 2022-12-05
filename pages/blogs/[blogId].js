import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const blogDetails = ({ blog }) => {
    return (
        <div>
            <Head>
                <title>Blog Details-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl text-center font-bold mt-5 mb-10">Blog Details</h1>
                <div className="card bg-primary text-primary-content m-10">
                    <div className="card-body">
                        <h2 className="card-title">Title: {blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>User ID: {blog.userId}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default blogDetails;

// loaded single blog details from api
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
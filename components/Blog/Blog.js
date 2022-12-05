import Link from "next/link";

const Blog = ({ blog }) => {
    return (
        <div className="card md:w-96 w-full bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`/blogs/${blog.id}`}>
                        <button className="btn">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
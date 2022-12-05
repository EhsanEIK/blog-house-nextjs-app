const Blog = ({ blog }) => {
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.body}</p>
                <div className="card-actions justify-end">
                    <button className="btn">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
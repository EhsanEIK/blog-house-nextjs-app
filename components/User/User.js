import Link from "next/link";

const User = ({ user }) => {
    return (
        <div className="card md:w-96 w-full bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${user.id}`}>
                        <button className="btn">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default User;
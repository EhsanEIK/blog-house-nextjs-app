import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const userDetails = ({ user }) => {
    return (
        <div>
            <Head>
                <title>User Details-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl text-center font-bold mt-5 mb-10">User Details</h1>
                <div className="card bg-primary text-primary-content m-10">
                    <div className="card-body">
                        <h2 className="card-title">Title: {user.name}</h2>
                        <p>User Email: {user.email}</p>
                        <p>User Name: {user.username}</p>
                        <p>Phone {user.phone}</p>
                        <p>Website: {user.website}</p>
                        <p>Company {user.company.name}</p>
                        <ul>Address:
                            <li>Street: {user.address.street}</li>
                            <li>House: {user.address.suite}</li>
                            <li>City: {user.address.city}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center my-5">
                    <Link href='/users'>
                        <button className="btn btn-outline">Go Back</button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default userDetails;

// loaded single user details from api
export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();

    return {
        props: {
            user: data,
        }
    }
}
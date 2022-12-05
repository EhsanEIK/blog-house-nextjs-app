import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import styles from '../../styles/Home.module.css';

const index = ({ users }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Users-Blog House</title>
            </Head>
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl text-center font-bold mt-5 mb-10">All Users</h1>
                <div className="grid grid-cols-3 gap-5">
                    {
                        users.map(user => <User
                            key={user.id}
                            user={user}></User>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default index;

// loaded all the users usign getServerSideProps from api
export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data,
        }
    }
}
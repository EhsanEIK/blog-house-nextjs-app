import Link from "next/link";

const Navbar = () => {
    const menuItems = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/about">About</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link href='/' className="btn btn-ghost text-red-600 text-3xl font-semibold uppercase">
                    <img src='/logo.jpg' alt="" className="w-20 h-10" />
                    House</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
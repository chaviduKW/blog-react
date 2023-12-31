import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1>My Blog</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    {/* <a href="/create" style={{
                        color:"white",
                        backgroundColor:"#f1356d",
                        borderRadius:'8px'
                    }}>New Blog</a> */}
                    <Link to="/create" >New Blog</Link>
                </div>

            </div>
        </>
    );
}

export default Navbar;
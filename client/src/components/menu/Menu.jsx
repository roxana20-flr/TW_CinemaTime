import "./Menu.css";
import { Link } from "react-router-dom";


export default function Menu() {
    return (
        <>
            <div id="dropdown-menu">
                <div className="dropdown-item" id="dropdown-account">
                    <Link style={{ textDecoration: 'none', color: "#E6C068" }}>Account Login</Link>
                </div>
                <div className="dropdown-item" id="dropdown-wishlist">
                    <Link to="/favorite" style={{ textDecoration: 'none', color: "#E6C068" }}>Wishlist</Link>
                </div>
            </div>
        </>
    )
}
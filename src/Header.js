import {Link} from "react-router-dom";

const Header = () => {
    return (<header>
        <nav>
            <h1>Table</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>)
}

export default Header;
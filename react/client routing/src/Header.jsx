import {Link} from "react-router-dom"
function Header() {
    return(
        <header>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/workexample">WorkExample</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header
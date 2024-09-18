import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <>
            <header>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Page1">Page 1</NavLink></li>
                    <li><NavLink to="/Page2">Page 2</NavLink></li>
                    <li><NavLink to="/Page3">Page 3</NavLink></li>
                </ul>
            </header>
        </>
    )
}
export default Header;
import { Route, Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
    const arrays = [{
        id: 1,
        Path: "/",
        element: <h1>Home Page</h1>
    }, {
        id: 2,
        Path: "/Page1",
        element: <h1>Page  1</h1>
    }, {
        id: 3,
        Path: "/Page2",
        element: <h1>Page 2</h1>
    }, {
        id: 4,
        Path: "/Page3",
        element: <h1>Page 3</h1>
    }];
    const datas = arrays.map((array) => <Route key={array.id}
        path={array.Path}
        element={array.element}>
    </Route>)
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
            <Routes>
                {datas}
            </Routes>
        </>
    )
}
export default Header;
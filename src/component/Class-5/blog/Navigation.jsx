import React from 'react'
import './allFile.css'
function Navigation() {

    // const navs = ['home', 'page 1', 'page 2', 'page 3', 'page 4'];


    const navs = [{
        id: 1,
        url: "./home",
        urlName: "home"
    }, {
        id: 2,
        url: "./page1",
        urlName: "Page 1"
    }, {
        id: 3,
        url: "./page2",
        urlName: "Page 2"
    }, {
        id: 4,
        url: "./page3",
        urlName: "Page 3"
    }, {
        id: 5,
        url: "./page4",
        urlName: "Page 4"
    }]

    const list = navs.map((nav) => <li key={nav.id}><a href={nav.url}>{nav.urlName}</a></li>);

    return (
        <nav>
            <ul>
                {
                    list
                }

            </ul>
        </nav>
    )
}

export default Navigation
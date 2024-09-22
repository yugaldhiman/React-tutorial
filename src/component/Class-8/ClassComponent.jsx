import { Route, Routes } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import './Template.css'
import image1 from './pics/pic1.jpg'
import image2 from './pics/pic2.jpg'
import image3 from './pics/pic3.jpg'
import image4 from './pics/pic4.jpg'
import React, { Component } from "react";

 class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrays: [
                {
                    id: 1,
                    page: "/",
                    element: <div className="contentBox">
                        <img src={image1} alt="error" />
                        <div className="contentBoxChild">
                            <h1>Welcome To Home Page</h1>
                            <p>A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include:</p>
                        </div>
                    </div>
                }, {
                    id: 2,
                    page: "/Page1",
                    element: <div className="contentBox">
                        <img src={image2} alt="error" />
                        <div className="contentBoxChild">
                            <h1>Welcome To Page No 2</h1>
                            <p>A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include:</p>
                        </div>
                    </div>
                }, {
                    id: 3,
                    page: "/Page2",
                    element: <div className="contentBox">
                        <img src={image3} alt="error" />
                        <div className="contentBoxChild">
                            <h1>Welcome To Page No 3</h1>
                            <p>A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include:</p>
                        </div>
                    </div>
                }, {
                    id: 4,
                    page: "/Page3",
                    element: <div className="contentBox">
                        <img src={image4} alt="error" />
                        <div className="contentBoxChild">
                            <h1>Welcome To Page No 4</h1>
                            <p>A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include: A call to action is a request for consumers to seek more information about your brand,
                                and it embodies the purpose of the website. At the bottom of the welcome message,
                                write a specific action for visitors to take. Consider the information your customers need to support your business.
                                You can activate the text with a link that directs the user to another page of the website, such as the stock list or the directions to create an account.
                                Other examples of a call to action include:</p>
                        </div>
                    </div>
                }
            ]
        }
    }

    render() {
        const datas = this.state.arrays.map((array) => <Route key={array.id}
            path={array.page}
            element={array.element}>
        </Route>)
        return (
            <>
                <main className="main">
                    <div className="leftBox">
                        <h1>{this.props.title}</h1>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Page1">Page 1</NavLink></li>
                            <li><NavLink to="/Page2">Page 2</NavLink></li>
                            <li><NavLink to="/Page3">Page 3</NavLink></li>
                        </ul>
                    </div>
                    <div className="rightBox">
                        <Routes>
                            {datas}
                        </Routes>
                    </div>
                </main>
            </>
        )
    }
}
export default ClassComponent
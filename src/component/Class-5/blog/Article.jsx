import React from 'react'
import './allFile.css'

function Article(props) {
    const arrays = [{
        id: 1,
        h1: "welcome to heading 1.",
        p: "React has been designed from the start for gradual adoption.You can use as little or as much React as you need.Whether you want to get a taste of React, add some interactivity to an HTML page,or start a complex React-powered app, this section will help you get started."
    }, {
        id: 2,
        h1: "welcome to heading 2.",
        p: "It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:"
    }, {
        id: 3,
        h1: "welcome to heading 3.",
        p: "Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them."
    }, {
        id: 4,
        h1: "welcome to heading 4.",
        p: "When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide."
    }, {
        id: 5,
        h1: "welcome to heading 5.",
        p: "Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them."
    }];
    const datas = arrays.map((array) => <article key={array.id}>
        <h1>{array.h1}</h1>
        <p>{array.p}</p>
    </article>)
    return (
        <article>
            {datas}
            {props.children}
        </article>
    )
}

export default Article
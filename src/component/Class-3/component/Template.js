import React from 'react'

function Template(props) {
    
    let fristHeaderCss = { height: "10vh", width: "99.6%", backgroundColor: props.fristtheme, border: "3px solid black" }
    let secondHeaderCss = { height: "10vh", width: "99.6%", backgroundColor: props.secondtheme, border: "3px solid black" }
    let medilBox = { height: "68vh", width: "99.6%", display: "flex", border: "3px solid black" }
    let leftBox = { height: "68vh", width: "70%", backgroundColor: props.lefttheme, border: "3px solid black" }
    let rightBox = { height: "68vh", width: "30%", backgroundColor: props.righttheme, border: "3px solid black" }
    let futarCss = { height: "10vh", width: "99.6%", backgroundColor: props.futtartheme, border: "3px solid black" }
    return (
        <>
        
            <div style={fristHeaderCss}></div>
            <div style={secondHeaderCss}></div>
            <div style={medilBox}>
                <div style={leftBox}></div>
                <div style={rightBox}></div>
            </div>
            <div style={futarCss}></div>
        
        </>
    )
}

export default Template

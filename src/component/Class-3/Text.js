import React from 'react'
function Card() {
  let title = "Ducat India";
  const array = ["html", "css", "javaScript", "react"];
  const object = {
    a: "moduls 5",
    b: "moduls 10",
    c: "moduls 15",
    d: "moduls 20"
  }
  return (
    <div>
      <h1>{title} {array[0]} {object.a}</h1>
      <h1>{title} {array[1]} {object.b}</h1>
      <h1>{title} {array[2]} {object.c}</h1>
      <h1>{title} {array[3]} {object.d}</h1>
    </div>
  )
}
export default Card

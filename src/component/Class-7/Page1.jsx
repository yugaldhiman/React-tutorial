import React from 'react'
// import image from './pics/pic1.jpg'
function Page1() {
    const arrayss = [{
        id: 1,
        img: "https://images.pexels.com/photos/28292132/pexels-photo-28292132/free-photo-of-aerial-view-of-a-group-of-people-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        pera: <p>Home Page</p>
    }];
    const datass = arrayss.map((array) => <div key={array.id}
        image={array.img}
        p={array.pera}>
    </div>)
    return (
        <div>
            {datass}
        </div>
    )
}

export default Page1

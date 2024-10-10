import React, { useEffect, useState } from 'react'
import './FetchApi.css'
import axios from 'axios'

const FetchApi = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setDatas(res.data);
            })
            .catch(Error => {
                console.log("Error");
            })
    })
    const list = datas.map((itme) => <div className='mainBox' key={itme.id}>
        <h2 className='haddings'>{itme.name}</h2>
        <h2 className='haddings'>{itme.username}</h2>
        <h3 className='haddings'>{itme.email}</h3>
        <h2 className='haddings'>{itme.address.street}</h2>
        <h4 className='haddings'>{itme.address.suite}</h4>
        <h4 className='haddings'>{itme.address.city}</h4>
        <h4 className='haddings'>{itme.address.zipcode}</h4>
        <h4 className='haddings'>{itme.address.geo.lat}</h4>
        <h4 className='haddings'>{itme.address.geo.lng}</h4>
        <h3 className='haddings'>{itme.phone}</h3>
        <h3 className='haddings'>{itme.website}</h3>
        <h4 className='haddings'>{itme.company.name}</h4>
        <h4 className='haddings'>{itme.company.catchPhrase}</h4>
        <h4 className='haddings'>{itme.company.bs}</h4>
    </div>
    )
    return (
        <>
            {list}
        </>
    )
}

export default FetchApi


// {
//     "id": 1,
//         "name": "Leanne Graham",
//             "username": "Bret",
//                 "email": "Sincere@april.biz",
//                     "address": {
//         "street": "Kulas Light",
//             "suite": "Apt. 556",
//                 "city": "Gwenborough",
//                     "zipcode": "92998-3874",
//                         "geo": {
//             "lat": "-37.3159",
//                 "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//             "company": {
//         "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//                 "bs": "harness real-time e-markets"
//     }
// },
import React from 'react'
import './allFile.css'
function Aside() {

    const images = [{
        id: 1,
        url: "https://images.pexels.com/photos/28374698/pexels-photo-28374698/free-photo-of-a-lone-pine-tree-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }, {
        id: 2,
        url: "https://images.pexels.com/photos/27980945/pexels-photo-27980945/free-photo-of-cloud-over-village-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }];
    const img = images.map((image) => <img key={image.id} className='asideImage' src={image.url} alt="error" />)
    return (
        <aside>
            <marquee>This is Aside Section</marquee>
            {img}
        </aside>
    )
}
export default Aside
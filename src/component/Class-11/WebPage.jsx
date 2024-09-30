import React, { useState } from 'react';
import imgage1 from './image/pic1.jpg';
import imgage2 from './image/pic2.jpg';
import imgage3 from './image/pic3.jpg';
import imgage4 from './image/pic4.jpg';
import imgage5 from './image/pic5.jpg';
import './WebPage.css'

const WebPage = () => {

  const [Image, setImage] = useState(imgage5);

  let img1 = () => setImage(imgage1)
  let img2 = () => setImage(imgage2)
  let img3 = () => setImage(imgage3)
  let img4 = () => setImage(imgage4)

  return (
    <>
      <img src={Image} alt="Error" />
      <ul>
        <li onClick={img1}>
          <h1>Img1</h1>
        </li>
        <li onClick={img2}>
          <h1>Img2</h1>
        </li>
        <li onClick={img3}>
          <h1>Img3</h1>
        </li>
        <li onClick={img4}>
          <h1>Img4</h1>
        </li>
      </ul>
    </>
  );
};

export default WebPage;

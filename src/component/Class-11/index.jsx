< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>JavaScript</title>
                    <style>

                    </style>
                </head>

                <body>
                    <img id="text" src="image/pic1.jpg" alt="error"/>
                        <ul>
                            <li class="li1" onclick="document.getElementById('text').src='image/pic2.jpg'">
                                <img src="image/pic2.jpg" alt="error" style="width: 9vh;border-radius: 20px;border: 2px solid black;" />
                            </li>
                            <li class="li2" onclick="document.getElementById('text').src='image/pic3.jpg'">
                                <img src="image/pic3.jpg" alt="error" style="width: 9vh;border-radius: 20px;border: 2px solid black;" />
                            </li>
                            <li class="li3" onclick="document.getElementById('text').src='image/pic4.jpg'">
                                <img src="image/pic4.jpg" alt="error" style="width: 9vh;border-radius: 20px;border: 2px solid black;" />
                            </li>
                            <li class="li4" onclick="document.getElementById('text').src='image/pic5.jpg'">
                                <img src="image/pic5.jpg" alt="error" style="width: 9vh;border-radius: 20px;border: 2px solid black;" />
                            </li>
                            <li class="li5" style="background-color: gray; color: white;"
                                onclick="document.getElementById('text').src='image/pic1.jpg'">Rest</li>
                        </ul>
                </body>

            </html>
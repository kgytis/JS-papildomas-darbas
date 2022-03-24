const app = document.querySelector("#app")

import Header from './components/header.js'

fetch('http://localhost:3000/header')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        new Header(app,
            data[0].imageSrc,
            "logoDiv",
            "burger",
            ["bi", "bi-justify"],
            "navigationDiv",
            data[1].navigationLinks)
    })


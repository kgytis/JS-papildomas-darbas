const app = document.querySelector("#app")

import Header from './components/header.js'
import About from './components/about.js'

fetch('http://localhost:3000/headerRoute')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        new Header(app,
            data.header[0].imageSrc,
            "logoDiv",
            "burger",
            ["bi", "bi-justify"],
            "navigationDiv",
            data.header[1].navigationLinks)
    })

fetch('http://localhost:3000/aboutRoute')
.then(res => res.json())
.then(data => {
    console.log(data);
    new About(
        "About",
        app,
        data.about,
        "about")
})


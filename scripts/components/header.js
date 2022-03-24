export default class Header {
    constructor(
        mainBody,
        logoSrc,
        logoDivClass,
        burgerDivClass,
        burgerIClasses,
        navigationDivClass,
        headerLinks
    ) {
        this.mainBody = mainBody;
        this.logoSrc = logoSrc;
        this.logoDivClass = logoDivClass;
        this.burgerDivClass = burgerDivClass;
        this.burgerIClasses = burgerIClasses;
        this.navigationDivClass = navigationDivClass;
        this.headerLinks = headerLinks;
        this.headerCreation()
        this.burgerActivation()
    }
    headerCreation = () => {
        const header = document.createElement("header")
        const logodiv = document.createElement("div");
        logodiv.classList.add(this.logoDivClass);
        const img = document.createElement('img');
        img.setAttribute("src", `${this.logoSrc}`);
        const logoHyperLink = document.createElement('a');
        logoHyperLink.setAttribute("href", "index.html");
        

        const burgerDiv = document.createElement("div");
        burgerDiv.classList.add(this.burgerDivClass)
        const burgerHyperLink = document.createElement('a');
        burgerHyperLink.setAttribute("href", "javascript:void(0);")
        const burgerIcon = document.createElement("i")
        this.burgerIClasses.forEach( e => burgerIcon.classList.add(e))

        const navigationDiv = document.createElement("div");
        navigationDiv.classList.add(this.navigationDivClass)
        const navigationUl = document.createElement("ul");

        this.headerLinks.forEach(links => {
            let linkA = document.createElement("a");
            linkA.setAttribute("href", `#${links}`);
            let li = document.createElement("li")
            li.textContent = links

            linkA.append(li)
            navigationUl.append(linkA)
        })

//Append'inimai

//Logo ikelimas i DOM
        logoHyperLink.append(img)
        logodiv.append(logoHyperLink)
        header.append(logodiv)
//Burger ikelimas i DOM
        burgerHyperLink.append(burgerIcon)
        burgerDiv.append(burgerHyperLink)
        header.append(burgerDiv)
//Navigation ikelimas i DOM
        navigationDiv.append(navigationUl)
        header.append(navigationDiv)
//Header ikelimas i DOM
        this.mainBody.append(header);

    }
    burgerActivation = () => {
        let linkai = document.querySelector(".navigationDiv");
        const burger = document.querySelector(".bi-justify");
        
        burger.addEventListener("click", e =>{
            if(linkai.style.display === "flex") {
                linkai.style.display = "none"
            } else {linkai.style.display = "flex"}
        })
    }

}
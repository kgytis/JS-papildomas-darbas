export default class About{
    constructor(
        title,
        mainBody,
        introduction,
        introductionSectionID
        )
    {
        this.title = title,
        this.body = mainBody;
        this.intro = introduction;
        this.id = introductionSectionID;
        this.aboutCreation(this.intro);
    }
    aboutCreation = (data) => {
        let title = document.createElement("h1");
        let mainDiv = document.createElement('div')
        title.textContent = this.title
        let paragraph = document.createElement("p");
        let section = document.createElement("section");

        
        data.forEach(e => {
            let text = document.createTextNode(`${e}`);
            paragraph.append(text)
            paragraph.append(document.createElement("br"))
        });

        section.id = this.id;
        mainDiv.append(title)
        mainDiv.append(paragraph);
        mainDiv.append(document.createElement('hr'))
        section.append(mainDiv)
        this.body.append(section);
    }
}
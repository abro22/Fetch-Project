

fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => {

        return response.json()


    })
    .then((jsonResponse) => {
        console.log(jsonResponse)


        // jsonResponse.forEach((article) => {

        // const headerTag = document.createElement("h1")
        // const header2 = document.createElement("h2")
        // const contentTag = document.createElement("p")
        // const imageTag = document.createElement("img")

        // const contentDiv = document.createElement("div")

        // headerTag.textContent = article.name
        // header2.textContent = article.tagline


        const article = jsonResponse[0]

        console.log(article)

        const mainTitle = document.getElementById("mainTitle")
        const mainContainer = document.getElementById("mainContainer")
        const header1 = document.getElementById("header1")
        const header2 = document.getElementById("header2")
        const content = document.getElementById("content")
        const content2 = document.getElementById("content2")
        const image = document.getElementById("image")
        const button = document.getElementById("button")

        console.log(mainTitle)

        // mainTitle.textContent = article.name
        // mainContainer.textContent = article.tagline

        mainTitle.appendChild(header1)
        mainContainer.appendChild(header2)
        mainContainer.appendChild(content)
        mainContainer.appendChild(content2)
        mainContainer.appendChild(image)
        mainContainer.appendChild(button)

        header1.textContent = article.name
        header2.textContent = article.tagline
        content.textContent = article.description
        content2.textContent = article.brewers_tips
        image.src = article.image_url
        button.textContent







    })












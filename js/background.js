const images = ["1.jpg","2.jpg"]
const chosenimage=(images[Math.floor(Math.random()* images.length)])

const bgimage = document.createElement("img")

bgimage.src=`img/${chosenimage}`

document.body.append(bgimage)
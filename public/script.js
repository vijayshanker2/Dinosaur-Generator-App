

console.log("script.js loaded");

document.getElementById("btnid").addEventListener("click", getDinoName)
const dinoName = document.getElementById("nameid")

const image = document.getElementById("imageid")
async function getDinoName() {
    try {
        console.log("clicked");
        const response = await axios.get('/dinoname');
        console.log(response);

        dinoName.innerHTML = response.data.name[0][0] + " " + response.data.name[0][1]
        image.src = response.data.image
    } catch (error) {
        console.error(error);
    }
}
console.log("Let's get this party started!");
console.log("Let's get this party started!");
const apiKey = "iWUTCAAkDuXpqDtzjVe1Ok1vquYy7nXr";

function getRanGif(data) {
  const gifContainer = document.getElementById("gifContainer");
  let gifImage = data;
  let randomIndex = Math.floor(Math.random() * gifImage.length);
  let randomGif = gifImage[randomIndex];
  const img = document.createElement("img");
  img.src = randomGif.images.original.url;
  let newCol = document.createElement("div");
  newCol.className = newCol;
  newCol.append(img);
  gifContainer.append(newCol);
}
function removeGifs() {
  let gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = "";
}
async function searchGif() {
  const searchInput = document.getElementById("searchInput").value;

  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${apiKey}`
    );

    console.log("API Response:", response.data);

    getRanGif(response.data.data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

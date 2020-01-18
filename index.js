document.getElementById("displayDataContainer");

document.getElementById("myButton").addEventListener("click", getVader);

window.addEventListener("DOMContentLoaded", getLuke);

function getLuke(event){
  event.preventDefault();
  fetch("https://swapi.co/api/people/1/") 
  .then(response => response.json()) 
  .then(myJson => { 
    displayDataContainer.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
  .catch(error => {
    console.log(`error, either client(400's) or server(500's) side!`);
    alert(`error, either client(400's) or server(500's) side!`);
  })
}
//getLuke();

function getVader(event){
  event.preventDefault();
  fetch("https://swapi.co/api/people/4/") 
  .then(response => response.json()) 
  .then(myJson => { 
    displayDataContainer.innerHTML =
      "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
  .catch(error => {
    console.log(`error, either client(400's) or server(500's) side!`);
    alert(`error, either client(400's) or server(500's) side!`);
  })
  myButton.innerText = "Luke, I am your father!";
}

function playMe() {
  document.getElementById("video1").src = "https://www.youtube-nocookie.com/embed/Z7YVa-p9nvU?;rel=0&amp;autoplay=1";
}
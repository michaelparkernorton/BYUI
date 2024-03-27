// classes data
const data = "classes.json"

let classData = []
const projects = document.getElementById("projects")

/* Step 5 async getGames Function using fetch()*/
const getData = async () => {
  const response = await fetch(data);
  if (response.ok) {
    classData = await response.json();
  }
	// create a new div element
	const newDiv = document.createElement("div");
  const newH2 = document.createElement("h2");
	const newLink = document.createElement("a")
  const newImage = document.createElement("img");

  // and give it some content
	newH2.textContent = classData[0].name
	newImage.src = classData[0].image
	newLink.href = classData[0].link

  // add the newly created element and its content into the DOM
	newDiv.appendChild(newH2)
	newDiv.appendChild(newLink)
	newLink.appendChild(newImage);
  projects.appendChild(newDiv);
	console.log(classData[0].image);
	
  // const tr = document.createElement("tr")
//   displayGames(gameList.data)
//   const initialValue = 0;
//   const goalsForTotal = goalsFor.reduce((accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
//   const goalsAgainstTotal = goalsAgainst.reduce((accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );
//   const winsTotal = wins.reduce((accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
//   const lossesTotal = losses.reduce((accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );

//   const card = template.content.cloneNode(true).children[0]
//   const cardDate = card.querySelector("[data-date]")
//   const cardTime = card.querySelector("[data-time]")
//   const cardOpponent = card.querySelector("[data-opponent]")
//   const cardLocation = card.querySelector("[data-location]")
//   const cardScore = card.querySelector("[data-score]")
//   const cardWL = card.querySelector("[data-w-l]")
//   cardDate.textContent = ""
//   cardTime.textContent = ""
//   cardOpponent.textContent = ""
//   cardLocation.textContent = ""
//   cardScore.textContent = `${goalsForTotal} - ${goalsAgainstTotal}`
//   cardWL.textContent = `${winsTotal} - ${lossesTotal}`

//   gamesElement.append(card);

// Unfinished scoll feature
  // const bodyRect = document.body.querySelector('main').getBoundingClientRect()

  // const tr = document.querySelectorAll('tr')
  // tr.forEach(tr => {
  //   const rect = tr.getBoundingClientRect()
  //   const offset = rect.top - bodyRect.top
  //   tr.addEventListener('click', (e) => {scroll(0, offset)})
  // });

};

getData();
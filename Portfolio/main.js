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

	classData.forEach(classProject => {
		
		// create a new div element
		const newDiv = document.createElement("div");
		const newH2 = document.createElement("h2");
		const newLink = document.createElement("a")
		const newImage = document.createElement("img");
	
		// and give it some content
		newH2.textContent = classProject.name
		newImage.src = classProject.image
		newLink.href = classProject.link
	
		// add the newly created element and its content into the DOM
		newDiv.appendChild(newH2)
		newDiv.appendChild(newLink)
		newLink.appendChild(newImage);
		projects.appendChild(newDiv);
	});

};

getData();
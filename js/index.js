//create a footer and add it to the body

const footer = document.createElement('footer')//creating a footer element
const body = document.querySelector('body')//selecting the body of HTML
body.appendChild(footer);// Adding the footer to HTML


//add a copyright  to the footer
const today = new Date(); // date object creation
const thisYear = today.getFullYear() // picking only the year
const copyright = document.createElement('p'); //create the copyright element
copyright.innerHTML = `<span>&#169 Anthony ${thisYear}</span>` //look inside the HTML to see what's there or put new things inside.
footer.appendChild(copyright) // add copyright to the footer

//updating the skillsList
const skillsList = ['Javascript', 'HTML', 'CSS', 'GitHub','Python','Ruby']
const skillsSection = document.getElementById('skills')
const skillsULContainer = document.createElement('div')
skillsULContainer.className='skills-container'
skillsSection.appendChild(skillsULContainer)
const skillsUL = document.createElement('ul')
skillsUL.className = 'skill-ul'
skillsULContainer.appendChild(skillsUL)

skillsList.forEach(skill => {
    let skillLI = document.createElement('li')
    skillLI.innerHTML = skill
    skillsUL.appendChild(skillLI)
});


//Use DOM selectors to get the form element
const messageForm = document.querySelector('[name="leave_message"]')
console.log(messageForm)


// add event listener to form
// so we can get the user's input values
// And create new message using the input values
messageForm.addEventListener("submit", (event)=>{
    //prevent page from reloading
    event.preventDefault();

    //getting the values from what the user inputted
    const usersName = event.target.usersName.value
    const usersEmail = event.target.usersEmail.value
    const usersMessage = event.target.usersMessage.value

    //select the HTML element that will contain new message(<ul></ul>)
    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector('ul')
    console.log("message Section",messageSection)
    console.log("message List",messageList)
    
    //create the new message element(<li></li>)
    const newMessage = document.createElement("li")

    //Adding the content from the user inputs into the new message element
    newMessage.innerHTML = `
    <a href=mailto${usersEmail}>${usersName}</a>
    <span>${usersMessage}</span>
    `

    //creating a button to remove the new message
    const removeButton = document.createElement("button")
    removeButton.innerText ="remove"
    removeButton.type = "button"

    //Creating an event listener that removes the new message
    removeButton.addEventListener("click", (event)=>{
        const entry = event.target.parentNode;
        entry.remove()
    })

    // Add removeButton to the newMessage
    newMessage.appendChild(removeButton)

    //add new message to DOM
    messageList.appendChild(newMessage)
    
    // reset the form inputs
    messageForm.reset()
})


// DOM Selectors (Getting HTML Elements)
const projectSection = document.getElementById("projects")
console.log("projectSection: ",projectSection)

const projectList = projectSection.getElementsByTagName("ul")[0]
console.log("projectList: ",projectList)

//fetch API process

// fetch has two parameters, url and options. The first parameter is required it defines the URL of the request that you want to send. If the URL is the only argument passed into the fetch function then a GET request will be made.

// The second parameter is optional it defines the other components of the request besides the URL:

// method - the method of the request (GET, POST, PUT, PATCH, DELETE)
// headers - an object whose key-value pairs are header names and values
// body - value should be a string of the body of the request
// Fetch (Getting Projects from GitHub API)

fetch('https://api.github.com/users/AnthonyKamanya/repos')
.then((response)=>{
  return response.json()
})
.then((data)=>{
//TODO add repositories to DOM
  console.log("Repositories",data)
// loop through repositories array and
for (let i = 0; i < data.length; i++){
    console.log("each data :", i)
    // -get specific project data out
    const project = data[i].name;
    // -create DOM (HTML) elements
    const li =document.createElement("li")
    // Put the data from the project into the DOM element (li)
    li.innerText =project;
    // Add DOM Elements to the page(into projectList)
    projectList.appendChild(li)
}})
.catch((error)=>{
// TODO add error message to DOM
    console.log(error)
    const errorMessage = document.createElement("p")
    errorMessage.innerText =error.message
    projectSection.appendChild(errorMessage)
})


// Extra credit display the message only when there is a message in it
// there is an element in HTML that hides content
// when you click the edit button you should bring the whole form back
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


const messageForm = document.getElementsByName('leave_message')[0] //selecting the form by name attribute
console.log(messageForm) // messageForm is a nodeList with [0] and should be accessed individual inputs

messageForm.addEventListener("submit",callBack);//adding an event listener to submit button

function callBack(event){
    event.preventDefault();
    const data = new FormData(event.target)
    const name = data.get('userName')
    const email = data.get('userEmail')
    const message = data.get('usersMessage')
    console.log(`Name: ${name}, Email: ${email}, Message: ${message},`)


    const messageSection = document.getElementById("messages")
    console.log(messageSection)
    const messageList = messageSection.querySelector('ul')
    console.log(messageList)
    const newMessage = document.createElement('li')
    newMessage.textContent = "listMessage"
    console.log(newMessage)
    messageList.appendChild(newMessage)
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message} </span>`
    
    messageSection.hidden = false
    let resetForm = document.getElementsByClassName('message-form')[0].reset() 
}
//Create a variable named removeButton
let removeButton = document.createElement('button')
removeButton.innerText = "remove"
removeButton.type = "button"


removeButton.addEventListener("click", onRemove)

function onRemove(){
    let entry =removeButton.parentNode
    console.log(entry)
    entry.remove()

    const messageSection = document.getElementsByClassName("message-section")
    console.log(messageSection)
    const messageList = messageSection.querySelector('ul')
    console.log(messageList)
    if(messageList.length === 0){
        messageSection.hidden = true
    }
    
}


const newMessage = document.createElement("li");
newString = `<a href="mailto:${email}">${name}</a> <span>${message} </span>` ;
console.log(newString)
newMessage.innerHTML = newString;

// Add a remove button
removeButton.setAttribute("id","removeButtonId")
removeButton.addEventListener("click", onRemoveButton);
console.log(removeButton);

//Add remove button
newMessage.appendChild(removeButton);

//Add message
messageList[0].appendChild(newMessage) ;
































    // display messages section
    // const messageSection =document.getElementsByTagName('ul')
    
    // console.log(messageSection)

    // const messageList = messageSection.getElementsByName('messageSection')
    // console.log(messageList)

    // Hide the message until submission is done
    // messageSection.hidden = false

    // clear the form after submission
    











//
//    const userName = document.querySelector('#userName')
//    const userEmail = document.querySelector('#userEmail')
//    const userMessage = document.querySelector('#userMessage')
   
//    let messageSection = document.getElementsByName('message')
//   

//    console.log(event.target.userName)
//    console.log(event.target.userEmail)
//    console.log(event.target.userMessage)

//    console.log(userName.innerHTML)
//    console.log(userEmail.innerHTML)
//    console.log(userMessage.innerHTML)
// }








// Extra credit display the message only when there is a message in it
// there is an element in HTML that hides content
// when you click the edit button you should bring the whole form back
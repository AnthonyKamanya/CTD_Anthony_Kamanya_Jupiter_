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
const skillsUL = document.createElement('ul')
skillsUL.className = 'skill-ul'
skillsSection.appendChild(skillsUL)

skillsList.forEach(skill => {
    let skillLI = document.createElement('li')
    skillLI.innerHTML = skill
    skillsUL.appendChild(skillLI)
});
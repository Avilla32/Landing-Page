const navBarList = document.getElementById('navbar__list')

document.createElement('li')


// gets name of sections on page
function getSectionNames() {
    let i = 0;
    let sectionName = [];
    const sectionNames = document.querySelectorAll('section');
    for (i = 0; i < sectionNames.length; i++) {
        sectionName.push([sectionNames[i].getAttribute('id')]);
        console.log(sectionName);
        
    }
    return sectionName
}

// calls the function to get sections on page
getSectionNames()

/*
let navItem = document.createElement("LI");                 // Create a <li> node
let navText = document.createTextNode(getSectionNames([]));         // Create a text node
navItem.appendChild(navText);                              // Append the text to <li>
document.getElementById("navbar__list").appendChild(navItem);     // Append <li> to <ul> with id="navbar__list" 
*/
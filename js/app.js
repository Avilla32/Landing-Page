// gets name of sections on page
function getSectionNames() {
    let i = 0;
    let sectionName = [];
    const sectionNames = document.querySelectorAll('section');
    for (i = 0; i < sectionNames.length; i++) {
        sectionName.push([sectionNames[i].getAttribute('id')]);

    }
    return sectionName
}

//creates navBar
function createNavBar() {
    let i = 0;
    const navItems = document.querySelectorAll('section');

    for (i = 0; i < navItems.length; i++) {
            let items = getSectionNames();
        let navItem = document.createElement("LI"); // Create a <li> node
        let navText = document.createTextNode(items[i]); // Create a text node
        navItem.appendChild(navText); // Append the text to <li>
        document.getElementById("navbar__list").appendChild(navItem);
    }
}
createNavBar();
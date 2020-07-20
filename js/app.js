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

function getSections() {
    const sections = document.querySelectorAll('section');
}

//creates navBar

function createNavBar() {
    let i = 0;
    const navItems = getSections();

    for (i = 0; i < navItems.length; i++) {
        let items = getSectionNames();
        let navLink = document.createElement("A")
        let navItem = document.createElement("LI"); // Create a <li> node
        let navText = document.createTextNode(items[i]); // Create a text node
        navItem.appendChild(navLink); // Append the link to <li>
        navLink.appendChild(navText);
        navItem.classList.add('menu__link');
        navLink.setAttribute("href", '#' + items[i]);
        navLink.setAttribute("id", 'nav' + items[i]);
        document.getElementById("navbar__list").appendChild(navItem);
    }
}
createNavBar();
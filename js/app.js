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
        let navLink = document.createElement("A")
        let navItem = document.createElement("LI"); // Create a <li> node
        let navText = document.createTextNode(items[i]); // Create a text node
        navItem.appendChild(navLink); // Append the link to <li>
        navLink.appendChild(navText);
        navItem.classList.add('menu__link');
        document.getElementById("navbar__list").appendChild(navItem);
    }
}
createNavBar();


//menu__link

function makelink() {
  var li = document.getElementsByClassName('menu__link')[0];
  li.innerHTML = '<a href="#hOME">HTML</a>';
}
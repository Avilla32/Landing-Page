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
        navLink.setAttribute("href", '#' + items[i]);
        navLink.setAttribute("id", '#' + items[i]);
        document.getElementById("navbar__list").appendChild(navItem);
    }
}
createNavBar();


// sees which section is in view and activates class

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

let i = 0;
const sections = document.querySelectorAll('section');
for (i = 0; i < sections.length; i++) {
    let section = getSectionNames();
    const box = document.querySelector('#' + section[i]);
    const navSelector = document.querySelector('#' + section[i]);
    document.addEventListener('scroll', function () {

        if (isInViewport(box)) {
            box.classList.add('your-active-class')

        } else {
            box.classList.remove('your-active-class')
        }

    }, {
        passive: true
    });
}
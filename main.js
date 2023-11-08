//toggles the menu on a click
let myMenu = () => {
    document.getElementById("menuContainer").
    classList.toggle("show");
}
//close the menu if the user clicks outside of
window.onclick = function(event) {
    if (!event.target.matches('.menuBtn')) {
        let drops = document.getElementsByClassName("li-content");
        let i;
        for (i = 0; i < drops.length; i++) {
            let openDrops = drops[i];
            if(openDrops.classList.contains('show')) {
                openDrops.classList.remove('show');
            }
        }
    }
}
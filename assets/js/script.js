

// form repeater
$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

function linkActions() {
    const navLink = document.querySelectorAll(".nav__link");
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
    navLink.forEach((n) => n.addEventListener("click", linkActions));
}
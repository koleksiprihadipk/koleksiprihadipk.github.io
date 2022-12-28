$(document).ready(function () {
    $('table').toggleClass('table');
    document
  .querySelectorAll(".highlight")
  .forEach((highlightDiv) => createNameButton(highlightDiv));
    $('#light-btn').hide();
$('#theme_toggle').on('click', function () {
if ($('body').hasClass('dark-theme')) {
//   $(this).toggleClass('btn-light');
//   $(this).addClass('btn-dark');
$('#light-btn').hide();
$('#dark-btn').show();
$(".sidebar").addClass("text-dark");
$(".nav").removeClass("dark-light");
$(".nav").addClass("link-light");
$('body').toggleClass('dark-theme');
$('header').toggleClass('dark-theme');
$('.card').toggleClass('dark-theme');
$('h5.card-title').toggleClass('dark-theme');
$('a').toggleClass('dark-theme');
$('.card').toggleClass('dark-theme');
localStorage.setItem("mode", "light-theme");
} else {
//   $(this).toggleClass('btn-light');
//   $(this).removeClass('btn-dark');
$(".sidebar").addClass("text-dark");;
$('#light-btn').show();
$('#dark-btn').hide();
$('body').toggleClass('dark-theme');
$('header').toggleClass('dark-theme');
$('.card').toggleClass('dark-theme');
$('h5.card-title').toggleClass('dark-theme');
$('a').toggleClass('dark-theme');
$('.card').toggleClass('dark-theme');
localStorage.setItem("mode", "dark-theme");
}
})
//check for localStorage, add as browser preference if missing
// if (!localStorage.getItem("mode")) {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     localStorage.setItem("mode", "dark-theme");
//   } else {
//     localStorage.setItem("mode", "light-theme");
//   }
// }
// //set interface to match localStorage
// if (localStorage.getItem("mode") == "dark-theme") {
//   // $('#theme_toggle').removeClass('btn-dark');
//   // $('#theme_toggle').addClass('btn-light');
//   $(".sidebar").addClass("text-dark");
//   $('#light-btn').hide();
//   $('#dark-btn').show();
//   $('body').addClass('dark-theme');
//   $('.card').addClass('dark-theme');
//   document.getElementById("theme_toggle").checked = true;
// } else {
//   // $('#theme_toggle').addClass('btn-dark');
//   // $('#theme_toggle').removeClass('btn-light');
//   $(".sidebar").addClass("text-dark");
//   $('#light-btn').show();
//   $('#dark-btn').hide();
//   $('body').removeClass('dark-theme');
//   $('.card').removeClass('dark-theme');
//   document.getElementById("theme_toggle").checked = false;
// };
});


var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
        }
        function createNameButton(highlightDiv) {
            var name = highlightDiv.getElementsByTagName('pre')[0].getElementsByTagName('code')[0].dataset.lang;
            const button = document.createElement("button");
            button.className = "type-code-button";
            button.type = "button";
            button.innerText = name;
            addNameButtonToDom(button, highlightDiv);
          }
          function addNameButtonToDom(button, highlightDiv) {
            highlightDiv.insertBefore(button, highlightDiv.firstChild);
            const wrapper = document.createElement("div");
            wrapper.className = "highlight-wrapper";
            highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
            wrapper.appendChild(highlightDiv);
          }

          
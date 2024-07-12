document.addEventListener("DOMContentLoaded", function () {
   window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
         document.getElementById('navbar').classList.add('navbar-solid');
         document.getElementById('navbar').classList.remove('navbar-transparent');
      } else {
         document.getElementById('navbar').classList.add('navbar-transparent');
         document.getElementById('navbar').classList.remove('navbar-solid');
      }
   });
});


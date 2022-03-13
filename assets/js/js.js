// navbar variables
const links = document.getElementById('links');
console.log(links);
const bars = document.querySelector('.bars');



// nav toggle function
const navToggleFunc = function () {
  if (links.className == "links") {
    links.className = "active";
  } else {
    links.className = "links";
  }
  // links.classList.toggle('active');
}

bars.addEventListener('click', function () {
  navToggleFunc();
});

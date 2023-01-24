
// Keep current scroll position on refresh
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem('scrollpos', window.scrollY);
};

//end of keep current scroll position on refresh
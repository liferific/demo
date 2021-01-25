if (location.protocol !== "https:") {
  location.protocol = "https:";
}

$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
    $(".country").html(location.country_name);

    if (location.country_code !== "US") {
      $("#International").show();
      $("#US").hide();
    } else {
      $("#US").show();
      $("#International").hide();
      setTimeout(function() {
        window.open('http://www.techeroo.com', '_self');
      }, 4000);
    }
  }
});

var seconds = 5,
  $seconds = document.querySelector("#Countdown");
(function countdown() {
  $seconds.textContent = seconds + " second" + (seconds == 1 ? "" : "s");
  if (seconds-- > 0) setTimeout(countdown, 1000);
})();

// Wrap every letter in a span
var textWrapper = document.querySelector("#LoadingDots");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: "#LoadingDots .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

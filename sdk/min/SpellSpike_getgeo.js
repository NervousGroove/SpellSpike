function SPKgeoisavailable {
if ("geolocation" in navigator) { /* geolocation is available */ } else { alert("I'm sorry, but geolocation services are not supported by your browser."); }

}

function SPKgetgeo() {
  alert('Your Current Location is' + currentspklocation)

};

var currentspklocation = 'navigator.geolocation.getCurrentPositio'
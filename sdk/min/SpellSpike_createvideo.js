function SPKcreateframe() {

var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", "spikesrc/video.html");
document.getElementsByClassName('sframe')[0]
     .appendChild(ifrm);
     
}
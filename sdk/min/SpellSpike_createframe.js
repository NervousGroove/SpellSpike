function SPKcreateframe() {

var ifrm = document.createElement("iframe");
ifrm.setAttribute("src", "spikesrc/sframe.html");
document.getElementsByClassName('sframe')[0]
     .appendChild(ifrm);
     
}
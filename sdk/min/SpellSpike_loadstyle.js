function SPKloadstyle() {

        var head = document.getElementsByTagName('HEAD')[0]; 

 

        // Create new link Element 

        var link = document.createElement('link'); 

 

        // set the attributes for link element 

        link.rel = 'stylesheet'; 

     

        link.type = 'text/css'; 

     

        link.href = 'style.css'; 

 

        // Append link element to HTML head 

        head.appendChild(link); 

}
var xhr=new XMLHttpReqest();
xhttp.onReadyStateChange=function(){}
    if (foodOrder.readyState == 4 && foodOrder.status ==200){
        document.getElementById("FoodHTML").innerHTML=xhttp.responseText;
    };
    xhttp.open("GET","FoodApp.html", true);
    xhttp.send();

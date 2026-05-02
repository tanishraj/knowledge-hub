var buttons = document.getElementsByTagName("button");

for(var i=0; i<buttons.length; i++){
    var button = buttons[i];
    var buttonName = button.getAttribute("id");

    button.addEventListener('click', function () {
        console.log(buttonName);
    })
}
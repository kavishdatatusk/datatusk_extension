function getUrl() {
    return window.location.href;
}

document.getElementById("checkButton").addEventListener("click", function(){
    // RUN SCRIPT
    var button = document.getElementById("checkButton");
    button.parentNode.removeChild(button);

    var para = document.createElement("p");
    para.textContent = 'Checking for Malice...';
    document.body.appendChild(para);
});
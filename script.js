let counter = "o";

function messageToConsole(){
    alert("Put" + counter + "!");
    counter += "o";
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('do')
    button.addEventListener('mousedown', messageToConsole)
})

let counter = 0;

function messageToConsole(){
    alert("Llamada " + counter);
    counter++;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('do')
    button.addEventListener('mousedown', messageToConsole)
})

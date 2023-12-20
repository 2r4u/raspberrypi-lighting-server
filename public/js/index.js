var socket = io();

socket.on('updateClient', data => {
    var lamp = document.getElementById("lamp");
    var led = document.getElementById("led");

    (data.lamp  === 0 ? (lamp.innerHTML = "Lights Off", lamp.style.color = "#fff") :
        (lamp.innerHTML = "Lights On", lamp.style.color = "#ffff00")); 
});

function toggle(pin) {
    socket.emit('updateServer', pin);
}






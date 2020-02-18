$(function () {
    let socket = io.connect('https://ec2-54-195-247-108.eu-west-1.compute.amazonaws.com:5432');

    socket.on('message', (data) => {
        $('#' + data.receiver).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
        $('#' + data.sender).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
    })
})
$(function () {
    let socket = io.connect('ec2-54-195-247-108.eu-west-1.compute.amazonaws.com:5432/');

    socket.on('message', (data) => {
        console.log('message')
        $('#' + data.receiver).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
        $('#' + data.sender).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
    })
})
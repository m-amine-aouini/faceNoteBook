$(function () {
    let socket = io.connect('5432');

    socket.on('message', (data) => {
        console.log('message')
        $('#' + data.receiver).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
        $('#' + data.sender).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
    })
})
$(function () {
    let socket = io.connect('https://facenotebook.herokuapp.com/');
    // let socket = io.connect('localhost:3001')

    socket.on('message', (data) => {
        console.log('message')
        $('#' + data.receiver).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
        $('#' + data.sender).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
    })
})
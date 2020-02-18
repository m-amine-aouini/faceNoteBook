$(function () {
    let socket = io.connect('postgres://smnabegfpvxexs:4426143161bc76d529475d4d98c62fb8da525bb4952c00e685746e00e28a85d2@ec2-54-195-247-108.eu-west-1.compute.amazonaws.com:5432/d8ft64aa899lss');

    socket.on('message', (data) => {
        console.log('message')
        $('#' + data.receiver).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
        $('#' + data.sender).prepend('<div><h6>' + data.sender + '</h6><p>' + data.message + '</p></div>')
    })
})
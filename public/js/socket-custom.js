let socket = io();
// on -> Sirven para escuchar
// emit -> sirven para emitir informacion

socket.on('connect', function () {
    console.log('conectado al seridor');
})

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Kevin',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(res){
    console.log('servidor:', res);
}); 
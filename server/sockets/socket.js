const { io } = require('../server');

io.on('connection', (cliente) => {// Con este metodo el servidor save cuanto un cliente se conecta
    console.log('usuario conectado');

    cliente.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    cliente.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    // Escuchar el cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);


        cliente.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         rsp: 'todo salio bien'
        //     });    
        // }else{
        //     callback({
        //         rsp: 'todo salio MAL'
        //     });    
        // }
        
    });
})
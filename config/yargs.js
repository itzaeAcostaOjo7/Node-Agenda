const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea.', {
        descripcion
    })
    //.command('listar', 'Muestra todas las tareas.')
    .help()
    .argv;

module.exports = {
    argv
}
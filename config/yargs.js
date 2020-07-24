const opts = {
    opcion: {
        demand: true,
        alias: 'o',
        type: 'string'
    },
    base: {
        demand: true,
        alias: 'b',
        type: 'number'
    },
    limite: {
        alias: 'l',
        default: 10,
        type: 'number'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear una tabla de sumar, restar, multiplicar y dividir con la base y limite según al numero asignado', opts)
    .command('listar', 'Imprime en consola la tabla', opts)
    .usage('Uso: node $0 -o [caracter] -b [num] -l [num]')
    .demandOption(['o', 'b', 'l'])
    .describe('o', 'opcion de operaciones')
    .describe('b', 'base a multiplicar')
    .describe('l', 'limite de la tabla')
    .help()
    .epilog('copyrignt 2020 Hanzell Rivera')
    .argv;

module.exports = {
    argv
}
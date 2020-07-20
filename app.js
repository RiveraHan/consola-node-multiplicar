const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(archivo);

        }).catch((err) => {
            console.log(err);

        });
        break;

    default:
        console.log('Comando no reconocido');



}

// let numRandom = Math.random() * (12 - 1) + 1;
// let base = Math.round(numRandom);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

console.log(argv);

// console.log(process.argv);
const fs = require('fs');
const color = require('colors');

const listarTabla = (base, limite) => {

    console.log('=================================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================================='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${ base } - ${ i } = ${ base + i }`);

    }
}

const crearArchivo = (option, base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base || limite)) {

            rejects('La base o el limete ingresados ¡No son numero!');
            return;
        }

        if (!String(option)) {
            return rejects('La option ingresada no son letras');
        }
        let data = '';
        switch (option) {

            case 'sumar':
                for (let i = 1; i <= limite; i++) {
                    data += `${ base } + ${ i } = ${ base + i }\n`;

                }
                break;
            case 'restar':
                for (let i = 1; i <= limite; i++) {
                    data += `${ base } - ${ i } = ${ base - i }\n`;

                }
                break;
            case 'multiplicar':
                for (let i = 1; i <= limite; i++) {
                    data += `${ base } * ${ i } = ${ (base * i) }\n`;

                }
                break;
            case 'dividir':
                for (let i = 1; i <= limite; i++) {
                    data += `${ base } / ${ i } = ${ base / i }\n`;

                }
                break;
            default:
                console.log('Ocurrio un error');
                break;


        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
            if (err) throw rejects;
            resolve(`tabla-${ base }.txt`.yellow);
        });
    });
}

module.exports = { crearArchivo, listarTabla }
const fs = require('fs');
const color = require('colors');

const listarTabla = (base, limite) => {

    console.log('=================================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================================='.green);

    for (i = 1; i <= limite; i++) {
        console.log(`${ base } x ${ i } = ${ base + i }`);

    }
}

const crearArchivo = (base, limite) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base || limite)) {

            rejects('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * limite }\n`;

        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla ${ base }.txt`, data, (err) => {
            if (err) throw rejects;
            resolve(`tabla-${ base }.txt`.yellow);
        });
    })
}

module.exports = { crearArchivo, listarTabla }
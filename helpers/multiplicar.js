const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base) => {

    return  new Promise((resolve, reject) => { // tambien se puede usar un async await
        let salida = '';

        console.log('======================');
        console.log(`Tabla del ${base}`);
        console.log('======================');
        
        
        for(let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            // console.log(`${base} x ${i} = ${base * i}`)
        }
        
        console.log(salida);
        
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`Se crea la tabla del ${base}`);
        // })
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(`Se crea la tabla del ${base}`);

    })

}

module.exports = {
    crearArchivo
}
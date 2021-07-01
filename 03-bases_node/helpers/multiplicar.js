
const fs = require("fs")
const colors = require('colors');

const crearArchivo = async(base=5, listar=false, hasta=10) => {   // al agregar el async, es una promesa

    try{ 
        let salida = "";
        let consola = "";

        for (let i = 1; i <=hasta; i++) {
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base*i} \n`;
        }

        if( listar ){
            console.log("[=========================]".green);
            console.log(' Tabla del'.rainbow, colors.blue(base), '- hasta:'.rainbow, colors.blue(hasta));
            console.log("[=========================]".green);   

            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla_${base}.txt`, salida);        

        return `tabla_${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    //key: value
    crearArchivo
}
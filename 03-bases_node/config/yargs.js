const argv = require("yargs")
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: "Es la base de la tabla a multiplicar."
    })
    .check((argv, options) =>  {
        if( isNaN( argv.b) ){
            throw 'La base tiene que ser un número!'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        describe: "Imprime el resultado."
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number',
        describe: "Numero hasta el cual se multiplica."
    })
    .check((argv, options) =>  {
        if( isNaN( argv.h) ){
            throw 'El Hasta tiene que ser un número!'
        }
        return true;
    })
    .argv;


module.exports = argv;
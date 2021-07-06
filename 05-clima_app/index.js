require('dotenv').config()

const { inquirerMenu,
        pausa,
        leerInput,
        listarLugares
     } = require('./helpers/inquirer');
const Busquedas = require('./models/buequedas');

const main = async() => {

    console.clear();
    
    const busquedas = new Busquedas();
    let opt;
    do {
        // Imprimir el menú:
        opt = await inquirerMenu();    

        switch (opt) {
            case 1:
                // mostrar mensaje:
                const lugar = await leerInput('Ciudad: ');
                
                // buscar ciudades:
                const lugares = await busquedas.ciudad( lugar );
                
                // seleccionar ciudad:
                const idSel = await listarLugares( lugares );
                if (idSel != 0) {
                    const lugarSel = lugares.find( l => l.id === idSel );
                    
                    busquedas.agregarHistorial( lugarSel.nombre );

                    // obtener clima:
                    const clima = await busquedas.climaLugar( lugarSel.lat, lugarSel.lng );
                    
                    // mostrar resultados:
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad: ', lugarSel.nombre);
                    console.log('Lat.: ', lugarSel.lat);
                    console.log('Lng.: ', lugarSel.lng);
                    console.log('Temperatura: ', clima.temp);
                    console.log('Mín.: ', clima.min);
                    console.log('Máx.: ', clima.max);
                    console.log('El clima esta: ', clima.desc);
                }
                break;

            case 2:  // Listar tareas               
                busquedas.historialCapitalizacion.forEach( (lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;             
        }

        if (opt !== 0) await pausa();        

    } while (opt !== 0);

}

main();

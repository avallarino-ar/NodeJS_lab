
require('colors');
const { inquirerMenu,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
    } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { guardarDB, 
        leerDB 
    } = require('./helpers/guardarArchivo');

console.clear();

const main = async() => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {  // Cargar tareas:
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        // Imprimir el menú:
        opt = await inquirerMenu();    

        switch (opt) {
            case '1':
                // crear opcion    
                const desc = await leerInput('Descripción:');
                tareas.crearTareas( desc );
                break;

            case '2':  // Listar tareas               
                tareas.listadoCompleto();
                break;
                
            case '3':  // Listar tareas completaras
                tareas.listarTareasEstado( completadas = true );
                break;

            case '4':  // Listar tareas pendientes              
                tareas.listarTareasEstado( completadas = false );
                break;
            
            case '5':  // Completado / Pendiente  
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toogleCompletadas( ids );
                break;

            case '6':  // Borrar tareas:               
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if (id != 0){
                    // solicitar confirmación de borrado:
                    const res_conf = await confirmar('Esta seguro?')               
                    if (res_conf){
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada.')
                    }             
                }   
                break;                    
        }

        guardarDB( tareas.listadoArr );
        await pausa();        

    } while (opt !== '0');
}

main();
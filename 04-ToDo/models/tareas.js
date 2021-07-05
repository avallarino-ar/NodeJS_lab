
const Tarea = require("./tarea");

class Tareas {

    _listado = {}

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );

        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }


    borrarTarea( id = '' ){
        if (this._listado[id]) {
            delete this._listado[id];
        }

    }


    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    } 


    crearTareas( desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {        
        console.log();
        this.listadoArr.forEach( (tarea, id) => {
            const idx = `${id + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            
            console.log(`${ idx } ${ desc } :: ${ estado }`); 
        });
    }

    listarTareasEstado( completadas = true ) {        
        console.log();
        let idx = 0
        this.listadoArr.forEach( (tarea, id) => {            
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completado'.green
                                : 'Pendiente'.red;

            if (completadas){
                if (completadoEn != null){ 
                    idx += 1;                    
                    console.log(`${ (idx + '.').green } ${ desc } :: ${ completadoEn.green }`); 
                }
            } else {
                if (completadoEn == null){ 
                    idx += 1;  
                    console.log(`${ (idx + '.').red } ${ desc } :: ${ estado }`); 
                }
            }
        });
    }


    toogleCompletadas( ids = [] ){
        
        ids.forEach( id => {
        
            const tarea = this._listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
                
            }
        });
    }
}



module.exports = Tareas
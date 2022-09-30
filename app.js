const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .check((argv, options) => {
    console.log(argv.b)
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número'
    }
    return true
  }).argv

/**
 * option('l')
 * listar
 * boolean
 * default:false
 *
 * Esta variable la usaremos para definir si queremos mostrar la tabla por consolo o no
 */

console.clear()

// console.log(argv)
// console.log('base: yargs', argv.b)

crearArchivo(argv.b)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch(console.error)

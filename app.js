const { crearArchivo } = require('./helpers/multiplicar')
require('colors')
const argv = require('./config/yargs')

/**
 * Jugar con los colores
 */

console.clear()

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.green, 'creado'))
  .catch(console.error)

const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

/**
 * Jugar con los colores
 */

console.clear()

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(colors.green(nombreArchivo), 'creado'))
  .catch(console.error)

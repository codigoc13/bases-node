const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

/**
 * Tarea:
 * Crear otra opción de consola llamada 'hasta'.
 * Esta opción definirá hasta qué número se generará la tabla.
 * Ejemplo: Si se ingresa -h 15 o --hasta 15, la tabla
 *  de multiplicar irá hasta el 15 y no hasta 10.
 * Si no se ingresa el -h, la tabla deberá seguir generándose hasta el 10.
 */

console.clear()

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(colors.green(nombreArchivo), 'creado'))
  .catch(console.error)

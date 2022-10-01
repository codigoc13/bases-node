const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = '',
      salidaConsola = ''

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
      salidaConsola += colors.blue(`   ${base} x ${i} = ${base * i}\n`)
    }

    if (listar) {
      console.log('=================')
      console.log(colors.yellow('   Tabla del', base))
      console.log('=================')

      console.log(salidaConsola)
    }

    const nombreArchivo = `tabla-${base}.txt`

    fs.writeFileSync(nombreArchivo, salida)

    return nombreArchivo
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}

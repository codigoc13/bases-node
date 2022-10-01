const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = ''

    for (let i = 1; i <= 10; i++) {
      salida += colors.blue(`   ${base} x ${i} = ${base * i}\n`)
    }

    if (listar) {
      console.log('=================')
      console.log(colors.yellow('   Tabla del', base))
      console.log('=================')

      console.log(salida)
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

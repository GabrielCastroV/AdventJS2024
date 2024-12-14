/*

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/


const box = ['###', '#*#', '# #', '# #', '###']


function inBox(box) {
    const [top] = box;
    const boxLength = top.length

    const insiderBox = box.slice(1, -1)

    for (const floor of insiderBox) {
        if (floor.split('').length !== boxLength || !floor.startsWith('#') || !floor.endsWith('#')) return false
    }

    const gift = insiderBox.some((floor) => {
        return floor.includes('*')
    })

    return gift
}

console.log(inBox(box))
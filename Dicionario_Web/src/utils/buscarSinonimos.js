export default function buscarSinonimos(array , tipo) {
    const arrayValores = []
    const valores = array.find(item => item.partOfSpeech === tipo)

    if (!valores) {
        return arrayValores
    }

    valores.synonyms.forEach((item) => {
        if (arrayValores.length > 4) {
            return
        }
        arrayValores.push(item)
    })

    return arrayValores
}
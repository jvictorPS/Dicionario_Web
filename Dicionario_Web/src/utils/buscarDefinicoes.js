export default function buscarDefinicoes(array , tipo) {
    const arrayValores = []
    const valores = array.find(item => item.partOfSpeech === tipo)

    if (!valores) {
        return arrayValores
    }

    valores.definitions.forEach((item) => {
        if (arrayValores.length > 4) {
            return
        }
        arrayValores.push(item.definition)
    })

    return arrayValores
}
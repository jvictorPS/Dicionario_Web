export default function buscarAudio(array) {
    let audioURL = ''
    let valores = array.find(item => item.license && item.license.name == "BY-SA 3.0")

    if (!valores) {
        if (array.length > 0) {
            return audioURL = array[0].audio
        }
    }

    return audioURL = valores.audio 

}
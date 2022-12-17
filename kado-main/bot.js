const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const  botSay = () => {
    return ["Halo, ini mark versi real life nya wkwk. siapa nama kamu?"]
}

pertanyaan.innerHTML = botSay() [0]

function botStart() {
    init++
    if (init === 1) {
        console.log({Nama: jawaban.value})
        pertanyaan.innerHTML = "Apa Harapannya di usia yang ke 15 ini?"
    }   else if (init === 2) {
        console.log({Hope: jawaban.value})
        pertanyaan.innerHTML = "ohh, oke. di luar itu if i be your bf?"
    }   else if (init === 3) {
        console.log({Nembak: jawaban.value})
        pertanyaan.innerHTML = "Khusus pertanyaan tadi jawabnya harus di whatsapp yah, tengkyuuu"
    }   else if (init === 4) {
        finishing ()
    }   else{
        botEnd()
    }
}

function finishing() {
    console.log("finishing")
}

function botEnd() {
    console.log("botEnd")
}
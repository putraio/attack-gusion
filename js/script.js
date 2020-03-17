const tanah = document.querySelectorAll('.tanah');
const gusion = document.querySelectorAll('.gusion');
const papanScore = document.querySelector('.papan-score');
const pop = document.querySelector('#pop');

let tanahSebelumnya;
let selesai;
let score;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanGusion() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(250, 800);
    tRandom.classList.add('muncul');

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            munculkanGusion();
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    score = 0;
    papanScore.textContent = 0;
    munculkanGusion();
    setTimeout(() => {
        selesai = true;
    }, 25000);
}

function pukul() {
    score++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanScore.textContent = score;
}

gusion.forEach(g => {
    g.addEventListener('click', pukul);
});
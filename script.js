
const QUOTES = [
  {
    text: "And the spies came out of the water",
    song: "Spies",
    artist: "Coldplay",
    album: "Parachutes",
    year: 2000,
    cover: "portadas/parachutes.jpg",
    url: "https://open.spotify.com/track/2mLgOcRkEgq89j8WstUpui?si=eFkLHvOJQ-yWaH1fzM3Cng"
  },
  {
    text: "Caminaba sin rumbo y terminé en tu vida, chocándome con tus ojos y aterrizando en tu' labio'",
    song: "SOLO POR VOS",
    artist: "Trueno",
    album: "BIEN O MAL",
    year: 2022,
    cover: "portadas/bien-o-mal.jpg",
    url: "https://open.spotify.com/intl-es/track/4n0MBJuHpZ9dnD1BtsOIxB?si=e6f919c0a84b4b23"
  },
  {
    text: "Y ante' de despertar exploté el Capitolio, y a to' eso' cabrone' con su monopolio",
    song: "MALDITA POBREZA",
    artist: "Bad Bunny",
    album: "El último tour del mundo",
    year: 2020,
    cover: "portadas/el-ultimo-tour-del-mundo.jpg",
    url: "https://open.spotify.com/intl-es/track/0Lsis3LB0XAK6XlTHXaJk2?si=f8294ad47baf4099"
  },
  {
    text: "I only stick with you because there are no others",
    song: "All I Need",
    artist: "Radiohead",
    album: "In Rainbows",
    year: 2007,
    cover: "portadas/in-rainbows.jpg",
    url: "https://open.spotify.com/intl-es/track/5Qv2Nby1xTr9pQyjkrc94J?si=e4fdfc1e223d4a08"
  },
  {
    text: "I'm making every place about you",
    song: "To Know Yours",
    artist: "HEAD BALLET",
    album: "Suddenly It's Making Sense",
    year: 2022,
    cover: "portadas/to-know-yours.jpg",
    url: "https://open.spotify.com/intl-es/track/6Trca854SEmEgWC7eULXL8?si=e5c2ab22896149d9"
  },
  {
    text: "I wanna rock and roll all night and party every day",
    song: "Rock and Roll All Nite",
    artist: "KISS",
    album: "Dressed to Kill",
    year: 1975,
    cover: "portadas/dressed-to-kill.jpg",
    url: "https://open.spotify.com/intl-es/track/6KTv0Z8BmVqM7DPxbGzpVC?si=3abbc315ecc14bb7"
  },
  {
    text: "I am a forest fire, And I am the fire and I am the forest, and I am a witness watching it",
    song: "A Burning Hill",
    artist: "Mitski",
    album: "Puberty 2",
    year: 2017,
    cover: "portadas/puberty-2.jpg",
    url: "https://open.spotify.com/intl-es/track/6gz3orrUlKresI8GShSkdq?si=00d45feb2c6d4a56"
  },
  {
    text: "Quiero saber qué es lo que tiene él que no tenga yo",
    song: "Casi Nula Autoestima",
    artist: "Pxndx",
    album: "Poetics",
    year: 2009,
    cover: "portadas/para-ti-con-desprecio.jpg",
    url: "https://open.spotify.com/intl-es/track/5QAqRxHNWGcW8YpTrem3Xz?si=8c6522ca78c44579"
  },
  {
    text: "Miénteme y dime que me quieres",
    song: "Párteme la Cara",
    artist: "C. Tangana",
    album: "El Madrileño",
    year: 2021,
    cover: "portadas/el-madrileno.jpg",
    url: "https://open.spotify.com/track/6VNzlG63AsmmZhxXkQMybC"
  },
  {
  text: "¿Por qué la velocidad? Si nadie te está persiguiendo, ¿Por qué quieres llegar antes que los demás? Si todos estamos cayendo",
  song: "80 Días",
  artist: "Siddhartha",
  album: "00:00",
  year: 2022,
  cover: "portadas/00-00.jpg",
  url: "https://open.spotify.com/intl-es/track/3Nw9tgLAg0Tua3QA0Wm9FU?si=6f1832c812a24db9"
 },
 {
  text: "Me trató de marioneta y fui a ahorcarlo con los hilos",
  song: "Buitres",
  artist: "WOS",
  album: "OSCURO ÉXTASIS",
  year: 2021,
  cover: "portadas/oscuro-extasis.jpg",
  url: "https://open.spotify.com/intl-es/track/2cIf0QMDPd9aimLylQqCZ8?si=61791a5433824f95"
 },
 {
  text: "El final no tiene que ser el final",
  song: "MAMI 100PRE SABE (INTERLUDE)",
  artist: "Álvaro Díaz, Nsqk",
  album: "SAYONARA",
  year: 2024,
  cover: "portadas/sayonara.jpg",
  url: "https://open.spotify.com/intl-es/track/62n1ZpeGX7aM7hqC4NcBsJ?si=ad9d295e0a264b7a"
 },
 {
  text: "Vente, vamos a pistear, yo pongo las caguamas",
  song: "Amiga Date Cuenta",
  artist: "Sailorfag",
  album: "Sailorfag",
  year: 2018,
  cover: "portadas/sailorfag.jpg",
  url: "https://open.spotify.com/intl-es/track/6NMJdY9DPBVcbT3jp7Tjos?si=d463233432ce4e5b"
 },
 {
  text: "You could hold moonlight in your hands, 'til the night I held you, You are my moonlight",
  song: "Moonlight",
  artist: "Ariana Grande",
  album: "Dangerous Woman",
  year: 2016,
  cover: "portadas/dangerous-woman.jpg",
  url: "https://open.spotify.com/intl-es/track/1qcJdr8TYuGjFhjRoYNC3e?si=3fd7cef33d274499"
 },
 {
  text: "La tristeza aquí no tiene lugar, cuando lo triste es vivir",
  song: "En algún lugar",
  artist: "Duncan Dhu",
  album: "El grito del tiempo",
  year: 1987,
  cover: "portadas/el-grito-del.tiempo.jpg",
  url: "https://open.spotify.com/intl-es/track/3UIENhLRdFIOuRan92cAQu?si=ccf42bebacc845c1"
 },
{
  text: "Babysita, no me olvides, quien te tenga que te cuide",
  song: "Babysita </3",
  artist: "Álvaro Díaz",
  album: "Felicilandia",
  year: 2021,
  cover: "portadas/felicilandia.jpg",
  url: "https://open.spotify.com/intl-es/track/0TzPApPjiPWXv98qSCrgbp?si=806c98315088435d"
},
{
  text: "Chequeando Twitter a ver si escribes de mí",
  song: "Babysita </3",
  artist: "Álvaro Díaz",
  album: "Felicilandia",
  year: 2021,
  cover: "portadas/felicilandia.jpg",
  url: "https://open.spotify.com/intl-es/track/0TzPApPjiPWXv98qSCrgbp?si=806c98315088435d"
},
{
  text: "Y aunque borres todas mis fotos de tu cámara, mis recuerdos tú no puedes borrar",
  song: "Babysita </3",
  artist: "Álvaro Díaz",
  album: "Felicilandia",
  year: 2021,
  cover: "portadas/felicilandia.jpg",
  url: "https://open.spotify.com/track/3r1jQfJ2v0x4Bjq1FJkiDq"
},
{
  text: "Siempre que sale 11:11 me dan ganas de textear",
  song: "Babysita </3",
  artist: "Álvaro Díaz",
  album: "Felicilandia",
  year: 2021,
  cover: "portadas/felicilandia.jpg",
  url: "https://open.spotify.com/track/3r1jQfJ2v0x4Bjq1FJkiDq"
},



];


let index = 0;
const $ = (s) => document.querySelector(s);

const el = {
  left: $("#cover-left"),
  center: $("#cover-center"),
  right: $("#cover-right"),
  quote: $("#quote"),
  song: $("#song"),
  artist: $("#artist"),
  album: $("#album"),
  year: $("#year"),
  link: $("#link"),
  toast: $("#toast"),
  next: $("#nextBtn"),
  prev: $("#prevBtn"),
  shuffle: $("#shuffleBtn"),
};


function renderMeta(q) {
  el.quote.textContent = q.text;
  el.song.textContent = q.song;
  el.artist.textContent = q.artist;
  el.album.textContent = q.album;
  el.year.textContent = q.year;
  el.link.href = q.url || "#";
}


function renderCovers() {
  const curr = QUOTES[index];
  const prevQ = QUOTES[(index - 1 + QUOTES.length) % QUOTES.length];
  const nextQ = QUOTES[(index + 1) % QUOTES.length];

  el.center.src = curr.cover;
  el.center.alt = `Portada de ${curr.album} — ${curr.artist}`;

  el.left.src = prevQ.cover;
  el.left.alt = `Portada de ${prevQ.album} — ${prevQ.artist}`;

  el.right.src = nextQ.cover;
  el.right.alt = `Portada de ${nextQ.album} — ${nextQ.artist}`;

  renderMeta(curr);
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  setTimeout(() => el.toast.classList.remove("show"), 2000);
}

function next() {
  index = (index + 1) % QUOTES.length;
  renderCovers();
}

function prev() {
  index = (index - 1 + QUOTES.length) % QUOTES.length;
  renderCovers();
}

function shuffle() {
  const old = index;
  do { index = Math.floor(Math.random() * QUOTES.length); }
  while (index === old);
  renderCovers();
}


function copyCurrent() {
  const q = QUOTES[index];
  const text = `${q.text} — ${q.artist}, "${q.song}" (${q.year})`;
  navigator.clipboard.writeText(text).then(() => showToast("Frase copiada"));
}

function shareCurrent() {
  const q = QUOTES[index];
  const text = `${q.text} — ${q.artist} (${q.song})`;
  if (navigator.share) {
    navigator.share({ title: "Cita de canción", text, url: q.url || location.href });
  } else {
    copyCurrent();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  renderCovers();

  el.next.addEventListener("click", next);
  el.prev.addEventListener("click", prev);
  el.shuffle.addEventListener("click", shuffle);

  $("#copyBtn").addEventListener("click", copyCurrent);
  $("#shareBtn").addEventListener("click", shareCurrent);

  
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key.toLowerCase() === "a") shuffle();
  });

  
  el.left.addEventListener("click", prev);
  el.right.addEventListener("click", next);
});
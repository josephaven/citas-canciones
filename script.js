
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
  url: "https://open.spotify.com/intl-es/track/0TzPApPjiPWXv98qSCrgbp?si=806c98315088435d"
},
{
  text: "Siempre que sale 11:11 me dan ganas de textear",
  song: "Babysita </3",
  artist: "Álvaro Díaz",
  album: "Felicilandia",
  year: 2021,
  cover: "portadas/felicilandia.jpg",
  url: "https://open.spotify.com/intl-es/track/0TzPApPjiPWXv98qSCrgbp?si=806c98315088435d"
},
{
  text: "¿Cómo quieres que te quiera si no estás aquí?",
  song: "Nunca Estoy",
  artist: "C. Tangana",
  album: "El Madrileño",
  year: 2021,
  cover: "portadas/el-madrileno.jpg",
  url: "https://open.spotify.com/intl-es/track/6N4ioa3XSbvjmwdVEERl8F?si=44b3d77b201d4f08"
},
{
  text: "Lo malo siempre se sabe y lo bueno nunca se cuenta",
  song: "Andrea",
  artist: "Bad Bunny, Buscabulla",
  album: "Un Verano Sin Ti",
  year: 2022,
  cover: "portadas/un-verano-sin-ti.jpg",
  url: "https://open.spotify.com/intl-es/track/44XjoNvtwevktFKjvVe1vH?si=f694da16137b4cd3"
},
{
  text: "Me siento roto, me siento solo y no me puedo arrepentir",
  song: "Mientras Duermes",
  artist: "Junior H",
  album: "$ad Boyz 4 Life II",
  year: 2023,
  cover: "portadas/$ad-Boyz-4-Life-II.jpg",
  url: "https://open.spotify.com/intl-es/track/4e76Ss3ji7HQZ4qwcPNkNA?si=2d11e5a0be2f4522"
},
{
  text: "800 días bastaron pa, pa cambiar mi vida de abajo p'arriba",
  song: "Clave Ali",
  artist: "Junior H",
  album: "Cruisin' with Junior H",
  year: 2020,
  cover: "portadas/cruisin-with-Junior-H.jpg",
  url: "https://open.spotify.com/intl-es/track/0rSlb6Ng6JobokQUPngjRE?si=ffa0ec0be1f04e0b"
},
{
  text: "The distance and the time between us, It'll never change my mind, 'cause baby I would die for you",
  song: "Die For You",
  artist: "The Weeknd",
  album: "Starboy",
  year: 2016,
  cover: "portadas/starboy.jpg",
  url: "https://open.spotify.com/intl-es/track/2LBqCSwhJGcFQeTHMVGwy3?si=b87e37be9b664d8d"
},
{
  text: "Viajé 1004 kilómetros pa verte, no será para siempre, un día volveré a verte",
  song: "1004 KM",
  artist: "Junior H",
  album: "$ad Boyz 4 Life",
  year: 2021,
  cover: "portadas/$ad-Boyz-4-Life.jpg",
  url: "https://open.spotify.com/intl-es/track/54udnumOCHpq4SRpbKleat?si=7f9e64cdac0e49a9"
},
{
  text: "Aún te extraño como antes, y aún te pienso como siempre",
  song: "Vuelve",
  artist: "Danny Ocean",
  album: "54+1",
  year: 2019,
  cover: "portadas/54mas1.jpg",
  url: "https://open.spotify.com/intl-es/track/30zRVzH3FUvbtqYwLvd5fc?si=b993dc2d55064de6"
},
{
  text: "Juro que yo mato por ti",
  song: "Aquel Nap ZzZz",
  artist: "Rauw Alejandro",
  album: "Vice Versa",
  year: 2021,
  cover: "portadas/vice-versa.jpg",
  url: "https://open.spotify.com/intl-es/track/5bQLsyTrUaMQRfr6whwGe5?si=298bfa8a2f8441d4"
},
{
  text: "Noche, te me fuiste, ¿Por qué no te quedaste con nosotros? Como prometiste aquella luna",
  song: "Aquel Nap ZzZz",
  artist: "Rauw Alejandro",
  album: "Vice Versa",
  year: 2021,
  cover: "portadas/vice-versa.jpg",
  url: "https://open.spotify.com/intl-es/track/5bQLsyTrUaMQRfr6whwGe5?si=298bfa8a2f8441d4"
},
{
  text: "No me quedan ganas de empezar otra vez",
  song: "si te portas bien",
  artist: "Nsqk",
  album: "ATP",
  year: 2024,
  cover: "portadas/atp.jpg",
  url: "https://open.spotify.com/intl-es/track/6ZWGocV6dU4xfAtqonBv40?si=ec58088f02fe4cee"
},
{
  text: "Los cigarros no vuelven a prender",
  song: "si te portas bien",
  artist: "Nsqk",
  album: "ATP",
  year: 2024,
  cover: "portadas/atp.jpg",
  url: "https://open.spotify.com/intl-es/track/6ZWGocV6dU4xfAtqonBv40?si=ec58088f02fe4cee"
},
{
  text: "Solo funciona si te portas bien y tú no eres así",
  song: "si te portas bien",
  artist: "Nsqk",
  album: "ATP",
  year: 2024,
  cover: "portadas/atp.jpg",
  url: "https://open.spotify.com/intl-es/track/6ZWGocV6dU4xfAtqonBv40?si=ec58088f02fe4cee"
},
{
  text: "So please, please, please, let me, let me, let me, let me get what I want this time",
  song: "Please, Please, Please, Let Me Get What I Want - 2011 Remaster",
  artist: "The Smiths",
  album: "Louder Than Bombs",
  year: 1987,
  cover: "portadas/louder-than-bombs.jpg",
  url: "https://open.spotify.com/intl-es/track/1oA0tDRFjY5xoNDXuMBGGA?si=c6855e430e2646f1"
},
{
  text: "So for once in my life, let me get what I want, Lord knows, it would be the first time",
  song: "Please, Please, Please, Let Me Get What I Want - 2011 Remaster",
  artist: "The Smiths",
  album: "Louder Than Bombs",
  year: 1987,
  cover: "portadas/louder-than-bombs.jpg",
  url: "https://open.spotify.com/intl-es/track/1oA0tDRFjY5xoNDXuMBGGA?si=c6855e430e2646f1"
},
{
  text: "To all the days we were together, to all the time we were a part, of each other's lives",
  song: "Heart To Heart",
  artist: "Mac DeMarco",
  album: "Here Comes The Cowboy",
  year: 2019,
  cover: "portadas/here-comes-the-cowboy.jpg",
  url: "https://open.spotify.com/intl-es/track/7EAMXbLcL0qXmciM5SwMh2?si=4b2c5f251fdd4365"
},
{
  text: "Te quería preguntar, si todavía piensas en nosotros dos",
  song: "Pensándote",
  artist: "Rauw Alejandro, Tainy",
  album: "Afrodisíaco",
  year: 2020,
  cover: "portadas/afrodisiaco.jpg",
  url: "https://open.spotify.com/intl-es/track/2wnhst8yHA4gKuojAgZedh?si=223d0751b6c349e8"
},
{
  text: "No pido mucho solamente keep it a hundred conmigo",
  song: "100 Conmigo",
  artist: "Eladio Carrión",
  album: "DON KBRN",
  year: 2025,
  cover: "portadas/don-kbrn.jpg",
  url: "https://open.spotify.com/intl-es/track/4sMLOi2r2M2gJeO4qeZB7A?si=6e9a8cf3544642d1"
},
{
  text: "El corazón transforma la canción en su mejor guarida",
  song: "Contando Ovejas",
  artist: "WOS",
  album: "Oscuro Éxtasis",
  year: 2021,
  cover: "portadas/oscuro-extasis.jpg",
  url: "https://open.spotify.com/intl-es/track/47DL8jY6HJD2mlCcTuOWKX?si=e98983d2c6474ebc"
},
{
  text: "Un trago por el miedo a la soledad, un trago por el miedo a la sobriedad",
  song: "Contando Ovejas",
  artist: "WOS",
  album: "Oscuro Éxtasis",
  year: 2021,
  cover: "portadas/oscuro-extasis.jpg",
  url: "https://open.spotify.com/intl-es/track/47DL8jY6HJD2mlCcTuOWKX?si=e98983d2c6474ebc"
},
{
  text: "Wasted times I spent with someone else",
  song: "Wasted Times",
  artist: "The Weeknd",
  album: "My Dear Melancholy,",
  year: 2018,
  cover: "portadas/my-dear-melancholy.jpg",
  url: "https://open.spotify.com/intl-es/track/7DKS0rX27cCEPsK0R6tFWS?si=d3f9cc1a4b504c52"
},
{
  text: "Why can't it just be easy?\nWhy does everybody need me to stay?",
  song: "Good News",
  artist: "Mac Miller",
  album: "Circles",
  year: 2020,
  cover: "portadas/circles.jpg",
  url: "https://open.spotify.com/intl-es/track/1DWZUa5Mzf2BwzpHtgbHPY?si=1dec40a2f1a8494b"
},
{
  text: "Well, maybe I'll lay down for a little, yeah\nInstead of always trying to figure everything out",
  song: "Good News",
  artist: "Mac Miller",
  album: "Circles",
  year: 2020,
  cover: "portadas/circles.jpg",
  url: "https://open.spotify.com/intl-es/track/1DWZUa5Mzf2BwzpHtgbHPY?si=1dec40a2f1a8494b"
},
{
  text: "Fighting for your rights even when you're wrong",
  song: "Sing About Me, I'm Dying Of Thirst",
  artist: "Kendrick Lamar",
  album: "good kid, m.A.A.d city",
  year: 2012,
  cover: "portadas/good-kid-maad-city.jpg",
  url: "https://open.spotify.com/intl-es/track/69pkT3GewmjhQf6vQWcK2L?si=3efd24e929714956"
},
{
  text: "Cúrate, mi niña, con amor del más bonito\nY recuerda siempre que tú eres la medicina",
  song: "María la Curandera",
  artist: "Natalia Lafourcade",
  album: "De Todas las Flores",
  year: 2022,
  cover: "portadas/de-todas-las-flores.jpg",
  url: "https://open.spotify.com/intl-es/track/1xNi99xP8ioHUGXB5HrpNb?si=642ad08649824a42"
},
{
  text: "Lo dejaría todo para volar hasta donde ella está para amarla ahora",
  song: "contenta,",
  artist: "Ed Maverick",
  album: "Eduardo",
  year: 2021,
  cover: "portadas/eduardo.jpg",
  url: "https://open.spotify.com/intl-es/track/1YlXMOHqJVWzFaaQLeekPt?si=b770d220327e4e15"
},
{
  text: "Algo cambió entre tú y yo, y tal vez ya no tiene una solución",
  song: "Conflicto Unilateral",
  artist: "zhrain",
  album: "Conflicto Unilateral",
  year: 2022,
  cover: "portadas/la-peor-clase-de-persona.jpg",
  url: "https://open.spotify.com/intl-es/track/0lHp9RHBx4z8OwAXYDiCLa?si=fed48faaa61f4bef"
},
{
  text: "No siento motivación de hacer lo que me hace feliz",
  song: "Muerto",
  artist: "zhrain",
  album: "Veintiuno",
  year: 2024,
  cover: "portadas/veintiuno.jpg",
  url: "https://open.spotify.com/intl-es/track/47I7lW7UkBO0unwDtYeUiZ?si=5a19f581ec1540fa"
},
{
  text: "Me sentía menos muerto cuando me quería morir",
  song: "Muerto",
  artist: "zhrain",
  album: "Veintiuno",
  year: 2024,
  cover: "portadas/veintiuno.jpg",
  url: "https://open.spotify.com/intl-es/track/47I7lW7UkBO0unwDtYeUiZ?si=5a19f581ec1540fa"
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
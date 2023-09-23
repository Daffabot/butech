//Chatbot buatan Daffa Ahmad Ibrahim Umur 15 Tahun, 11-04-2023
//Github https://github.com/Daffabot
//Web https://www.daffabot.my.id

let trigger = [
  ["assalamualaikum", "asalamualaikum", "assalamualaikum wr wb.", "asalamualaikum warahmatullahi wabarakatuh", "assalamualaikum warahmatullahi wabarakatuh"],
  ["hi", "halo", "hey", "hai", "hello"],
  ["how are you", "how is life", "how are things"],
  ["bagaimana kabar kamu", "bagaimana kabar mu", "bagaimana kabarmu", "apa kabar", "apa kabarmu", "apa kabar kamu", "gimana kabar", "gimana kabarmu", "gimana kabar kamu"],
  ["what are you doing", "what is going on"],
  ["apa yang sedang kamu lakukan", "apa yang kamu lakukan", "kamu sedang apa", "sekarang kamu lagi apa", "lagi ngapain", "kamu lagi apa", "kamu lagi ngapain", "ngapain aja kamu"],
  ["how old are you"],
  ["berapa umur kamu", "berapa umurmu", "berapa usia kamu", "berapa usiamu", "sekarang kamu umurnya berapa", "umur kamu berapa"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["siapa kamu", "siapa dirimu", "siapa ini", "kamu siapa", "apa kamu manusia", "apakah kamu manusia", "kamu manusia atau robot", "kamu itu siapa", "apakah kamu robot", "kamu robot", "apa kamu robot"],
  ["who created you", "who made you"],
  ["siapa yang menciptakan kamu", "siapa yang menciptakanmu", "siapa penciptamu", "yang menciptakanmu siapa", "kamu diciptakan siapa", "kamu dibuat siapa", "kamu diciptakan oleh siapa", "kamu dibuat oleh siapa", "siapa yang membuatmu", "kamu dibuat oleh siapa"],
  ["your name please", "your name", "may i know your name", "what is your name"],
  ["nama kamu siapa", "namamu siapa", "bolehkah aku mengetahui nama kamu", "siapa namamu", "siapa nama kamu"],
  ["i love you"],
  ["aku mencintaimu", "aku mencintai kamu", "aku cinta kamu", "aku menyukaimu", "aku menyukai kamu"],
  ["happy", "good"],
  ["baik", "senang"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
  ["yo kawanku"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["buruk", "bosan", "lelah"],
  ["tolong saya", "ceritakan cerita", "ceritakan lelucon"],
  ["ya", "oke", "bagus", "terima kasih"],
  ["selamat tinggal", "sampai jumpa"],
  ["bagaimana cara memanfaatkan teknologi untuk menyebarkan kebudayaan indonesia", "gimana cara manfaatin teknologi untuk nyebarin budaya", "gimana cara manfaatkan teknologi untuk nyebarin budaya"],
];
let reply = [
  ["Wa alaikumsalam", "Wa alaikumsalam warohmatullohi wabarokatuh"],
  ["Hi", "Halo", "Hai", "Hey", "Hello"],
  ["Fine", "Pretty well", "Fantastic"],
  ["Alhamdulillah sehat", "Aku baik-baik saja, bagaimana denganmu?"],
  ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
  ["Lagi diam", "Nggak tau aku juga", "Sedang menunggu jawabanmu", "Mau tau banget atau mau tau doang?"],
  ["I am 1 day old"],
  ["Umurku baru 1 hari, karena baru diciptakan oleh Masterku"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Aku hanyalah chatbot", "aku seorang reporter"],
  ["Daffa Ahmad Ibrahim", "My Master"],
  ["Oleh Daffa Ahmad Ibrahim"],
  ["I am Anna the reporter", "I'm Anna"],
  ["Aku Anna si reporter", "Namaku Anna"],
  ["I love you too", "Me too"],
  ["Aku juga mencintaimu sayang", "Aku juga menyukaimu"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Apakah Kamu pernah merasa tidak enak?", "Senang mendengarnya"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["I will", "What about?"],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
  ["Apaan dih"],
  ["Bye", "Goodbye", "See you later"],
  ["Mengapa?", "Mengapa? Seharusnya tidak!", "Cobalah menonton TV"],
  ["Ya, saya akan lakukan", "Bagaimana dengan itu?"],
  ["Ceritakan sebuah cerita", "Ceritakan lelucon", "Ceritakan tentang dirimu", "Sama-sama"],
  ["Sampai jumpa", "Selamat tinggal", "Sampai jumpa lagi"],
  ["guna memanfaatkan teknologi untuk menyebarkan kebudayaan Indonesia, ada beberapa langkah yaitu Pembuatan Konten Digital yang merayakan kebudayaan Indonesia, Media Sosial untuk membagikan konten tersebut, Website edukasi yang berisi informasi lengkap tentang kebudayaan Indonesia, Aplikasi Mobile tentang seni budaya, lalu Webinar dan Podcast tentang topik kebudayaan Indonesia"],
];
let alternative = ["Maaf aku tidak mengerti apa yang coba kau katakan", "Maaf bisa diulangi lagi dengan jelas?", "Maaf aku tidak mengerti apa yang kamu maksud"];

const base = document.getElementById("main");
const ptt = document.getElementById("speech");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "id-ID";
let inputan = document.getElementById("input");

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  inputan.value = transcript;
  console.log(transcript);
});
recognition.addEventListener("start", (e) => {
  ptt.classList.add("active");
});
recognition.addEventListener("end", (e) => {
  let input = document.getElementById("input").value;
  output(input);
  ptt.classList.remove("active");
});

const buttons = document.querySelectorAll("#speech, #submit");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "speech") {
      recognition.start();
    } else if (button.id === "submit") {
      let input = document.getElementById("input").value;
      output(input);
    }
  });
});

document.querySelector("#input").addEventListener("keypress", function (e) {
  let key = e.which || e.keyCode;
  if (key === 13) {
    //Enter button
    let input = document.getElementById("input").value;
    output(input);
  }
});

function output(input) {
  let product;
  try {
    product = input + "=" + eval(input);
  } catch (e) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/tolong /g, "")
      .replace(/ tolong/g, "")
      .replace(/aku rasa /g, "")
      .replace(/aku merasa /g, "")
      .replace(/aku merasakan /g, "")
      .replace(/saya rasa /g, "")
      .replace(/saya merasa /g, "")
      .replace(/saya merasakan /g, "")
      .replace(/ seorang /g, "")
      .replace(/ sebuah /g, "");
    if (compare(trigger, reply, text)) {
      product = compare(trigger, reply, text);
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
  }
  speak(product);
  console.log(product);
}
function compare(arr, array, string) {
  let item;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < array.length; y++) {
      if (arr[x][y] == string) {
        items = array[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}
function speak(string) {
  let voiceGetter = setInterval(function () {
    let voices = window.speechSynthesis.getVoices();
    if (voices.length !== 0) {
      let utterance = new SpeechSynthesisUtterance();
      utterance.text = string;
      utterance.lang = "id-ID";
      utterance.volume = 1; //0-1 interval
      utterance.rate = 0.8;
      utterance.pitch = 1; //0-2 interval
      utterance.voice = voices[182];
      let voiceName = new RegExp("gadis", "i");

      for (let i = 0; i < window.speechSynthesis.getVoices().length; i++) {
        if (window.speechSynthesis.getVoices()[i].voiceURI.search(voiceName) != -1) {
          utterance.voice = window.speechSynthesis.getVoices()[i];
        }
      }

      speechSynthesis.speak(utterance);
      utterance.addEventListener("start", (e) => {
        base.classList.remove("main");
        base.classList.add("speak");
      });
      utterance.addEventListener("end", (e) => {
        base.classList.remove("speak");
        base.classList.add("main");
        console.log("Utterance has finished being spoken after " + e.elapsedTime + " milliseconds.");
        document.getElementById("input").value = ""; //clear input value
      });
      clearInterval(voiceGetter);
    }
  }, 200);
}

//Cek user offline/online
function ok() {
  document.getElementById("dialogbox").style.display = "none";
  document.getElementById("dialogoverlay").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  function CustomAlert() {
    this.alert = function (message, title) {
      document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

      let dialogoverlay = document.getElementById("dialogoverlay");
      let dialogbox = document.getElementById("dialogbox");

      let winH = window.innerHeight;
      dialogoverlay.style.height = winH + "px";

      dialogbox.style.top = "100px";

      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";

      document.getElementById("dialogboxhead").style.display = "block";

      if (typeof title === "undefined") {
        document.getElementById("dialogboxhead").style.display = "none";
      } else {
        document.getElementById("dialogboxhead").innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
      }
      document.getElementById("dialogboxbody").innerHTML = message;
      document.getElementById("dialogboxfoot").innerHTML = '<button class="pure-material-button-contained active" id="closed" onclick="ok()">OK</button>';
    };
  }

  function checker() {
    let customAlert = new CustomAlert();
    if (navigator.onLine) {
      console.log("User terhubung dengan koneksi internet");
    } else {
      customAlert.alert("Tolong cek koneksi internet anda, beberapa fitur mungkin tidak akan berfungsi.", "Peringatan!");
    }
  }
  let one = once(checker);
  one();
  function once(fn, context) {
    let result;
    return function () {
      if (fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    };
  }
});

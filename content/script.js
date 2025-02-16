// Stick Header
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Stick navbar
window.onscroll = function () {
  myFunction();
};

var nav = document.getElementById("myNav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// HAMBURGER MENU
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => menuList.classList.toggle("hidden"));

//image scroll effect
const images = document.querySelectorAll(".box1");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.05 }
);

images.forEach((img) => {
  observer.observe(img);
});

//Leanguage Selector
const translations = {
  en: {
    call: "call me",
    mail: "mail me",
    address: "address",

    home: "HOME",
    about: "ABOUT ME",
    project: "PROJECT",
    git: "GET IN TOUCH",

    LB: "Logo & Branding",
    web: "Website",
    print: "Printing",
    adv: "Business & Adv",
    art: "Art & Illustrator",
    label: "Packaging & Label",

    job: "I'm a Professional",
    job2: "Designer Graphic",
    jobdesk: "I know about the art and make it came to our world",
    read: "READ MORE",

    welcome: "WELCOME",
    person: "MY PERSONAL WEBSITE",

    design: "Design for what you need",

    brand: "Logo & Branding",
    web2: "Website",
    print2: "Printing",
    adv2: "Business & Adv",
    art2: "Art & Illustrator",
    label2: "Packaging & Label",

    para: "Art is restoration: the idea is to repair the damage caused in life,to make something fragmented that fear and anxiety do to a person into something whole",

    card: "It's All Start with a Logo",
    card1:
      "Whether you're brand new or on brand two (or three!), we've got asolution that'll suit your business and elevate your branding.",

    LB3: "Logo & Branding",
    web3: "Website",
    print3: "Printing",
    adv3: "Business & Adv",
    art3: "Art & Illustrator",
    label3: "Packaging & Label",

    hallo: "Hello",
    ket: "Create your logo design in minutes. It's fast,and oh-so-easy. The perfect way to get started, or use it as inspiration for our designers to level up your branding. Take your branding further. Get dozens of professional, custom logo options from our community of freelance designers, and experience next-level creative direction.",
    start: " START YOUR NEW LOGO",

    hallo1: "Hello",
    ket1: "Create your logo design in minutes. It's fast,and oh-so-easy. The perfect way to get started, or use it as inspiration for our designers to level up your branding. Take your branding further. Get dozens of professional, custom logo options from our community of freelance designers, and experience next-level creative direction.",
    start1: " START YOUR NEW LOGO",

    sosmed: "SOSIAL MEDIA ",
    git2: "CONTACT ME",
    deep: "Deep Talk on WhatsApp",
    os: "OUR SERVICES",
  },
  id: {
    call: "hubungi saya",
    mail: "email saya",
    address: "alamat",

    home: "BERANDA",
    about: "TENTANG SAYA",
    project: "PROYEK ",
    git: "KONTAK",

    LB: "Logo & Merek",
    web: "Situs",
    print: "Percetakan",
    adv: "Bisnis & Iklan",
    art: "Seni & Ilustrasi",
    label: "Pengemasan & Label",

    job: "Saya Seorang",
    job2: "Desainer Grafis Professional",
    jobdesk: "Saya tahu tentang seni dan mewujudkannya ke duniamu",
    read: "BACA LAGI",

    welcome: "SELAMAT DATANG",
    person: "DI SITUS PRIBADI SAYA",

    design: "Desain apa yang anda butuhkan",

    brand: "Logo & Merek",
    web2: "Situs",
    print2: "Percetakan",
    adv2: "Bisnis & Iklan",
    art2: "Seni & Ilustrasi",
    label2: "Pengemasan & Label",

    para: "Seni adalah restorasi: idenya adalah untuk memperbaiki kerusakan yang disebabkan dalam hidup, untuk membuat sesuatu yang terfragmentasi yang ditimbulkan oleh rasa takut dan kecemasan pada seseorang menjadi sesuatu yang utuh",

    card: "Awali dari sebuah Logo",
    card1:
      "Baik Anda baru atau baru menggunakan merek kedua (atau ketiga!), kami punya solusi yang sesuai dengan bisnis Anda dan meningkatkan merek Anda.",

    LB3: "Logo & Merek",
    web3: "Situs",
    print3: "Percetakan",
    adv3: "Bisnis & Iklan",
    art3: "Seni & Ilustrasi",
    label3: "Pengemasan & Label",

    hallo: "Hai",
    ket: "Buat desain logo Anda dalam hitungan menit. Ini cepat dan sangat mudah. Itu cara sempurna untuk memulai, atau menggunakannya sebagai inspirasi bagi kita desainer untuk meningkatkan branding Anda. Tingkatkan branding Anda lebih jauh. Dapatkan lusinan opsi logo khusus dan profesional dari komunitas kami desainer lepas, dan rasakan pengalaman kreatif tingkat berikutnya arah.;",
    start: "MULAI BUAT LOGO",

    hallo1: "Hai",
    ket1: "Buat desain logo Anda dalam hitungan menit. Ini cepat dan sangat mudah. Itu cara sempurna untuk memulai, atau menggunakannya sebagai inspirasi bagi kita desainer untuk meningkatkan branding Anda. Tingkatkan branding Anda lebih jauh. Dapatkan lusinan opsi logo khusus dan profesional dari komunitas kami desainer lepas, dan rasakan pengalaman kreatif tingkat berikutnya arah.;",
    start1: "MULAI BUAT LOGO",

    sosmed: "MEDIA SOSIAL",
    git2: "HUBUNGI SAYA",
    deep: "Tanya Lebih Jauh",
    os: "LAYANAN",
  },
};

function changeLanguage(lang) {
  document.getElementById("call").textContent = translations[lang].call;
  document.getElementById("mail").textContent = translations[lang].mail;
  document.getElementById("address").textContent = translations[lang].address;

  document.getElementById("home").textContent = translations[lang].home;
  document.getElementById("about").textContent = translations[lang].about;
  document.getElementById("project").textContent = translations[lang].project;
  document.getElementById("git").textContent = translations[lang].git;

  document.getElementById("LB").textContent = translations[lang].LB;
  document.getElementById("web").textContent = translations[lang].web;
  document.getElementById("print").textContent = translations[lang].print;
  document.getElementById("adv").textContent = translations[lang].adv;
  document.getElementById("art").textContent = translations[lang].art;
  document.getElementById("label").textContent = translations[lang].label;

  document.getElementById("job").textContent = translations[lang].job;
  document.getElementById("job2").textContent = translations[lang].job2;
  document.getElementById("jobdesk").textContent = translations[lang].jobdesk;
  document.getElementById("read").textContent = translations[lang].read;

  document.getElementById("welcome").textContent = translations[lang].welcome;
  document.getElementById("person").textContent = translations[lang].person;

  document.getElementById("design").textContent = translations[lang].design;

  document.getElementById("brand").textContent = translations[lang].brand;
  document.getElementById("web2").textContent = translations[lang].web2;
  document.getElementById("print2").textContent = translations[lang].print2;
  document.getElementById("adv2").textContent = translations[lang].adv2;
  document.getElementById("art2").textContent = translations[lang].art2;
  document.getElementById("label2").textContent = translations[lang].label2;

  document.getElementById("para").textContent = translations[lang].para;

  document.getElementById("card").textContent = translations[lang].card;
  document.getElementById("card1").textContent = translations[lang].card1;

  document.getElementById("LB3").textContent = translations[lang].LB3;
  document.getElementById("web3").textContent = translations[lang].web3;
  document.getElementById("print3").textContent = translations[lang].print3;
  document.getElementById("adv3").textContent = translations[lang].adv3;
  document.getElementById("art3").textContent = translations[lang].art3;
  document.getElementById("label3").textContent = translations[lang].label3;

  document.getElementById("hallo").textContent = translations[lang].hallo;
  document.getElementById("ket").textContent = translations[lang].ket;
  document.getElementById("start").textContent = translations[lang].start;

  document.getElementById("hallo1").textContent = translations[lang].hallo;
  document.getElementById("ket1").textContent = translations[lang].ket;
  document.getElementById("start1").textContent = translations[lang].start;

  document.getElementById("sosmed").textContent = translations[lang].sosmed;
  document.getElementById("git2").textContent = translations[lang].git2;
  document.getElementById("deep").textContent = translations[lang].deep;
  document.getElementById("os").textContent = translations[lang].os;
}

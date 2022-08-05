"use strict";

//Задание #1

// 1. Вам дан массив с именами файлов
// ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js']
// Напишите функцию которая может перебрать такой массив и отфильтрует его оставив только имена файлов
// с расширениями .js .jsx .ts

const arr = [
  "module.jsx",
  "index.html",
  "style.css",
  "index.js",
  "file.ts",
  "library.css",
  "my.plugin.js",
];

const newArr = arr.filter((i) => /(\.js|\.jsx|\.ts)/g.exec(i));
console.log(newArr);

// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен, может содержать
// только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.
// Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
// Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz

//const email = `info@methed.ru, max24@mail.com, !max24@mail.com, java_script@google.io, java_script@google.ioioio,my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz`;
//const newEmail = str.match(/\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}/g);

const email = [
  "info@methed.ru",
  "max24@mail.com",
  "!max24@mail.com",
  "java_script@google.io",
  "java_script@google.ioioio",
  "my-mail@yandex.ru",
  "tom_yam@ya.ru",
  "zero@mai1.xyz",
];
const newEmail = email.filter((i) =>
  /^\w+@[a-zA-Z]{3,}\.[a-zA-Z]{2,5}$/g.exec(i)
);
console.log(newEmail);

// 3. Напишите регулярное выражение, которое находит текст в скобках
// Проверьте на этом примере

const text = `Здоровый (пра(з(дн)ичный) ужин вовсе не обязательно должен состоять из шпината,
гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды 
(по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. 
Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, 
экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, 
если она приготовлена на пару.`;

//const hooks = text.match(/(?<=\()[^)]+(?=\))/g);
const hooks = text.match(/\((?<=\().*(?=\))\)/g);
console.log(hooks);

// 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и
// заменяет с помощью replace на тег домены вида http://site.ru, https://site.com на

const str = `Какой-то сайт http://noname.ru 
а может сайт http://google.ru 
или site.ru совсем не тот сайт, 
но https://site.com - точно сайт.`;

//const matchStr = str.match(/(https?:\/\/([a-z.-_]+\.[a-z]{2,3}))/g);
//console.log(matchStr);

const replaceStr = str.replace(
  /(https?:\/\/([a-z.-_]+\.[a-z]{2,3}))/g,
  '<a href="$1">$2</a>'
);

console.log(replaceStr);

//Задание #2 ТИПОГРАФ

document.body.insertAdjacentHTML(
  "afterbegin",
  `
    <div class='div'>
      <label class="label">
        <textarea
          class="textarea"
          name="description"
          required></textarea>
      </label>

      <span class="text">

      </span>
    </div>
  `
);


const n = [
  [/#((?:[^<>#]|<[^>]*>)*)(?![^<>]*>)/g, `<span class="red">№</span>$1`],
  [/(?<=^|W| |\n)(в|во|без|до|для|за|через|над|по|и|из|у|около|под|о|про|на|к|перед|при|с|между)([ ]+)/gi, `$1<span class="red">&#38nbsp;</span>`],
  [/"((?:[^<>"]|<[^>]*>)*)"(?![^<>]*>)/g, `<span class="red">&#38laquo;</span>$1<span class="red">&#38raquo;</span>`],
  [/(^|\n|["„«])--?(\s)/g, `$1<span class="red">&#38mdash;</span>$2`],
  [/(\s+)--?(\s)/g, `<span class="red">&#38nbsp;&#38mdash;</span>$2`],
  [/(\W)--?(\s)/g, `$1<span class="red">&#38nbsp;&#38mdash;</span>$2`],
  [/(\s)©-?(\s+)/g, ` <span class="red">&#38copy;&#38nbsp;</span>`],
  [/(\W)©-?(\s)/g, `$1<span class="red">&#38copy;&#38nbsp;</span>`],
  
];

// const tip = (str) => {
//   // //предлоги
//   // const p =
//   //   "в|во|без|до|для|за|через|над|по|и|из|у|около|под|о|про|на|к|перед|при|с|между";
//   // const regexp = RegExp("(?<=^|W| |\n)(" + p + ")([ ]+)", "gi");
//   // let newStr = str.replace(regexp, "$1&nbsp;");

//   //ёлочки
//   // newStr = newStr.replace(/"((?:[^<>"]|<[^>]*>)*)"(?![^<>]*>)/g, "&laquo;$1&raquo;");

//   //тире
//   // newStr = newStr.replace(/(^|\n|["„«])--?(\s)/g, "$1&mdash;$2");
//   // newStr = newStr.replace(/(\s+)--?(\s)/g, "&nbsp;&mdash;$2");
//   // newStr = newStr.replace(/(\W)--?(\s)/g, "$1&nbsp;&mdash;$2");

//   //copy
//   // newStr = newStr.replace(/(\s)©-?(\s+)/g, " &copy;&nbsp;");
//   // newStr = newStr.replace(/(\W)©-?(\s)/g, "$1&copy;&nbsp;");

//   //№
//   newStr = newStr.replace(/#((?:[^<>#]|<[^>]*>)*)(?![^<>]*>)/g, "№$1");

//   return newStr;
// };


const changeColor = () => {
  const element = document.querySelector(".text");

  for (let j = 0; j < element.childNodes.length; j++) {
    const node = element.childNodes[j];

    if (node.nodeType === 3) {
      const text = node.nodeValue;
      let replacedText = text;

      n.forEach((i) => {
        replacedText = replacedText.replace(i[0], i[1]);
      });

      if (replacedText !== text) {
        const div = document.createElement("span");

        div.innerHTML = replacedText.trim();
        element.replaceChild(div, node);
      }
    }
  }
};


const foo = () => {
  const p = document.querySelector(".text");
  const input = document.querySelector(".textarea");

  input.focus();
  let t;

  input.addEventListener('input', () => {
    clearTimeout(t);

    t = setTimeout(() => {
      p.textContent = input.value;
      changeColor();
    }, 300);
  });
};

foo();


/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let lengsta = split[0];
    for (const ord of split) {
      if (ord.length > lengsta.length) lengsta = ord;
    }
    return lengsta;
  }
  return null;
}
console.assert(
  longest("Halló hvað er að gerast") === "gerast",
  "longest: skila lengsta orði í streng"
);
console.assert(
  longest("halló jónsi!") === "jónsi!",
  "longest: Greinamerki eru partur af orði"
);
console.assert(
  longest("halló jónsi") === "halló",
  "longest: skilar fyrsta orðinu ef annað/önnur jafn löng finnas"
);
console.assert(
  longest(3) === null,
  "longest: skilar null ef str er ekki strengur"
);
console.assert(
  longest("") === "",
  "longest: ef str er tómur strengur þá skilar fallið tómum streng"
);

function shortest(str) {
  if (isString(str)) {
    const split = str.split(" ");
    let stysta = split[0];
    for (const ord of split) {
      if (ord.length < stysta.length) stysta = ord;
    }
    return stysta;
  }
  return null;
}
console.assert(
  shortest("Halló hvað er að gerast") === "er",
  "shortes: skila stysta orði í streng"
);
console.assert(
  shortest("halló jónsi!") === "halló",
  "shortest: Greinamerki eru partur af orði"
);
console.assert(
  shortest("halló jónsi") === "halló",
  "shortest: skilar fyrsta orðinu ef annað/önnur jafn löng finnas"
);
console.assert(
  shortest(3) === null,
  "shortest: skilar null ef str er ekki strengur"
);
console.assert(
  shortest("") === "",
  "shortest: ef str er tómur strengur þá skilar fallið tómum streng"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(reverse("hæ") === "æh", "reverse: snýr við einföldum streng");
console.assert(reverse(false) === null, "reverse: ef ekki strengur skila null");
console.assert(
  reverse("") === "",
  "reverse: ef tómur strengur skila þá tómum streng"
);

function palindrome(str) {
  if (isString(str) && str != "") {
    const lagstafir = str.toLowerCase();
    const split = lagstafir.split("");
    let palin = true;
    for (let i = 0; i < split.length; i++) {
      if (split[i] != split[split.length - 1 - i]) {
        palin = false;
      }
    }
    return palin;
  }
  return false;
}
console.assert(
  palindrome("radar") === true,
  "palindrome: skilar true ef gefin strengur er palindrome"
);
console.assert(
  palindrome("Radar") === true,
  "palindrome: ekki skiptir máli hvort stafir séu hástafir eða lágstafir"
);
console.assert(
  palindrome("") === false,
  "palindrome: tómur strengur er ekki palindrome"
);

function vowels(str) {
  const split = str.split("");
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    if (VOWELS.includes(split[i])) {
      count++;
    }
  }
  return count;
}
console.assert(
  vowels("halló heimur") === 5,
  "vowels: skilar fjölda sérhljóða í str"
);
console.assert(
  vowels("mmmmm") === 0,
  "vowels: skilar 0 ef það eru engir sérhljóðar í str"
);

function consonants(str) {
  const split = str.split("");
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    if (CONSONANTS.includes(split[i])) {
      count++;
    }
  }
  return count;
}
console.assert(
  consonants("halló heimur") === 6,
  "consonants: skilar fjölda samhljóða í str"
);
console.assert(
  consonants("aaaaa aa") === 0,
  "consonants: skilar 0 ef það eru engir samhljóðar í str"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}

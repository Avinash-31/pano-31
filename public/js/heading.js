// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  "About",
  "About",
];
const ttphrases = [
  "Logo Reveal Trailer",
  "Logo Reveal Trailer",
];
const inphrases = [
  "Insights",
  "Insights",
];
const spphrases = [
  "Sponsers",
  "Sponsers",
];

const el = document.querySelector(".abouttext");
const tt = document.querySelector(".trailertext");
const inel = document.querySelector(".insightstext");
const spel = document.querySelector(".sponsertext");


const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 4000);
  });
  counter = (counter + 15) % phrases.length;
};

next();


const ttfx = new TextScramble(tt);

let ttcounter = 0;
const ttnext = () => {
  ttfx.setText(ttphrases[ttcounter]).then(() => {
    setTimeout(ttnext, 4000);
  });
  ttcounter = (ttcounter + 15) % ttphrases.length;
};

ttnext();

const infx = new TextScramble(inel);

let incounter = 0;
const innext = () => {
  infx.setText(inphrases[incounter]).then(() => {
    setTimeout(innext, 4000);
  });
  incounter = (incounter + 15) % inphrases.length;
};

innext();


const spfx = new TextScramble(spel);

let spcounter = 0;
const spnext = () => {
  spfx.setText(spphrases[spcounter]).then(() => {
    setTimeout(spnext, 4000);
  });
  spcounter = (spcounter + 15) % spphrases.length;
};

spnext();
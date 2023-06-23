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

const shphrases = [
    "Timeline",
    "Timeline",
];
const ftphrases=[
    "Panorama",
    "Panorama'23",
]

const shel = document.querySelector(".section-heading");

const ftel = document.querySelector(".footer-text");






const shfx = new TextScramble(shel);

let shcounter = 0;
const shnext = () => {
    shfx.setText(shphrases[shcounter]).then(() => {
        setTimeout(shnext, 3000);
    });
    shcounter = (shcounter + 15) % shphrases.length;
};

shnext();

const ftfx = new TextScramble(ftel);

let ftcounter = 0;
const ftnext = () => {
    ftfx.setText(ftphrases[ftcounter]).then(() => {
        setTimeout(ftnext, 3000);
    });
    ftcounter = (ftcounter + 15) % ftphrases.length;
};

ftnext();
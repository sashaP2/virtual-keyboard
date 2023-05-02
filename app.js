document.body.insertAdjacentHTML('afterbegin', `<div class="wrapper">
<h1>virtual-keyboard</h1>
<textarea class="textarea" rows="10" cols="50" autofocus value=''></textarea>
<div class="keyboard">
    <div class="row">
        <div class="key">&#96;</div>
        <div class="key">1</div>
        <div class="key">2</div>
        <div class="key">3</div>
        <div class="key">4</div>
        <div class="key">5</div>
        <div class="key">6</div>
        <div class="key">7</div>
        <div class="key">8</div>
        <div class="key">9</div>
        <div class="key">0</div>
        <div class="key">-</div>
        <div class="key">=</div>
        <div class="key backspace">Backspace</div>
    </div>
    <div class="row">
        <div class="key tab">Tab</div>
        <div class="key">q</div>
        <div class="key">w</div>
        <div class="key">e</div>
        <div class="key">r</div>
        <div class="key">t</div>
        <div class="key">y</div>
        <div class="key">u</div>
        <div class="key">i</div>
        <div class="key">o</div>
        <div class="key">p</div>
        <div class="key">[</div>
        <div class="key">]</div>
        <div class="key">&#92;</div>
    </div>
    <div class="row">
        <div class="key capslock">CapsLock</div>
        <div class="key">a</div>
        <div class="key">s</div>
        <div class="key">d</div>
        <div class="key">f</div>
        <div class="key">g</div>
        <div class="key">h</div>
        <div class="key">j</div>
        <div class="key">k</div>
        <div class="key">l</div>
        <div class="key">;</div>
        <div class="key">'</div>
        <div class="key enter">Enter</div>
    </div>
    <div class="row">
        <div class="key shift">Shift</div>
        <div class="key">z</div>
        <div class="key">x</div>
        <div class="key">c</div>
        <div class="key">v</div>
        <div class="key">b</div>
        <div class="key">n</div>
        <div class="key">m</div>
        <div class="key">,</div>
        <div class="key">.</div>
        <div class="key">/</div>
        <div class="key">▲</div>
        <div class="key shift">Shift</div>
    </div>
    <div class="row">
        <div class="key ctrl">Ctrl</div>
        <div class="key">Alt</div>
        <div class="key space"> </div>
        <div class="key">Alt</div>
        <div class="key">◄</div>
        <div class="key">▼</div>
        <div class="key">►</div>
        <div class="key ctrl">Ctrl</div>
    </div>
</div>
<p>Клавиатура создана в операционной системе Windows</p>
</div> `);

const keys = document.getElementsByClassName('key');
/* let textarea = document.getElementsByClassName('textarea');
const capslock = document.getElementsByClassName('capslock');
const backspace = document.getElementsByClassName('backspace');
const tab = document.getElementsByClassName('tab');
const enter = document.getElementsByClassName('enter');
const shift = document.getElementsByClassName('shift');
const ctrl = document.getElementsByClassName('ctrl');
const space = document.getElementsByClassName('space'); */

document.addEventListener('keydown', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].textContent === event.key) {
      keys[i].classList.add('active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let j = 0; j < keys.length; j += 1) {
    if (keys[j].textContent === event.key) {
      keys[j].classList.remove('active');
    }
  }
});

/* document.addEventListener('keydown', (e) => {
    e.preventDefault()
    const isCaps = e.getModifierState('CapsLock')
    if(isCaps === true) {
        keys.textContent = keys.textContent.toUpperCase();
    }
}) */

for (let q = 0; q < keys.length; q += 1) {
  keys[q].addEventListener('mousedown', () => {
    keys[q].classList.add('active');
  });
}

for (let t = 0; t < keys.length; t += 1) {
  keys[t].addEventListener('mouseup', () => {
    keys[t].classList.remove('active');
  });
}

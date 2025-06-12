// a node for the binary tree of the dictionary of solresol
class solresolNode {

  // pre: data is a definition, the other parameters are other solresolNodes (or null)
  // post: creates a new solresolNode object
  constructor(data, definition, doNode, reNode, miNode, faNode, solNode, laNode, tiNode) {
    this.data = data; // the solresol word
    this.definition = definition; // the definition of the current word

    // a horrific display of if/else statements because js doesn't do overloading
    // the branch if the next syllable is "do"
    if (doNode != undefined) {
      this.do = doNode;
    }
    else {
      this.do = null;
    }

    // the branch if the next syllable is "re"
    if (reNode != undefined) {
      this.re = reNode;
    }
    else {
      this.re = null;
    }

    // the branch if the next syllable is "mi"
    if (miNode != undefined) {
      this.mi = miNode;
    }
    else {
      this.mi = null;
    }

    // the branch if the next syllable is "fa"
    if (faNode != undefined) {
      this.fa = faNode;
    }
    else {
      this.fa = null;
    }

    // the branch if the next syllable is "sol"
    if (solNode != undefined) {
      this.sol = solNode;
    }
    else {
      this.sol = null;
    }

    // the branch if the next syllable is "la"
    if (laNode != undefined) {
      this.la = laNode;
    }
    else {
      this.la = null;
    }

    // the branch if the next syllable is "ti" (aka si)
    if (tiNode != undefined) {
      this.ti = tiNode;
    }
    else {
      this.ti = null;
    }
  }

  testLog() {
    if (this.data === null) {
      console.log("The data is null.");
    }
    else {
      console.log(this.data);
    }

    if (this.definition === null) {
      console.log("The definition is null.");
    }
    else {
      console.log(this.definition);
    }

    if (this.do === null) {
      console.log("The data is null.");
    }
    else {
      console.log(this.do.definition);
    }
  }

}

/*// the tree of the nodes
class solresolTree {
  const overallRoot = new QuestionNode()
}*/


let aCtx;

// the values of the frequencies for each scale note
const doF = 261.63;
const reF = 293.66;
const miF = 329.63;
const faF = 349.23;
const solF = 392.00;
const laF = 440.00;
const tiF = 493.88;



// key of c major

aCtx = new (window.AudioContext || window.webkitAudioContext) ();
let gain = aCtx.createGain();
gain.connect(aCtx.destination);

osc = aCtx.createOscillator();
osc.type = 'triangle';
osc.start(0);
osc.connect(gain);

gain.gain.setValueAtTime(0, aCtx.currentTime);

function doo() {
  console.log("Do was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Do "
  osc.frequency.value = doF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);

}

function re() {
  console.log("Re was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Re "
  osc.frequency.value = reF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function mi() {
  console.log("Mi was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Mi "
  osc.frequency.value = miF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function fa() {
  console.log("Fa was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Fa "
  osc.frequency.value = faF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function sol() {
  console.log("Sol was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Sol "
  osc.frequency.value = solF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function la() {
  console.log("La was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "La "
  osc.frequency.value = laF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function ti() {
  console.log("Ti was pressed.");
  document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + "Ti "
  osc.frequency.value = tiF;
  gain.gain.setValueAtTime(0, aCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(1.0, aCtx.currentTime + 0.025);
  gain.gain.linearRampToValueAtTime(0.5, aCtx.currentTime + 0.025)
  gain.gain.linearRampToValueAtTime(0.0, aCtx.currentTime + 0.6);
}

function hold() {

  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > 300){
      break;
    }
  }
}

const test = new solresolNode();
test.testLog();

import setDate from "./setDate";

const PROBLEM = document.getElementById("problem") as HTMLDivElement;
const ANSWER = document.getElementById("answer") as HTMLDivElement;
const TABLE = document.getElementById("table") as HTMLDivElement;
const FORM = document.getElementById("form") as HTMLFormElement;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

let cipherText = `Mqxc Sbs,

F ubyq zufv aqzzqc ifhmv wbe jqaa. F xk jcfzfhg zb obhifck bec eyobkfhg kqqzfhg.

Xv jq mfvoevvqm sqibcq, aqz'v kqqz bh Icfmxw, Xycfa 14zu xz 2:00 YK xz zuq oxiq bh Kxfh Vzcqqz. F zufhn fz jfaa sq x yqciqoz yaxoq ibc ev zb oxzou ey xhm ouxz.

F'k cqxaaw abbnfhg ibcjxcm zb vqqfhg wbe xgxfh xizqc veou x abhg zfkq. Yaqxvq aqz kq nhbj fi zufv jbcnv ibc wbe bc fi jq hqqm zb kxnq xhw xmtevzkqhzv zb bec yaxhv.

Zxnq oxcq xhm vqq wbe vbbh!

Sqvz cqgxcmv,

Xafoq`;

let answerTable: Map<string, string> = new Map(
  Object.entries({
    a: "l",
    b: "o",
    c: "r",
    d: "z",
    e: "u",
    f: "i",
    g: "g",
    h: "n",
    i: "f",
    j: "w",
    k: "m",
    l: "v",
    m: "d",
    n: "k",
    o: "c",
    p: "x",
    q: "e",
    r: "q",
    s: "b",
    t: "j",
    u: "h",
    v: "s",
    w: "y",
    x: "a",
    y: "p",
    z: "t",
  })
);

let convertionTable: Map<string, string> = new Map();
let changedFlags: Map<string, boolean> = new Map();

export function reset() {
  for (const x of ALPHABET) {
    convertionTable.set(x, x);
    changedFlags.set(x, false);
  }
  FORM.reset();
  setDate();
  makeTable();
  update();
}

export function makeTable(): void {
  const table = document.createElement("table");
  table.classList.add("ui");
  TABLE.replaceChildren(table);

  const tbody = document.createElement("tbody");
  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  const CELL_PER_ROW = 9;
  for (let i = 0; i < ALPHABET.length; i++) {
    let x = ALPHABET[i]!;

    if (i % CELL_PER_ROW == 0) {
      tr1 = document.createElement("tr");
      tr2 = document.createElement("tr");
    }

    const th = document.createElement("th");
    th.innerText = x;
    tr1.appendChild(th);

    const td = document.createElement("td");
    const select = document.createElement("select");
    select.classList.add("ui");
    select.classList.add("search");
    select.classList.add("selection");
    select.classList.add("dropdown");
    const option = document.createElement("option");
    option.value = "";
    option.innerText = "";
    option.disabled = true;
    option.selected = true;
    option.style.display = "none";
    select.appendChild(option);
    for (const y of ALPHABET) {
      const option = document.createElement("option");
      option.value = y;
      option.innerText = y;
      select.appendChild(option);
    }
    select.addEventListener("change", () => {
      convertionTable.set(x, select.value);
      changedFlags.set(x, true);
      update();
    });
    td.appendChild(select);
    tr2.appendChild(td);

    if (i % CELL_PER_ROW == CELL_PER_ROW - 1) {
      tbody.appendChild(tr1);
      tbody.appendChild(tr2);
    }
  }
  tbody.appendChild(tr1);
  tbody.appendChild(tr2);
  table.appendChild(tbody);
}

function _decrypt(cipherText: string): string {
  let plainText = "";
  for (const x of cipherText) {
    if (convertionTable.has(x.toLowerCase())) {
      const isChanged = changedFlags.get(x.toLowerCase());
      if (isChanged) {
        plainText += `<span class="changedText">`;
      }
      if (x === x.toUpperCase()) {
        plainText += convertionTable.get(x.toLowerCase())!.toUpperCase();
      } else {
        plainText += convertionTable.get(x.toLowerCase())!;
      }
      if (isChanged) {
        plainText += `</span>`;
      }
    } else if (x == "\n") {
      plainText += `<br>`;
    } else {
      plainText += x;
    }
  }
  return plainText;
}

export function update(): void {
  PROBLEM.innerText = cipherText;
  ANSWER.innerHTML = _decrypt(cipherText);
  let ok = true;
  for (const x of ALPHABET) {
    if (convertionTable.get(x) !== answerTable.get(x)) {
      ok = false;
      break;
    }
  }
}

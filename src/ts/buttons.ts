import Swal from "sweetalert2";
import start from "./start";
import { IMG_PATH_1, IMG_PATH_2, IMG_PATH_3, IMG_PATH_4 } from "./imgPath";

const HOWTO = document.getElementById("howToButton") as HTMLButtonElement;
const HINT = document.getElementById("hintButton") as HTMLButtonElement;
const RESET = document.getElementById("resetButton") as HTMLButtonElement;

export function onHowTo() {
  Swal.fire({
    icon: "info",
    title: "はじめに",
    html: `
    ご覧頂きありがとうございます。この展示では、皆さんに換字式暗号を解いて頂きます。<br>
    換字式暗号とは、その名の通り、"字"を変"換"した暗号です。<br>
    <br>
    例を挙げましょう。<br>
    <b>"EBIIL"</b>という暗号文があるとします。これだけでは、一体何の事だがさっぱりですね?<br>
    では、この暗号の作り方が、以下のようだとしたらどうでしょう?<br>
    暗号のアルファベット: <span class="monospace">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br>
    元々のアルファベット: <span class="monospace">DEFGHIJKLMNOPQRSTUVWXYZABC</span><br>
    この対応表に基づいて、アルファベットが変換されているとします。<br>
    すると、暗号から元のアルファベットを得るには、<br>
    <span class="monospace">E</span>→<span class="monospace">H</span><br>
    <span class="monospace">B</span>→<span class="monospace">E</span><br>
    <span class="monospace">I</span>→<span class="monospace">L</span><br>
    <span class="monospace">I</span>→<span class="monospace">L</span><br>
    <span class="monospace">L</span>→<span class="monospace">O</span><br>
    となって、<b>"HELLO"</b>が答えになります!<br>
    これが<b>換字式暗号</b>です。(この例は、特に<b>シーザー暗号</b>と言います)`,
    confirmButtonText: "次へ",
    width: "80%",
    allowOutsideClick: false,
  }).then(() => {
    Swal.fire({
      icon: "info",
      title: "ストーリー",
      html: `
        さて、それでは<b>ストーリー</b>をご説明します。<br>
        <br>
        あなたは<b>Bob</b>と<b>Alice</b>が秘密の取り引きをしているらしいと知り、その現場を押さえようとしています。<br>
        AliceがBobに手紙を出そうとしていることに気づき、郵便配達員のふりをしてその手紙を手に入れましたが、<br>
        なんとその手紙は用心深いAliceによって暗号化されていました!<br>
        これはどうやら、<b>アルファベットを別のアルファベットに置き換える暗号</b>のようです。<br>
        暗号を解読して、2人が<b>いつ・どこで</b>会うつもりなのか突き止めましょう！`,
      confirmButtonText: "次へ",
      width: "80%",
      allowOutsideClick: false,
    }).then(() => {
      Swal.fire({
        icon: "info",
        title: "このツールの使い方",
        html: `
        それでは、最後にこのツールの使い方を説明します。
        <h2>暗号文</h2>
        <img src="${IMG_PATH_1}" alt="暗号文" width="80%"><br>
        これがAliceからBobへの換字式暗号による手紙です。これを解読しましょう。
        <h2>変換表・解読文</h2>
        <img src="${IMG_PATH_2}" alt="変換表" width="80%"><br>
        これを使い、暗号文の内容を推測します。
        変換表の対応するアルファベットに、予測した暗号化後のアルファベットを入れてみましょう。
        例えば、<b>"a"</b>を<b>"z"</b>と予測した場合、以下のようになります。
        これを使って、手紙の内容を解読して下さい。
        <h2>解答</h2>
        <img src="${IMG_PATH_3}" alt="解答" width="80%"><br>
        暗号文が解読出来たら、答えとなる、AliceとBobが会う<b>日付</b>と<b>場所</b>を解答しましょう。<br>
        何回でも解答することが可能です。
        <h2>困ったら</h2>
        <img src="${IMG_PATH_4}" alt="ヒント" width="80%"><br>
        ヒントを用意してあります。一番上のボタンから見られますので、困ったら見てみましょう。`,
        width: "80%",
        allowOutsideClick: false,
      });
    });
  });
}

function onHint() {
  Swal.fire({
    icon: "info",
    title: "ヒント 1",
    html: `換字式暗号解読の為の常套手段が<b>"頻度分析"</b>です。現れる単語や文字の出現回数に注目してみましょう!<br>
    例えば、<b>"F"</b>という文字が大文字で多く登場していますが、このような文字と言えば、不定冠詞の<b>"A"</b>か「私」を意味する<b>"I"</b>でしょうか。<br>
    ほかにも<b>"zb"</b>という単語も5回登場するようです。このような単語としては一体何があるでしょうか?`,
    showCancelButton: true,
    confirmButtonText: "第2のヒントを見る",
    cancelButtonText: "戻る",
    width: "80%",
    allowOutsideClick: false,
  }).then((result) => {
    if (!result.isConfirmed) return;
    Swal.fire({
      icon: "info",
      title: "ヒント 2",
      html: `"説明"にも実はヒントが隠されています。どうやらこの暗号文は、AliceからBobへの手紙のようです。<br>
      この情報を使ってみましょう!<br>
      手紙と言えば、「拝啓 太郎様 …… 花子より」という文言がつきものですよね。<br>
      英語では"Dear Taro,  …… Hanako"という書き方をします。<br>
      もしかすると、この暗号文もその知識が使えるかも……?<br>
      送り主が誰なのか、宛て先は誰なのか、得られる情報は全て使って解読してみましょう!`,
      showCancelButton: true,
      confirmButtonText: "第3のヒントを見る",
      cancelButtonText: "戻る",
      width: "80%",
      allowOutsideClick: false,
    }).then((result) => {
      if (!result.isConfirmed) return;
      Swal.fire({
        icon: "info",
        title: "ヒント 3",
        html: `暗号解読まであと一息です!<br>
        この暗号文から得たい情報は2人が<b>いつ・どこ</b>で会うのかという情報でした。<br>
        英語での<b>日付</b>の書き方に注目してみましょう。<br>
        <table style="margin:auto;">
          <tbody>
            <tr>
              <td>1月</td>
              <td>January</td>
              <td>2月</td>
              <td>February</td>
              <td>3月</td>
              <td>March</td>
            </tr>
            <tr>
              <td>4月</td>
              <td>April</td>
              <td>5月</td>
              <td>May</td>
              <td>6月</td>
              <td>June</td>
            </tr>
            <tr>
              <td>7月</td>
              <td>July</td>
              <td>8月</td>
              <td>August</td>
              <td>9月</td>
              <td>September</td>
            </tr>
            <tr>
              <td>10月</td>
              <td>October</td>
              <td>11月</td>
              <td>November</td>
              <td>12月</td>
              <td>December</td>
            </tr>
          </tbody>
        </table>
        暗号文中にこれらの単語は隠れていませんか?
        `,
        width: "80%",
        allowOutsideClick: false,
      });
    });
  });
}

function onReset() {
  Swal.fire({
    icon: "warning",
    title: "リセット",
    html: "本当にリセットしますか？",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      start();
    }
  });
}

HOWTO.addEventListener("click", onHowTo);

HINT.addEventListener("click", onHint);

RESET.addEventListener("click", onReset);

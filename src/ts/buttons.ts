import Swal from "sweetalert2";

const HOWTO = document.getElementById("howToButton") as HTMLButtonElement;
const HINT = document.getElementById("hintButton") as HTMLButtonElement;
const RESET = document.getElementById("resetButton") as HTMLButtonElement;

HOWTO.addEventListener("click", () => {
  Swal.fire({
    icon: "info",
    title: "How to play",
    html: `あなたはBobとAliceが秘密の取り引きをしているらしいと知り、その現場を押さえようとしています。<br>
    AliceがBobに手紙を出そうとしていることに気づき、郵便配達員のふりをしてその手紙を手に入れましたが、<br>
    なんとその手紙は用心深いAliceによって暗号化されていました!<br>
    これはどうやら、<b>アルファベットを別のアルファベットに置き換える暗号</b>のようです。<br>
    暗号を解読して、2人が<b>いつ・どこで</b>会うつもりなのか突き止めましょう！`,
    width: "80%",
  });
});

HINT.addEventListener("click", () => {
  Swal.fire({
    icon: "info",
    title: "Hint 1",
    html: `まずは"how to"を見てみましょう。どうやらこの暗号文は、AliceからBobへの手紙のようです。<br>
           この情報を使ってみましょう!<br>
           手紙と言えば、「拝啓 太郎様 …… 花子より」という文言がつきものですよね。英語では"Dear Taro,  …… Hanako"という書き方をします。<br>
           もしかすると、この暗号文もその知識が使えるかも……?<br>
           送り主が誰なのか、宛て先は誰なのか、得られる情報は全て使って解読してみましょう!`,
    showCancelButton: true,
    confirmButtonText: "第2のヒントを見る",
    cancelButtonText: "戻る",
    width: "80%",
  }).then((result) => {
    if (!result.isConfirmed) return;
    Swal.fire({
      icon: "info",
      title: "Hint 2",
      html: `換字式暗号解読の為の常套手段が"頻度分析"です。現れる単語や文字の出現回数に注目してみましょう!<br>
      例えば、"F"という文字が大文字で多く登場していますが、このような文字と言えば、不定冠詞の"A"か「私」を意味する"I"でしょうか。<br>
      ほかにも"zb"という単語も5回登場するようです。このような単語としては何があるでしょうか?`,
      showCancelButton: true,
      confirmButtonText: "第3のヒントを見る",
      cancelButtonText: "戻る",
      width: "80%",
    }).then((result) => {
      if (!result.isConfirmed) return;
      Swal.fire({
        icon: "info",
        title: "Hint 3",
        html: `暗号解読まであと一息です!<br>
        この暗号文から得たい情報は2人が<b>いつ・どこ</b>で会うのかという情報でした。<br>
        英語での日付の書き方に注目してみましょう。<br>
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
      });
    });
  });
});

RESET.addEventListener("click", () => {
  Swal.fire({
    icon: "warning",
    title: "Reset?",
    html: "本当にリセットしますか？",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
});

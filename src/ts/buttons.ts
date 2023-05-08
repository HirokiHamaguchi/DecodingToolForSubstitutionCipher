import Swal from "sweetalert2";
import { showHint, showAnswer } from "./cipher";

const HOWTO = document.getElementById("howToButton") as HTMLButtonElement;
const HINT = document.getElementById("hintButton") as HTMLButtonElement;
const RESET = document.getElementById("resetButton") as HTMLButtonElement;
const ANSWER = document.getElementById("answerButton") as HTMLButtonElement;

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
    title: "Hint",
    html: "ヒントを表示しますか?",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) showHint();
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

ANSWER.addEventListener("click", () => {
  showAnswer();
});

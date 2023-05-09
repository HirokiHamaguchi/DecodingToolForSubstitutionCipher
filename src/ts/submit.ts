import Swal from "sweetalert2";
import throwConfetti from "./particle";

const FORM = document.getElementById("form") as HTMLButtonElement;
const DATE = document.getElementById("date") as HTMLInputElement;
const PLACE = document.getElementById("place") as HTMLInputElement;

function onSubmit(e: Event) {
  e.preventDefault();
  if (DATE.value === "2023-04-14" && PLACE.value === "7") {
    throwConfetti();
    Swal.fire({
      icon: "success",
      title: "Congratulations!",
      html: "解読成功! おめでとうございます！<br>解読して頂きありがとうございました！<br>是非他の展示もご覧ください。",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          location.reload();
        }, 10);
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: "解読失敗...<br>もう一度挑戦してみましょう！",
      allowOutsideClick: false,
    });
  }
}

FORM.addEventListener("submit", onSubmit);

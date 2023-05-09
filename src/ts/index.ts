import Swal from "sweetalert2";
import { onHowTo } from "./buttons";
import { makeTable, update } from "./cipher";
import "./log";
import "./buttons";
import "./cipher";
import "./submit";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  makeTable();
  update();
  Swal.fire({
    icon: "info",
    title: "換字式暗号",
    html: `<b>五月祭 工学博覧会 暗号班</b>へようこそ!<br>
            この展示は<b>換字式暗号</b>の展示です。`,
    confirmButtonText: "始める",
    allowOutsideClick: false,
  }).then(onHowTo);
});

import Swal from "sweetalert2";
import { onHowTo } from "./buttons";
import { reset } from "./cipher";

export default function start() {
  reset();
  Swal.fire({
    icon: "info",
    title: "換字式暗号",
    html: `<b>五月祭 工学博覧会 暗号班</b>へようこそ!<br>
              これは<b>換字式暗号</b>の展示です。`,
    confirmButtonText: "始める",
    allowOutsideClick: false,
  }).then(onHowTo);
}

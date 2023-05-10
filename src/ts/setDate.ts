// https://qiita.com/t-yama-3/items/29bd686f2a8b3cb9e784#3-%E6%96%87%E5%AD%97%E5%88%97%E5%9E%8B%E3%81%8B%E3%82%89%E6%97%A5%E4%BB%98%E5%9E%8B%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B

export default function setDate() {
  const now = new Date();
  const theEventDay = new Date("2023/05/14");
  const DATE = document.getElementById("date") as HTMLInputElement;
  DATE.value = now < theEventDay ? "2023-05-13" : "2023-05-14";
}

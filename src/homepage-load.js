export default function () {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.innerText = "Best Pizza";

  const motto = document.createElement("h2");
  motto.innerText = "Undeniably world's best!";

  content.append(header, motto);
}

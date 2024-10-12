export default function () {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.innerText = "Our Story";

  const paragraph = document.createElement("p");
  paragraph.innerText = "Founded in 2024 we were immediately declared the best pizza around."

  content.append(header, paragraph);
}

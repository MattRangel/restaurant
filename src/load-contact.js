export default function () {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.innerText = "Contact Us";

  const contactList = document.createElement("ul");
  
  const phone = document.createElement("li");
  phone.appendChild(document.createElement("a"));
  phone.firstChild.href = "tel:+1(800)555-0100";
  phone.firstChild.innerText = "(800) 555-0100";

  const address = document.createElement("li");
  address.innerText = "123 Main St, North Pole, 88888";

  const email = document.createElement("li");
  email.appendChild(document.createElement("a"));
  email.firstChild.href = "mailto: example@example.com";
  email.firstChild.innerText = "example@example.com";

  contactList.append(phone, address, email);
  content.append(header, contactList);
}

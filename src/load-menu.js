export default function () {
  const content = document.querySelector("#content");

  const header = document.createElement("h1");
  header.innerText = "Menu";

  const menuTable = document.createElement("table");

  const nameHeader = document.createElement("th");
  nameHeader.innerText = "Item Name";
  const priceHeader = document.createElement("th");
  priceHeader.innerText = "Price";
  menuTable.createTHead().insertRow().append(nameHeader, priceHeader);

  const menuItems = [
    { name: "Cheese Pizza", price: 5 },
    { name: "Pepperoni Pizza", price: 6 },
    { name: "Hawaiian Pizza", price: 6 },
    { name: "Breadsticks", price: 3 },
  ];

  for (const item of menuItems) {
    const nameCell = document.createElement("td");
    nameCell.innerText = item.name;

    const priceCell = document.createElement("td");
    priceCell.innerText = `$${item.price}`;

    menuTable.insertRow().append(nameCell, priceCell);
  }

  content.append(header, menuTable);
}

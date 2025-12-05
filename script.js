// Runs automatically when the script loads
const prices = document.querySelectorAll(".prices");

let total = 0;

// Sum all values
prices.forEach(price => {
    total += Number(price.textContent);
});

// Create new row for total
const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Span both columns
totalCell.setAttribute("colspan", "2");
totalCell.textContent = "Total: " + total;

totalRow.appendChild(totalCell);
table.appendChild(totalRow);

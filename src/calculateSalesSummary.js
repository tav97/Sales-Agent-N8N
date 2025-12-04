const items = $input.all();
const salesData = items[0].json.salesData || [];

const distributorSales = {};
salesData.forEach(item => {
  const dist = item.distributor || "Unknown Distributor";
  if (!distributorSales[dist]) {
    distributorSales[dist] = { aug: 0, sep: 0, oct: 0 };
  }
  distributorSales[dist].aug += item.aug || 0;
  distributorSales[dist].sep += item.sep || 0;
  distributorSales[dist].oct += item.oct || 0;
});

const itemSales = {};
salesData.forEach(item => {
  const name = item.itemName || "Unknown Item";
  const total = (item.aug || 0) + (item.sep || 0) + (item.oct || 0);
  itemSales[name] = (itemSales[name] || 0) + total;
});

let distributorTable = "Sales by Distributor\n";
distributorTable += "Distributor | Aug | Sep | Oct\n";
distributorTable += "----------------------------------------\n";

for (const [dist, sales] of Object.entries(distributorSales)) {
  distributorTable += `${dist} | ${sales.aug.toFixed(2)} | ${sales.sep.toFixed(2)} | ${sales.oct.toFixed(2)}\n`;
}

let itemTable = "\n\nSales by Item\n";
itemTable += "Item Name | Total Sales\n";
itemTable += "----------------------------------------\n";

for (const [item, total] of Object.entries(itemSales)) {
  itemTable += `${item} | ${total.toFixed(2)}\n`;
}

return [
  {
    json: {
      summary: distributorTable + itemTable,
      distributorSales,
      itemSales,
      totalRecords: salesData.length
    }
  }
];

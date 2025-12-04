

const items = $input.all();

return items.map(item => {
  const row = item.json;
  const keys = Object.keys(row);

  const textColumns = keys.filter(key => typeof row[key] === 'string');

  const distributor = textColumns[0] ? row[textColumns[0]].trim() : "";
  const itemName = textColumns[1] ? row[textColumns[1]].trim() : "";

  const numericColumns = keys.filter(key => typeof row[key] === 'number');

  const aug = numericColumns[0] ? row[numericColumns[0]] : 0;
  const sep = numericColumns[1] ? row[numericColumns[1]] : 0;
  const oct = numericColumns[2] ? row[numericColumns[2]] : 0;

  return {
    json: {
      distributor,
      itemName,
      aug,
      sep,
      oct
    }
  };
});

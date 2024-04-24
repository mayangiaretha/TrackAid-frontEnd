export const calculateTotal = (values, index) => {
  console.log(values, 'the values =====>');
  const item = values.items[index];
  const quantity = parseFloat(item.quantity) || 0;
  const unitPrice = parseFloat(item.unitPrice) || 0;
  const total = quantity * unitPrice;
  return isNaN(total) ? '' : total.toFixed(2);
};

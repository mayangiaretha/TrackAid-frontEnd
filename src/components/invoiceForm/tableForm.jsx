import {
  Table,
  TextField,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import { COLORS } from '../../style/theme';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { calculateTotal } from './invoice.utils';

const TableForm = ({
  values,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const addItem = () => {
    const newItems = [
      ...values.items,
      { product: '', description: '', quantity: 0, unitPrice: 0, total: 0 },
    ];
    setFieldValue('items', newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...values.items];
    newItems.splice(index, 1);
    setFieldValue('items', newItems);
  };

  /**
   * Necessary to stop the calculated value from being one step behind
   */
  useEffect(() => {
    // Recalculate total for each item whenever values change
    values.items.forEach((item, index) => {
      const total = calculateTotal(values, index);
      setFieldValue(`items.${index}.total`, total);
    });
  }, [values.items, setFieldValue]);

  const handleUnitPriceChange = (index, value) => {
    setFieldValue(`items.${index}.unitPrice`, value);
    setFieldValue(`items.${index}.total`, calculateTotal(values, index));
  };

  const handleQuantityChange = (index, value) => {
    setFieldValue(`items.${index}.quantity`, value);
    setFieldValue(`items.${index}.total`, calculateTotal(values, index));
  };

  return (
    <>
      <TableContainer style={{ width: '100%' }}>
        <Table style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: COLORS.BLUE_1 }}>
              <TableCell>Product</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>UnitPrice</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>AddItem/DeleteItem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    name={`items.${index}.product`}
                    variant="standard"
                    value={item.product}
                    onChange={handleChange}
                    error={
                      touched.items &&
                      touched.items[index] &&
                      Boolean(
                        errors.items &&
                          errors.items[index] &&
                          errors.items[index].product,
                      )
                    }
                    helperText={
                      touched.items &&
                      touched.items[index] &&
                      errors.items &&
                      errors.items[index] &&
                      errors.items[index].product
                        ? errors.items[index].product
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`items.${index}.description`}
                    variant="standard"
                    value={item.description}
                    onChange={handleChange}
                    error={
                      touched.items &&
                      touched.items[index] &&
                      Boolean(
                        errors.items &&
                          errors.items[index] &&
                          errors.items[index].description,
                      )
                    }
                    helperText={
                      touched.items &&
                      touched.items[index] &&
                      errors.items &&
                      errors.items[index] &&
                      errors.items[index].description
                        ? errors.items[index].description
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`items.${index}.quantity`}
                    variant="standard"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                    error={
                      touched.items &&
                      touched.items[index] &&
                      Boolean(
                        errors.items &&
                          errors.items[index] &&
                          errors.items[index].quantity,
                      )
                    }
                    helperText={
                      touched.items &&
                      touched.items[index] &&
                      errors.items &&
                      errors.items[index] &&
                      errors.items[index].quantity
                        ? errors.items[index].quantity
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`items.${index}.unitPrice`}
                    variant="standard"
                    value={item.unitPrice}
                    onChange={(e) =>
                      handleUnitPriceChange(index, e.target.value)
                    }
                    error={
                      touched.items &&
                      touched.items[index] &&
                      Boolean(
                        errors.items &&
                          errors.items[index] &&
                          errors.items[index].unitPrice,
                      )
                    }
                    helperText={
                      touched.items &&
                      touched.items[index] &&
                      errors.items &&
                      errors.items[index] &&
                      errors.items[index].unitPrice
                        ? errors.items[index].unitPrice
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name={`items.${index}.total`}
                    variant="standard"
                    value={calculateTotal(values, index)}
                    onChange={handleChange}
                    disabled
                  />
                </TableCell>
                <TableCell>
                  {index === 0 ? (
                    <IconButton onClick={addItem}>
                      <AddIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => deleteItem(values, index)}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableForm;

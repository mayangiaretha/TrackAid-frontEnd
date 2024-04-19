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
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const TableForm = () => {
  return (
    <>
      <TableContainer style={{ width: '100%' }}>
        <Table style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: COLORS.BLUE_1 }}>
              <TableCell>Item</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>AddItem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField defaultValue="Product 1" variant="standard" />
              </TableCell>
              <TableCell>
                <TextField defaultValue="Description 1" variant="standard" />
              </TableCell>
              <TableCell>
                <TextField defaultValue="1" variant="standard" />
              </TableCell>
              <TableCell>
                <TextField defaultValue="$10.00" variant="standard" />
              </TableCell>
              <TableCell>
                <TextField defaultValue="$10.00" variant="standard" />
              </TableCell>
              <TableCell>
                <TextField defaultValue="$10.00" variant="standard" />
              </TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableForm;

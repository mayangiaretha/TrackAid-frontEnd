import MiniDrawer from '../../../layout/drawer/drawer';
import DataGrid from '../../../components/DataGrid/DataGrid';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '../../../elements/button';

const columns = [
  { field: 'id', headerName: 'ID', width: 0 },

  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'telephone',
    headerName: 'Telephone',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'invoiceStatus',
    headerName: 'Status',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    minWidth: 150,
  },
];

export const InvoicesDataGrid = ({ getInvoices }) => {
  return (
    <MiniDrawer>
      <Container>
        <Stack my={4}>
          <Link to="/invoices/addInvoices">
            <Button variant="text" width="10rem">
              Add Invoices
            </Button>
          </Link>
        </Stack>
        <DataGrid
          columns={columns}
          rows={getInvoices}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
        />
      </Container>
    </MiniDrawer>
  );
};

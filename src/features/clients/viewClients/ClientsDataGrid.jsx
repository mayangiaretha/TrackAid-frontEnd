import { Link } from 'react-router-dom';
import { Container, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import MiniDrawer from '../../../layout/drawer/drawer';
import DataGrid from '../../../components/DataGrid/DataGrid';
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
    field: 'email',
    headerName: 'Email',
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
    field: 'address',
    headerName: 'Address',
    flex: 1,
    minWidth: 150,
  },

  {
    field: 'action',
    headerName: '',
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      const handleClientDelete = (id) => {
        console.log(id, 'the client id onDelete============>');
      };

      const handleClientEdit = (id) => {
        console.log(id, 'the client id onEdit============>');
      };

      return (
        <Stack justifyContent="space-evenly" direction="row">
          <IconButton onClick={() => handleClientEdit(params.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleClientDelete(params.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Stack>
      );
    },
  },
];

export const ClientsDataGrid = ({ allClients }) => {
  return (
    <MiniDrawer>
      <Container>
        <Stack my={4}>
          <Link to="/addClient">
            <Button variant="text" width="10rem">
              Add Client
            </Button>
          </Link>
        </Stack>
        <DataGrid
          columns={columns}
          rows={allClients}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
        />
      </Container>
    </MiniDrawer>
  );
};

import {
    Box,
    Stack,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment
} from '@mui/material';

import Drawer from '../../../layout/drawer/drawer';
import {Button} from "../../../elements/button";

const AddClients = () => {
  return (
    <Drawer>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Name</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Address</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">telephone</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>

      <Box>
        <Stack direction="row" gap={2}>
          <Button type="submit" variant="outlined" color="primary">
            Save
          </Button>
          <Button type="submit" variant="outlined" color="secondary">
            Close
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default AddClients;

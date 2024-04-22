import { Typography, Box } from '@mui/material';
import LogoImage from '../../../assets/logo2.png';

export const Invoice = ({ foundInvoice }) => {
  const { name } = foundInvoice;
  console.log(foundInvoice, 'the name =============>');
  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img
          src={LogoImage}
          alt="Logo"
          style={{ width: 200, height: 'auto' }}
        />
      </Box>
      <Box>
        <Typography variant="h4">Name: {name}</Typography>
      </Box>
    </>
  );
};

export default Invoice;

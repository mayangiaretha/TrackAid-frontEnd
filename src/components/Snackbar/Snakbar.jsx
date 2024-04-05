import { Alert, Snackbar } from '@mui/material';

export const MuiSnackBar = ({
  setError,
  setOpen,
  open,
  message,
  severity = 'error',
}) => {
  const handleClose = () => {
    setError('');
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MuiSnackBar;

import ClientsForm from '../../../components/ClientsForm/ClientsForm';
import MiniDrawer from '../../../layout/drawer/drawer';

const AddClients = () => {
  return (
    <MiniDrawer>
      <ClientsForm username="paul" />
    </MiniDrawer>
  );
};

export default AddClients;

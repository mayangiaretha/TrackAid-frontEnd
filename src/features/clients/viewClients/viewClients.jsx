import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClientsDataGrid } from './ClientsDataGrid';
import { getClients } from '../clientsActions/client.actions';

export const ViewClients = () => {
  const [allClients, setAllClients] = useState([]);

  const dispatch = useDispatch();
  const clients = useSelector((state) => state?.clients.clients);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  useEffect(() => {
    if (clients) {
      const cleanedClients = clients.map(
        ({ clientId, name, email, address, telephone }) => ({
          id: clientId,
          name,
          email,
          address,
          telephone,
        }),
      );

      setAllClients(cleanedClients);
    }
  }, [clients]);

  return <ClientsDataGrid allClients={allClients} />;
};

export default ViewClients;

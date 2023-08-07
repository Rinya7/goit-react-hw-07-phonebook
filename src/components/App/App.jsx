import { Container, Loaders } from './App.styled';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { selectError, selectIsLoading } from 'components/Redux/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <Loaders>
        {isLoading && <Loader></Loader>}
        {error && <p>{error}</p>}
      </Loaders>

      <ContactList />
    </Container>
  );
}

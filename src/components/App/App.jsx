import { Container } from './App.styled';

import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { selectError, selectIsLoading } from 'components/Redux/selectors';
import { useSelector } from 'react-redux';

export function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Container>
  );
}

import ContactsList from './ContactsList/ContactsList';
import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import { ContactsTitle, PageTitle } from './App.styled';


const App = () => {
  return (
    <div>
      <PageTitle>Phonebook</PageTitle>
      <ContactsForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;

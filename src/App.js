import React from 'react';
// import PropTypes from 'prop-types';
import Container from './Components/Container';
import ContactForm from './Components/ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return filteredContact;
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContacts = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  componentDidMount() {
    console.log('did mau');
    const contacts = localStorage.getItem('contacts');
    const parsedCoontacts = JSON.parse(contacts);

    if (parsedCoontacts) {
      this.setState({ contacts: parsedCoontacts });
    }
  }

  componentDidUpdate(prewProps, prevState) {
    console.log('update');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Update contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter value={this.state.filter} onFilter={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts}
          onClick={this.deleteContacts}
        />
      </Container>
    );
  }
}

export default App;

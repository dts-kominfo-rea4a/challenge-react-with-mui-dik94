import { useState } from 'react';
import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from './components/Header'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import { Grid, Card, List } from "@mui/material";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const formOnSubmitHandler = (newContact) => {
    setContacts([...contacts, newContact])
  };

  return (
    <div className="App">
      <Header />
      <Grid container sx={{ width: '100%', height: '100%', padding: 10 }}>
        <Grid item xs={12} sm={6}>
          <ContactForm dataFormOnSubmitHandler={formOnSubmitHandler} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ marginRight: 10 }}>
            <List sx={{ width: '100%', bgcolor: '#dbf6f0' }}>
              {contacts
                .map((item, index) => (
                  <Contact data={item} key={index} />
                ))
              }
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

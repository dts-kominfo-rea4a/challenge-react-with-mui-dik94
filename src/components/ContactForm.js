// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import { useState } from "react";

const ContactForm = ({dataFormOnSubmitHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });

    const inputOnChangeHandler = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };
    const kirim = (event) => {
        event.preventDefault();
        dataFormOnSubmitHandler(newContact)
        setNewContact({ name: "", phone: "", email: "", photo: "" });
    };
    
    return (
        <>
        <Card sx={{marginRight: "25%", padding:2, backgroundColor: "#f3f1eb" }}>
            <form onSubmit={kirim}>
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Name"
                  name="name"
                  variant = "filled"
                  required
                  value={newContact.name}
                  onChange={inputOnChangeHandler}
                  fullWidth
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Phone"
                  name="phone"
                  variant = "filled"
                  required
                  value={newContact.phone}
                  onChange={inputOnChangeHandler}
                  fullWidth
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Email"
                  name="email"
                  variant = "filled"
                  required
                  value={newContact.email}
                  onChange={inputOnChangeHandler}
                  fullWidth
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Photo URL"
                  name="photo"
                  variant = "filled"
                  required
                  value={newContact.photo}
                  onChange={inputOnChangeHandler}
                  fullWidth
                />
                <Button color="success" type="submit">ADD NEW</Button>
            </form>
            </Card>
        </>
    );
}

export default ContactForm;
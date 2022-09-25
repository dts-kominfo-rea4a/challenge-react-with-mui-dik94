// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, TextField } from "@mui/material";
import Card from '@mui/material/Card';

const ContactForm = ({dataFormOnSubmitHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const kirim = (event) => {
        event.preventDefault();
        const newContact = {
            name  : event.target.name.value,
            phone : event.target.phone.value,
            email : event.target.email.value,
            photo : event.target.photo.value
        }
        dataFormOnSubmitHandler(newContact)
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
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Phone"
                  name="phone"
                  variant = "filled"
                  required
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Email"
                  name="email"
                  variant = "filled"
                  required
                />
                <TextField
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  label="Photo URL"
                  name="photo"
                  variant = "filled"
                  required
                />
                <Button color="success" type="submit">ADD NEW</Button>
            </form>
            </Card>
        </>
    );
}

export default ContactForm;
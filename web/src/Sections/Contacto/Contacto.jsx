import { useState } from "react";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { Mail, Phone, Place } from "@mui/icons-material";
import styles from "./contacto.module.css";
import { sendEmail } from "../../services/EmailSevice";

const Contacto = () => {
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const formDataObject = {
            nombre: data.get("nombre"),
            email: data.get("email"),
            mensaje: data.get("mensaje"),
        };

        console.log("Formulario enviado:", formDataObject);
        const response = await sendEmail(formDataObject);

        if (response.mensaje === "Correo enviado con éxito") {
            setAlertMessage("Correo enviado con éxito");
            setAlertSeverity("success");
            form.reset(); // Limpiar formulario
        } else {
            setAlertMessage("Error al enviar el correo. Inténtalo nuevamente.");
            setAlertSeverity("error");
        }

        setOpen(true); // Mostrar alerta
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section id="contactos-redes" className={styles.container}>
            <h1>Contacto y Redes</h1>
            <Box className={styles.contacto}>
                <Box className={styles.redes}>
                    <ul>
                        <li><Mail /> dgempresa@live.com</li>
                        <li><Phone /> +54 11 3673 0478</li>
                        <li><Place /> Carlos Casares 3950 - Isidro Casanova</li>
                    </ul>
                </Box>

                <Box className={styles.formulario} component="form" onSubmit={handleSubmit}>
                    <div style={{ width: "100%" }}>
                        <TextField
                            fullWidth
                            margin="normal"
                            name="nombre"
                            label="Nombre y Apellido"
                            required
                            sx={{ color: "white", border: "white solid 1px" }}
                            InputProps={{ style: { color: "white", borderColor: "white" } }}
                            InputLabelProps={{ style: { color: "white", background: "#182f65" } }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            name="email"
                            label="Email"
                            type="email"
                            required
                            sx={{ color: "white", border: "white solid 1px" }}
                            InputProps={{ style: { color: "white", borderColor: "white" } }}
                            InputLabelProps={{ style: { color: "white", background: "#182f65" } }}
                        />
                    </div>
                    <TextField
                        fullWidth
                        margin="normal"
                        name="mensaje"
                        label="Mensaje"
                        multiline
                        rows={4}
                        required
                        sx={{ color: "white", border: "white solid 1px" }}
                        InputProps={{ style: { color: "white", borderColor: "white" } }}
                        InputLabelProps={{ style: { color: "white", background: "#182f65" } }}
                    />
                    <Button variant="contained" sx={{ background: "#ffd418", width: "30%", height: "40px", fontWeight: "bold" }} type="submit">
                        Enviar
                    </Button>
                </Box>
            </Box>

            {/* Snackbar para mostrar alertas */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: "100%" }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </section>
    );
};

export default Contacto;

import { TextField, Button, Box } from "@mui/material";
import { Mail, Phone, Place } from "@mui/icons-material";
import styles from "./contacto.module.css";

const Contacto = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("Formulario enviado:", {
            nombre: data.get("Nombre y Apellido"),
            email: data.get("eEmail"),
            telefono: data.get("Telefono"),
            mensaje: data.get("Mensaje"),
        });
    };

    return (
        <section id="contactos-redes" className={styles.container}>
            <h1 >Contacto y Redes</h1>
            <Box className={styles.contacto}>
                <Box className={styles.redes}>
                    <ul>
                        <li><Mail />dgempresa@live.com</li>
                        <li><Phone />+54 11 3673 0478</li>
                        <li><Place />Carlos casares 3950 - Isidro Casanova</li>
                    </ul>

                </Box>
                <Box className={styles.formulario} component="form" onSubmit={handleSubmit}>
                    <div>
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
                        <TextField
                            fullWidth
                            margin="normal"
                            name="telefono"
                            label="Teléfono"
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
                    <Button variant="contained" sx={{ background: "#ffd418", width: "30%", height: "40px", fontWeight: "bold" }} type="submit">Enviar</Button>
                </Box>
            </Box>
        </section>
    );
};

export default Contacto;

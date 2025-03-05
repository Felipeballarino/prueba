import { TextField, Button, Box } from "@mui/material";
import { Mail, Facebook, Instagram, Phone } from "@mui/icons-material";
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
        <Box className={styles.container}>
            <h1 >Contacto y Redes</h1>
            <Box className={styles.contacto}>
                <Box className={styles.redes}>
                    <ul>
                        <li><Mail /> ferreteriadg@gmail.com</li>
                        <li><Facebook /> Facebook</li>
                        <li><Instagram /> Instagram</li>
                        <li><Phone /> 3537787919891</li>
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
                            InputLabelProps={{ style: { color: "white", background: "#1b4484" } }}
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
                            InputLabelProps={{ style: { color: "white", background: "#1b4484" } }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            name="telefono"
                            label="Teléfono"
                            required
                            sx={{ color: "white", border: "white solid 1px" }}
                            InputProps={{ style: { color: "white", borderColor: "white" } }}
                            InputLabelProps={{ style: { color: "white", background: "#1b4484" } }}
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
                        InputLabelProps={{ style: { color: "white", background: "#1b4484" } }}
                    />
                    <Button variant="contained" sx={{ background: "#ecb53d", width: "30%", height: "40px", fontWeight: "bold" }} type="submit">Enviar</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Contacto;

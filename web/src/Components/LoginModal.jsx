import { useState } from "react";
import { Box, Modal, TextField, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Alert } from "antd";
import { TOKEN } from "../constant/api";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center"
};

const LoginModal = ({ open, setOpen, setIsAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch("https://enddg-production.up.railway.app/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            console.log(response)

            if (!response.ok) {
                throw new Error("Usuario o contraseña incorrectos");
            }

            const data = await response.json();
            sessionStorage.setItem(TOKEN, data); // Guardar sesión en localStorage
            setIsAuthenticated(true); // Actualizar estado global
            setOpen(false);
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="login-modal-title"
            aria-describedby="login-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <Typography variant="h6" component="h2" sx={{ color: "#182f65", fontWeight: "bold", textTransform: "uppercase" }} >
                    Iniciar Sesión
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField
                    label="Correo Electrónico"
                    type="text"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <TextField
                    label="Contraseña"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button type="submit" variant="contained" style={{ background: "#182f65" }} fullWidth >
                    Ingresar
                </Button>
            </Box>
        </Modal>
    );
};

LoginModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    setIsAuthenticated: PropTypes.func.isRequired,
};

export default LoginModal;

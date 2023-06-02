import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35vw',
    bgcolor: 'background.paper',
    boxSshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    p: 4,
    borderRadius: "3%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "35px",
    paddingBottom: "35px"
};

export default function LoginModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <a type="button" onClick={handleOpen}
                style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    lineHeight: "25px",
                    marginRight: "28px",
                    letterSpacing: "2px",
                    fontSize: "15px"
                }}
            >
                LOGIN
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Sign in</h2>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="filled"
                        style={{width:"75%"}}
                    />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="filled"
                        autoComplete="current-password"
                        style={{width:"75%"}}
                    />
                    <br />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#027BFF",
                            fontWeight: "600",
                            fontSize: "15px",
                            width: "75%"
                        }}
                    >
                        SIGN IN
                    </Button>
                    <hr />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "red",
                            fontWeight: "600",
                            fontSize: "15px",
                            width: "75%"
                        }}
                    > 
                    <GoogleIcon />&nbsp;
                        SIGN IN WITH GOOGLE
                    </Button>
                    <br />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#3C5999",
                            fontWeight: "600",
                            fontSize: "15px",
                            width: "75%"
                        }}
                    >
                    <FacebookRoundedIcon />&nbsp;
                        SIGN IN WITH FACEBOOK
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

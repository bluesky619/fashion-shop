import "./bodySignUpPage.css";
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase';
import { useState } from "react";

function BodySignUpPage(args) {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setUser(null);
            })
    }
    return (
        <>
            {
                user ?
                    <>
                    </>
                    :
                    <Container maxWidth style={{ padding: "0" }}>
                        <Container maxWidth className="container__signup">
                            <div className="wrap__signup">
                                <h2>Create your account</h2>
                                <div className="text__field">
                                    <TextField
                                        id="input-email"
                                        label="Username"
                                        variant="filled"
                                    />
                                </div>
                                <div className="text__field">
                                    <TextField
                                        id="input-password"
                                        label="Password"
                                        type="password"
                                        variant="filled"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="text__field">
                                    <TextField
                                        id="input-password"
                                        label="Repeat Password"
                                        type="password"
                                        variant="filled"
                                        autoComplete="current-password"
                                    />
                                </div>
                                <div className="button__signup">
                                    <Button id="button-signup" variant="contained">Create account</Button>
                                </div>
                                <div style={{ marginTop: "35px", textAlign: "center" }}>
                                    <p>Already have an account? <Link href="/login" style={{ textDecoration: "none", color: "black" }}>Login</Link></p>
                                </div>
                                <div className="social__login">
                                    <GoogleIcon type="button" style={{ marginRight: "10px", color: "red" }} onClick={signInWithGoogle} />
                                    <FacebookRoundedIcon type="button" style={{ color: "#1A77F2" }} />
                                </div>
                            </div>
                        </Container>


                    </Container>
            }
        </>
    )
}

export default BodySignUpPage;
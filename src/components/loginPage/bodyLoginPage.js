import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "./bodyLoginPage.css";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAccount, logOutCustomer, openToast } from '../../actions/account.action';
import { getProfileUser, loginUserInformation, setPage } from '../../actions/product.action';

function BodyLoginPage(args) {

    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch();

    // Khởi tạo các trạng thái ban đầu
    const [open, setOpen] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [loginAs, setLoginAs] = useState("Google");
    // Thao tác khi bấm vào avatar
    const toggleAvatar = () => setDropDownOpen(!dropDownOpen);
    const toggle = () => setOpen(!open);
    

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const account = {
        username: username,
        password: password
    }

    const [user, setUser] = useState(null);
    const [customer, setCustomer] = useState(null);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                setLoginAs("Google");
            })
            .catch((error) => {
                console.log(error);
            })
        setOpen(!open);
    }

    const editProfile = () => {
        navigate("/user-profile");
        dispatch(setPage("user-profile"));
    }

    const onLoginHandler = () => {
        
    }
    // Log out
    const logoutGoogle = () => {
        if (loginAs === "Google") {
            signOut(auth)
                .then(() => {
                    setUser(null);
                    navigate('/');
                    window.location.reload();
                    setLoginAs("Google")
                })
                .catch((error) => {
                    console.error(error);
                })
        }
        if (loginAs === "account") {
            setOpen(false);
            setUsername("");
            setPassword("");
            setCustomer(null);
            dispatch(logOutCustomer());
            localStorage.removeItem("userAccount");
            setLoginAs("Google");
            navigate('/');
            window.location.reload();
        }
    }

    return (
        <Container maxWidth style={{ padding: "0" }}>
            <Container maxWidth className="container__login">
                <div className="wrap__login">
                    <h2>Welcome</h2>
                    <div className="text__field">
                        <TextField
                            id="input-email"
                            label="Email"
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
                    <div className="button__login">
                        <Button id="button-login" variant="contained" onClick={onLoginHandler}>login</Button>
                    </div>
                    <div style={{ marginTop: "35px", textAlign: "center" }}>
                        <p>Don't have an account? <Link href="/login/sign-up" style={{ textDecoration: "none", color: "black" }}>Sign Up</Link></p>
                    </div>
                    <div className="social__login">
                        <GoogleIcon type="button" style={{ marginRight: "10px", color: "red" }} onClick={signInWithGoogle} />
                        <FacebookRoundedIcon type="button" style={{ color: "#1A77F2" }} />
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default BodyLoginPage;
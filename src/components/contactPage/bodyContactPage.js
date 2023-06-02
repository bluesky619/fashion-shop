import { Container, Grid, TextField, TextareaAutosize } from "@mui/material";
import { Link } from 'react-router-dom';
import "./bodyContactPage.css"

const BodyContactPage = () => {
    return (
        <Container maxWidth style={{padding: "0"}}>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd" style={{border:"0",  height:"500px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <Container style={{padding: "100px 0px"}}>
                <Grid container>
                    <Grid item xs={6} className="column">
                        <div className="contact__text">
                            <span>information</span>    
                            <h1>Contact Us</h1>
                            <p>
                            As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
                            </p>
                        </div>
                        <div className="contact__address">
                            <div className="address__1">
                                <h4>America</h4>
                                <p>
                                195 E Parker Square Dr, Parker, CO 801
                                </p>
                                <span>+43 982-314-0958</span>
                            </div>
                            <div className="address__2">
                                <h4>France</h4>
                                <p>
                                109 Avenue Léon, 63 Clermont-Ferrand
                                </p>
                                <span>+12 345-423-9893</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} className="column">
                        <Grid container style={{marginBottom:"25px"}}>
                            <Grid item xs={6}>
                                <TextField className="text__field__1" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField className="text__field__1" label="Email" variant="outlined" style={{float:'right'}} />
                            </Grid>
                        </Grid>
                        <Grid container>
                                <TextareaAutosize minRows={7} placeholder=" Message" style={{width:"100%", marginBottom:"35px"}} />
                        </Grid>
                        
                            <span type="button" className="btn__send__message">send message</span>
                        
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}
export default BodyContactPage;
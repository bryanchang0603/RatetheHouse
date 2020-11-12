import React from 'react';
import { HeaderWithRouter } from './navBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded';
import logo from './logo.jpg';
import './SpecificAdPage.css';
class specificAdPage extends React.Component {
    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "3 bedroom house",
            shortDescription: "three bedroom, renovated last year",
            postID: 0,
            price: 600,
            rating: 4,
            coverImage: "houseImage1.jpg",
            imageList: ["houseImage1.jpg", "houseImage2.jpg", "houseImage3.jpg"],
            review: [
                { reviewRating: 5, reviewDetail: "great house" },
                { reviewRating: 4, reviewDetail: "no complians" },
                { reviewRating: 4, reviewDetail: "greate landlord" },
            ],
            landlordImage: "landLordImage.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Gb/s",
            Parking: "2"
        };
    }

    renderOverview() {
        return (
            <div className="root_left">
                <Paper className="paper">
                    <Grid container justify="space-around" alignItems="center" direction="row">
                        <Grid item xs container justify="flex-start" alignItems="center" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <img className="image" alt="Test" src={logo} />
                                </Grid>
                                <Grid item>Utlity</Grid>
                            </Grid>
                            <Grid item xs container direction="column" justify="space-evenly" alignItem="center">
                                {this.renderUtilityComponent(this.state.electricy, "Electricy")}
                                {this.renderUtilityComponent(this.state.water, "Water")}
                                {this.renderUtilityComponent(this.state.Heat, "Heat")}
                            </Grid>
                        </Grid>

                        <Grid item xs container justify="flex-start" alignItems="flex-start" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <WifiRoundedIcon fontSize="inherit"
                                        style={{ fontSize: "small" }} />
                                </Grid>
                                <Grid item>WiFi</Grid>
                            </Grid>
                            <Grid item justify="flex-start">
                                {this.state.WIFI}
                            </Grid>
                        </Grid>

                        <Grid item xs container justify="flex-start" alignItems="flex-start" direction="column">
                            <Grid item xs container direction="row" justify="flex-start" alignItems="flex-start">
                                <Grid item>
                                    <LocalParkingRoundedIcon fontSize="inherit"
                                        style={{ fontSize: "small" }} />
                                </Grid>
                                <Grid item>Parking</Grid>
                            </Grid>
                            <Grid item justify="flex-start">
                                {this.state.Parking} included
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }

    renderUtilityComponent(Input, inputName) {
        if (Input) {
            return (
                <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <CheckIcon fontSize="inherit"
                            style={{ fontSize: "small" }} />
                    </Grid>
                    <Grid item>{inputName}</Grid>
                </Grid>
            )
        }
        else {
            return (
                <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item>
                        <ClearIcon fontSize="inherit"
                            style={{ fontSize: "small" }} />
                    </Grid>
                    <Grid item>{Input}</Grid>
                </Grid>
            )
        }


    }
    render() {
        return (
            <div className="parent">
                <div className="root_left">
                    <Paper className="paper">
                        <Grid container spacing={2}>
                            <Grid item>
                                <img className="image" alt="Test" src={logo} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {this.state.postTitle}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {this.state.shortDescription}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1"><Rating name="read-only" value={this.state.rating} readOnly /></Typography>
                                    <Typography variant="subtitle1">{this.state.rating} out of 5</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <div className="root_left">
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item>
                            <IconButton aria-label="delete" justify="center">
                                <ArrowBackIosRoundedIcon fontSize="inherit"
                                    style={{ fontSize: "150px" }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="delete" justify="center">
                                <ArrowForwardIosRoundedIcon fontSize="inherit"
                                    style={{ fontSize: "150px" }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <img className="imageHouse" alt="Test" src={logo} />
                        </Grid>
                    </Grid>
                </div>
                {this.renderOverview()}
            </div>
        )

    }

}
export default specificAdPage
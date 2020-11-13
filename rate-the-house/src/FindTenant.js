import React from 'react';
import { HeaderWithRouter } from './navBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ReactBingmaps } from 'react-bingmaps';
import ButtonBase from '@material-ui/core/ButtonBase';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded';
import landlordImg from './landlord1.jpg'
import houseImage1 from "./houseImage1.jpg"
import houseImage2 from "./houseImage2.jpg"
import houseImage3 from "./houseImage3.jpg"
import utility from "./Utility.png"
import { Launcher } from 'react-chat-window'
import { InputGroup, DropdownButton, Dropdown, FormControl, FormGroup, Button } from 'react-bootstrap';

class FindTenant extends React.Component {
    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            messageList: [],
            latitude: 43.2069,
            longitude: -79.9192,
            houseCategory: "Mcmaster University",
            postTitle: "3 bedroom house",
            shortDescription: "three bedroom, renovated last year",
            postID: 0,
            price: 600,
            rating: 4,
            displayImage: 0,
            review: [
                { reviewRating: 5, reviewDetail: "great house", User: "Morina" },
                { reviewRating: 4, reviewDetail: "no complians", User: "Daivd" },
                { reviewRating: 4, reviewDetail: "greate landlord", User: "Trump" },
            ],
            landlordImage: "landLordImage.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Gb/s",
            Parking: "2",
            reviewSorting: "Sort By"
        };
    }

    render() {
        return (
            <div>
                <div class='searchBar' >
                    <InputGroup size='lg'>
                        <FormControl
                            placeholder="Search Tennant"
                            aria-label="Search Tennant"
                            aria-describedby="basic-addon2"
                        />
                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title="Sort By..."
                            id="input-group-dropdown-2"
                            startIcon={<ClearIcon />}
                        >
                            <Dropdown.Item href="#">Name</Dropdown.Item>
                            <Dropdown.Item href="#">Price Range: Low to High</Dropdown.Item>
                            <Dropdown.Item href="#">Price Range: High to Low</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-secondary"
                            title="Filter By..."
                            id="input-group-dropdown-2"
                        >
                            <Dropdown.Item href="#">Gender</Dropdown.Item>
                            <Dropdown.Item href="#">Price Range: 500 - 1000</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="dark">Search</Button>
                    </InputGroup>

                </div>
            </div>
        )
    }
}

export default FindTenant
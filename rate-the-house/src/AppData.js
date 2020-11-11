import React from 'react';
import './App.css';
import {
    HashRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect
} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class AppData extends React.Component {

    constructor(props) {
        super(props);

        // An array of social media posts messages, and we'll increment nextID
        // to maintain a unique ID for each post in our array
        this.state = {
            housePost: [
                {
                    location: [43.2069, -79.9192],
                    houseCategory: "Mcmaster University",
                    postTitle: "3 bedroom house",
                    shortDescription: "three bedroom, renovated last year",
                    postID: 0,
                    price: $600,
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
                },
                {
                    location: [43.2069, -79.9192],
                    houseCategory: "Mcmaster University",
                    postTitle: "four bedroom house",
                    shortDescription: "four bedroom, three wash room",
                    postID: 1,
                    price: $500,
                    imageList: ["houseImage4.jpg", "houseImage5.jpg", "houseImage6.jpg"],
                    review: [
                        { reviewRating: 3, reviewDetail: "there are rats in the basement" },
                        { reviewRating: 3, reviewDetail: "not too good, but worth the price" },
                        { reviewRating: 4, reviewDetail: "This user did not leave comment" },
                    ],
                    landlordImage: "landLordImage1.jpg",
                    electricy: true,
                    water: true,
                    Heat: true,
                    WIFI: "included, 50Gb/s",
                    Parking: "1"
                },
                {
                    location: [43.2069, -79.9192],
                    houseCategory: "Mcmaster University",
                    postTitle: "Basement Bedroom",
                    shortDescription: "one room in the basement",
                    postID: 2,
                    price: $550,
                    imageList: ["houseImage7.jpg", "houseImage8.jpg"],
                    review: [
                        { reviewRating: 2, reviewDetail: "not a very good location" },
                        { reviewRating: 3, reviewDetail: "upstairs to noisy" },
                        { reviewRating: 2, reviewDetail: "bad landlord" },
                    ],
                    landlordImage: "landLordImage2.jpg",
                    electricy: true,
                    water: true,
                    Heat: true,
                    WIFI: "included, 100Gb/s",
                    Parking: "0"
                },
                {
                    location: [43.2069, -79.9192],
                    houseCategory: "Mcmaster University",
                    postTitle: "One bedroom apartment",
                    shortDescription: "",
                    postID: 3,
                    price: $600,
                    imageList: ["houseImage9.jpg", "houseImage10.jpg"],
                    review: [
                        { reviewRating: 2, reviewDetail: "I experienced bed bug" },
                        { reviewRating: 4, reviewDetail: "the manager is very nice" },
                        { reviewRating: 2, reviewDetail: "rent too high" },
                    ],
                    landlordImage: "landLordImage3.jpg",
                    electricy: true,
                    water: true,
                    Heat: true,
                    WIFI: "not included",
                    Parking: "0"
                },
                {
                    location: [43.2069, -79.9192],
                    houseCategory: "Mcmaster University",
                    postTitle: "subLeasing a room",
                    shortDescription: "sub leasing one room",
                    postID: 4,
                    price: $500,
                    imageList: ["houseImage11.jpg", "houseImage12.jpg"],
                    review: [
                    ],
                    landlordImage: "landLordImage4.jpg",
                    electricy: false,
                    water: false,
                    Heat: false,
                    WIFI: "included, 50Gb/s",
                    Parking: "1"
                }
            ]
        };
    }
}

import React, {Component} from '../../../node_modules/react';
import Timer from '../EventContainer/countdown';
import "./style.css";
import { AutoScaling } from 'aws-sdk';

class Event extends Component {

    render() {

        return (
            <div className="jumbotron">
                <img alt="scouts" id="scouts" src="/boyscouts.png" />
                <h2>Darien Boy Scouts Annual Tag Sale</h2>
                <p className="lead">
                Saturday, May 9, 2020<br/>
                8:30am to 4:00pm<br/>
                140 West Ave, Darien, CT 06820
                </p>
                <hr className="my-4"/>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="https://www.google.com/maps/place/140+West+Ave,+Darien,+CT+06820/@41.075633,-73.4834604,142m/data=!3m1!1e3!4m5!3m4!1s0x89c2a061f481c189:0x5d2567d6e83411ad!8m2!3d41.0755924!4d-73.4832516" role="button">View on Map</a>
                    &nbsp;
                    &nbsp;
                    <a className="btn btn-primary btn-lg" href="https://calendar.google.com/calendar/r/eventedit/MmNwcnQ3ZmZ1YTljNTg5NzN1bXQ0NDBoOTYgbWVncnlkemV3c2tpQG0" role="button">Add to Calendar</a>
                </p>
            {/* <div className="timer">
                <h4>Countdown to the Event: 
                <h4 id="timer"></h4></h4>
            </div> */}
            </div>
        
        );
    }
}

export default Event;

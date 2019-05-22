import React, {Component} from '../../../node_modules/react';
import Timer from '../EventContainer/countdown';
import "./style.css";
import { AutoScaling } from 'aws-sdk';

class Event extends Component {

    render() {

        return (
        <div className="event-container">
            <div className="event-info">
                <br></br>
                <img alt="scouts" id="scouts" src="/boyscouts.png" />
                <p><h1>Darien Boy Scouts Annual Tag Sale</h1>
                <h2>Saturday, May 9, 2020</h2>
                <h2>8:30am to 4:00pm</h2>
                <h2>140 West Ave, Darien, CT 06820</h2></p>
            </div>
            <div className="buttons">
                <a href="https://www.google.com/maps/place/140+West+Ave,+Darien,+CT+06820/@41.075633,-73.4834604,142m/data=!3m1!1e3!4m5!3m4!1s0x89c2a061f481c189:0x5d2567d6e83411ad!8m2!3d41.0755924!4d-73.4832516"
                    title="View on map"
                    target="_blank"
                    id="map">
                    <img alt="View on map" src="/googlemap.png"/>
                    </a>
                <a href="https://calendar.google.com/calendar/r/eventedit/MmNwcnQ3ZmZ1YTljNTg5NzN1bXQ0NDBoOTYgbWVncnlkemV3c2tpQG0"
                    target="_blank"
                    title="Add to Calendar"
                    id="calendar">
                    <img alt="Calendar" src="/calendar.png"/>
                    </a>
                    </div>
            {/* <div className="timer">
                <h4>Countdown to the Event: 
                <h4 id="timer"></h4></h4>
            </div> */}
        </div>
        
        );
    }
}


export default Event;

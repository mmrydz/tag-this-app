import React, {Component} from '../../../node_modules/react';
import Timer from '../EventContainer/countdown';

class Event extends Component {

    render() {
        const imageStyle = {
            width: 150
        }
        return (
        <div className="event">
            <br></br>
            <img style={imageStyle} src="/boyscouts.png" />
            <h1>Darien Boy Scouts Annual Tag Sale</h1>
            <h2>Saturday, May 9, 2020</h2>
            <h2>8:30am to 4:00pm</h2>
            <h2>140 West Ave, Darien, CT 06820</h2>
            <ul class="event-buttons">
            <li>
            <a href="https://www.google.com/maps/place/140+West+Ave,+Darien,+CT+06820/@41.075633,-73.4834604,142m/data=!3m1!1e3!4m5!3m4!1s0x89c2a061f481c189:0x5d2567d6e83411ad!8m2!3d41.0755924!4d-73.4832516"
                title="View on map"
                target="_blank">
                <img alt="View on map" src="/googlemap.png"/>
                </a>
            </li>
            <li>
            <a href="https://calendar.google.com/calendar/r/eventedit/MmNwcnQ3ZmZ1YTljNTg5NzN1bXQ0NDBoOTYgbWVncnlkemV3c2tpQG0"
                target="_blank"
                title="Calendar">
                <img alt="Calendar" src="/calendar.png"/>
                </a>
            </li>
            </ul>
            <h3>Countdown to the Event: 
            <h3 id="timer"></h3></h3>
        </div>
        
        );
    }
}


export default Event;

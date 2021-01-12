import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

class LinkTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quos!
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque expedita ex exercitationem earum atque?
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    Lorem ipsum dolor sit amet.
                </Tab>
            </Tabs>
        </div> );
    }
}
 
export default LinkTabs;
import React, {Component} from 'react';
import LinkCard from './LinkCard';
import LinkClicker from './LinkClicker';

class LinkTab extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }
    render() { 
        return (
            <div className="mt-3">
                { this.props.title ? <h2>{this.props.title}</h2> : '' }

                <LinkClicker links={this.props.links} />
                {
                 this.props.links.map((link, index) => <LinkCard key={index} link={link} />)
                }
            </div>
        );
    }
}
 
export default LinkTab;
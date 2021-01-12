import React, { Component } from 'react';
class LinkClicker extends Component {
    constructor(props) {
        super(props);
        this.openLink = this.openLink.bind(this);
    }
    state = {
        
    }
    anchorCreate(link) {
        var a = document.createElement('a');
        a.target = '_blank';
        a.href = link.url;
        a.innerText = link.title;
        a.click();
    }
     openLink() {
        var urlList = this.props.links
        var max_index = (urlList.length - 1)
        let i = 0;
        let int = setInterval(() => {
            // update the location with next array value
            this.anchorCreate(urlList[i]);
            // check value of i and increment, if reached the max value then clear the interval
            if (i++ >= max_index) clearInterval(int)
        }, 100)
     }

    render() { 
        return <button className="btn btn-secondary" onClick={this.openLink}>
            Open All Links
        </button>
    }
}
 
export default LinkClicker;


import {Component} from 'react';
class LinkCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collapse: false,
         }
        this.cardBodyToggle = this.cardBodyToggle.bind(this)
    }
    cardBodyToggle () {
        console.log('this.state', this.state)
        this.setState({
            collapse: !this.state.collapse,
        })
    }
    render() { 
        var {link} = this.props;
        var stars = [];
        for (let index = 0; index < link.star; index++) {
            stars.push("＊");
        }
        return (
            <div className="link-card card my-2">
                <div onClick={this.cardBodyToggle} className="card-header">
                    {link.title}
                </div>
                {
                    this.state.collapse ? '' : <div className="card-body">
                        <a target="_blank" href={link.url}>{link.url}</a>
                        <br/>
                        { stars }
                        <br/>
                        <div className='description' dangerouslySetInnerHTML={{__html: link.description}}>
                    </div>
                    </div>
                }
            </div>
        );
    }
}
 
export default LinkCard;
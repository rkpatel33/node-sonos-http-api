
class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick(e) {
        e.preventDefault();

        if (this.props.urls.constructor === Array) {
            this.props.urls.map((url) =>  {
                $.get(url);
                console.log('GET', url);
            })
        } else {
            $.get(this.props.urls);
            console.log('GET', this.props.urls);
        }
    }

    render() {
        return (
            <button className='sonos-button btn btn-primary'
                onClick={this.onClick.bind(this)}
                onTouchStart={this.onClick.bind(this)}>
                { this.props.caption }
            </button>
        );
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props)
    }

    urls = {
        mazzystar: [
            'http://rishis-macbook-pro-2.local:5005/preset/favorite_mazzystar',
            'http://rishis-macbook-pro-2.local:5005/preset/volume_night'
        ]
    }

    render() {
        return (
            <div className="controller-container">
                <Button caption='Mazzy Star' urls={ this.urls.mazzystar }/>
            </div>
        );
    }
}


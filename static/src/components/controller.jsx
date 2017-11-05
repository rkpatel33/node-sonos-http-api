
class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>
                <div className='sonos-button btn btn-primary'
                    onClick={this.props.onClick}
                    onTouchStart={this.props.onClick}>
                    Sound Down!
                </div>
            </div>
        );
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props)
    }

    urls = {
        demo: 'http://rishis-macbook-pro-2.local:5005/preset/demo'
    }

    clickDemo() {
        $.get(this.urls.demo)
        console.log('GET', this.urls.demo);
    }

    render() {
        return (
            <div className="controller-container">
                <Button onClick={ this.clickDemo.bind(this)}/>
            </div>
        );
    }
}


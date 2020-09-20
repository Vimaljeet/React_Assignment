import React, { Component } from 'react'
import reactDOM from 'react-dom';
import Switch from 'react-switch';

class Tswitch extends Component {

constructor() {
    super()

    this.state = {
         checked: false;
    }
    this.handleChanged = this.handleChanged.bind(this)
}

handleChanged(checked) {
    this.setState({checked})
}

    render() {
        return (
            <div>
                <Switch className="react-switch" onChange={this.handleChanged} checked={this.state.checked}/>
            </div>
        )
    }
}

export default Tswitch

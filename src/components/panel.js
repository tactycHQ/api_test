import React, {Component} from 'react';

class Panel extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.refresh} >Refresh from panel</button>
            </div>
        );
    }
}

export default Panel;
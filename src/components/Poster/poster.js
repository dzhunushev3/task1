import React from 'react';


class Poster extends React.Component {

    render() {
        return (
            <div className="poster">
                <h1>{this.props.name}</h1>
                <p>Date: {this.props.date}</p>
                <p><img src={this.props.image}></img></p>
            </div>
        )
    }
}


export default Poster;
import React from 'react';
import './side-bar.css'


class Sidebar extends React.Component {

    render() {
        return (
            <a className="sidebar" href="">{this.props.menuitem}</a>
        )
    }
}


export default Sidebar;
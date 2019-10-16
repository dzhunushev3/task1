import React from 'react';
import './header.css'
import Sidebar from '../Side-bar/side-bar'

class Header extends React.Component {
    state = {
        header: {
            name: 'Test header'
        },
        sidebar: [
            { menuitem : 'Главная'},{menuitem: 'Топ'},{menuitem:'Кинотеатр'}
        ]
    };
    render() {
        return (
              <div className="header">
                <p>{this.state.header.name}</p>
                <div className="divSidebar">
                    <Sidebar menuitem={this.state.sidebar[0].menuitem}/>
                    <Sidebar menuitem={this.state.sidebar[1].menuitem}/>
                    <Sidebar menuitem={this.state.sidebar[2].menuitem}/>
                </div>
            </div>
       );
    }
}
export default Header
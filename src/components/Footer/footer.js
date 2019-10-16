import React from 'react';
import './footer.css'

class Footer extends React.Component {
    state = {
        footer: {
            name: 'Dzhunushev3@gmail.com', number: '0555303414'
        }
    };
    render() {
        return (
            <div className="footer">
                <span className="name">{this.state.footer.name}</span>
                <span className="number">{this.state.footer.number}</span>

            </div>
        );
    }
}
export default Footer
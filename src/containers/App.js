import React from 'react';
import './App.css';
import Poster from '../components/Poster/poster';


class App extends React.Component {
  state = {
      post: [
          { name: 'Побег из Шоушенка', date: 1994, image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Movie_poster_the_shawshank_redemption.jpg/240px-Movie_poster_the_shawshank_redemption.jpg' },
          { name: 'Форрест Гамп', date: 1994, image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg/274px-%D0%A4%D0%BE%D1%80%D1%80%D0%B5%D1%81%D1%82_%D0%93%D0%B0%D0%BC%D0%BF.jpg' },
          { name: 'Выстрел в пустоту', date: 2017, image: 'https://st.kp.yandex.net/images/film_iphone/iphone360_910353.jpg' },
         
      ]
  };


  render() {
      return (
          <div className="App">
              <Poster name={this.state.post[0].name} date={this.state.post[0].date} image={this.state.post[0].image} />
              <Poster name={this.state.post[1].name} date={this.state.post[1].date} image={this.state.post[1].image} />
              <Poster name={this.state.post[2].name} date={this.state.post[2].date} image={this.state.post[2].image} />
          </div>
      );
  }
}
export default App;
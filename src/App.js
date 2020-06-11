import React from 'react';
import './App.css';
import './fonts.css';

// Components
import { Header } from './components/Header';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { Chart } from './components/Charts/Chart';

// API
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
    this.setState({ data: data });
  }

  render() {

    const { selectedData } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-body container">
          <Cards data={ selectedData } />
          <CountryPicker />
          <Chart />
        </main>
      </div>
    );
  }
}

export default App;

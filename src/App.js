import React from 'react';
import './App.css';
import './fonts.css';

// Components
import { Header } from './components/Header';
import { Cards } from './components/Cards/Cards';
import { CountryPicker } from './components/CountryPicker/CountryPicker';
import { Chart } from './components/Charts/Chart';

// API
import { fetchData, fetchCountries } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchCountry = await fetchData(country);

    this.setState({
      data: fetchCountry,
      country: country
    });
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-body container">
          <CountryPicker handleCountryChange={ this.handleCountryChange } />
          <Cards data={ data } />
          <Chart data={ data } country={ country } />
        </main>
      </div>
    );
  }
}

export default App;

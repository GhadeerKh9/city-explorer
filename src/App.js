import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesInfo from "./components/MoviesInfo";
// import WeatherInfo from "./components/WeatherInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // moviesArray: [],
      // inputName: "",
      long: 0,
      lat: 0,
    };
  }

  gettingOutput = async (event) => {
    event.preventDefault();
    await this.setState({
      inputName: event.target.cityName.value,
    });
    console.log(this.state.inputName);
    await this.handleLocation();
    await this.handleMovies();
  };

  handleLocation = () => {
    axios
      .get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.2c03634bd163d80e7a5aa70cb849b566&q=${this.state.inputName}&format=json`
      )
      .then((locationOutputs) => {
        this.setState({
          long: locationOutputs.data[0].lon,
          lat: locationOutputs.data[0].lat,
        });
        console.log(this.state.long, this.state.lat);
        this.handleWeather();
        // this.handleMovies();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  handleWeather = () => {
    axios
      .get(
        `http://localhost:3070/weather?name=${this.state.inputName}&lon=${this.state.long}&lat=${this.state.lat}`
      )
      .then((weatherOutputs) => {
        this.setState({
          weatherArray: weatherOutputs.data,
        });
        console.log(this.state.weatherArray);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  handleMovies = () => {
    axios
      .get(`http://localhost:3070/movies?name=${this.state.inputName}`)
      .then((moviesOutputs) => {
        this.setState({
          moviesArray: moviesOutputs.data,
        });
        console.log(this.state.moviesArray);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.gettingOutput}>
          <input type="text" placeholder="Enter A City Name" name="cityName" />
          <button type="submit">Explore!</button>
        </form>

        {/* {this.state.weatherArray
          ? this.state.weatherArray.map((item) => {
              return (
                <>
                  {item.desc}
                  {item.date}
                </>
              );
            })
          : null} */}

        <MoviesInfo newArr={this.state.moviesArray} />
      </>
    );
  }
}
export default App;

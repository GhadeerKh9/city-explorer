import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupItem, ListGroup } from "react-bootstrap/";
import Card from "react-bootstrap/Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderedName: "",
      renderedLong: "",
      renderedLatit: "",
      showMap: false,
      showError: false,
      errorMsg: "Bad response",
    };
  }

  method1 = async (event) => {
    event.preventDefault();

    let nameOfEnteredCity = event.target.cityName.value;
    let URL = `https://eu1.locationiq.com/v1/search.php?key=pk.2c03634bd163d80e7a5aa70cb849b566&q=${this.state.nameOfEnteredCity}&format=json`;
    try {
      let results = await axios.get(URL);

      this.setState({
        renderedName: results.data[0].display_name,
        renderedLong: results.data[0].lon,
        renderedLatit: results.data[0].lat,
        showMap: true,
      });
    } catch {
      this.setState({
        showMap: false,
        showError: true,
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.method1}>
          <input type="text" placeholder="Enter City's name" name="cityName" />

          <button type="submit">Explore!</button>
        </form>

        <ListGroup>
          <ListGroup.Item variant="primary">
            {this.state.renderedName}
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">
            {this.state.renderedLong}
          </ListGroup.Item>
          <ListGroup.Item variant="success">
            {this.state.renderedLatit}
          </ListGroup.Item>
        </ListGroup>

        {this.state.showMap && (
          <img
            src={`https://eu1.locationiq.com/v1/search.php?key=pk.2c03634bd163d80e7a5aa70cb849b566&center=${this.state.renderedLatit},${this.state.renderedLong}`}
            alt="Map"
          />
        )}
        {this.state.showError && this.errorMsg}
        <Card>
          <Card.Body>{this.state.showError && this.errorMsg}</Card.Body>
        </Card>
      </>
    );
  }
}

export default App;
console.log(results.data);

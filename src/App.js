import React from "react";
import axios from "axios"


class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    weatherArray: [],
    moviesArray: [],
    long: '',
    lat: ''


  }

}

gettingOutput = (event) => {
  event.preventDefault();
  const inputName = event.target.cityName.value;
  

  let urlIQ = `https://eu1.locationiq.com/v1/search.php?key=pk.2c03634bd163d80e7a5aa70cb849b566&q=${inputName}&format=json`;

  axios.get(urlIQ).then(locationOutputs => {this.setState({
    long: locationOutputs.data[0].lon,
    lat: locationOutputs.data[0].lat
  })})
  

  const urlServer = `http://localhost:3050/weather?name=${inputName}&lon=${this.state.long}&lat=${this.state.lat}`



  axios.get(urlServer).then(weatherOutputs => {this.setState({
    weatherArray: weatherOutputs.data
  })})


  .catch(err => {console.log(err)})

}




// .then(moviesOutputs => {this.setState({
//   moviesArray: moviesOutputs.data
// })})




render() {
  

return(
  <>
    <form onSubmit={this.gettingOutput}>
    <input type="text" placeholder= "Enter A City Name" name= "cityName" />
     <button type="submit">Explore!</button>


    </form>
    {this.state.weatherArray.map(item =>{
    return (
      <p>desc = {item.desc}</p>
    )

    })}

   
  

  </>
)
}


}
export default App;




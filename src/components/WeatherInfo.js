// import React from "react";

// class WeatherInfo extends Component {
//   render() {
//     return (
//       <>
//         <p>{this.props.item.desc}</p>
//         <p>{this.props.item.date}</p>
//       </>
//     );
//   }
// }

// export default WeatherInfo;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { Row, Col } from "react-bootstrap";

class WeatherInfo extends React.Component {
  render() {
    return (
      <>
        {this.props.newWarr
          ? this.props.newWarr.map((item) => {
              return (
                <Col className="mb-1">
                  <Card border="primary" style={{ width: "18rem" }}>
                    <Card.Header>{item.date}</Card.Header>
                    <Card.Body>
                      <Card.Text>{item.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : console.log("weather didnt render")}
      </>
    );
  }
}
export default WeatherInfo;

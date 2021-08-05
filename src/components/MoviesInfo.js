import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { Row, Col } from "react-bootstrap";

class MoviesInfo extends React.Component {
  render() {
    return (
      <>
        {this.props.newArr
          ? this.props.newArr.map((item) => {
              return (
                
                  <Col>
                    <Card style={{ width: "18rem" }}>
                       <Card.Img variant="top" src={item.poster} />
                      {" "}
                      <Card.Body>
                         <Card.Title>{item.title}</Card.Title>
                         <Card.Text>{item.overview}</Card.Text>
                        {" "}
                      </Card.Body>
                      {" "}
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{item.avgVotes}</ListGroupItem>
                        <ListGroupItem>{item.count}</ListGroupItem>
                        <ListGroupItem>{item.popularity}</ListGroupItem>
                        <ListGroupItem>{item.release}</ListGroupItem>
                        {" "}
                      </ListGroup>
                      //{" "}
                    </Card>
                  </Col>
                
              );
            })
          : null}
      </>
    );
  }
}
export default MoviesInfo;


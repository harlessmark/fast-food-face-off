import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

class Instructions extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col sm="auto">
            <p id="small-text">
              - You may need to play at least 1 game to start the server -
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col></Col>
          <Col sm={10} md={8} className="mt-3 mb-3">
            <h4>ABOUT</h4>
            <p>
              You're looking at my first app! It was created with Ruby on Rails
              and React while I was in school. Nokogiri was used to create three
              web scrapers that scraped data from a nutrition site, Yahoo Image
              search results, and for restaurant logos. Learn more by clicking
              on the GitHub link above!
            </p>
            <h4>INSTRUCTIONS</h4>
            <p>
              You'll be shown two randomly selected fast foods. Your task is to
              guess which one has the most calories. You get 1 point for each
              correct guess. Your game is over once you make an incorrect guess.
              Good luck!
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="auto">
            <Button onClick={this.props.clickHandler}>START GAME</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Instructions;

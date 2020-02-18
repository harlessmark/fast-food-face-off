import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p>
              This is my very first app! I created with Ruby on Rails and React
              while I was in my coding bootcamp.
            </p>
            <p>
              The food data was scraped using three different web scrapers
              running on Nokogiri. The first was to gather the food name and
              calories, the second was to scrape the first search result in
              Yahoo Image Search, and the third scraper was to gather the
              restaurants' logos (which I decided not to use).
            </p>
            <p>
              You can read more about this project on my GitHub repo linked
              above. Feel free to fork it!
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;

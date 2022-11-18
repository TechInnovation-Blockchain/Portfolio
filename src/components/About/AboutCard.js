import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My full legam name is <span className="purple">James Edward Fox </span>
            from <span className="purple"> GA, United States.</span>
            <br />I am a senior level software engineer.
            <br />
            <br />
            In my spare time, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Blockchain Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's make it!"{" "}
          </p>
          <footer className="blockquote-footer">James Fox</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

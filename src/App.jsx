import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function AlertDismissibleExample() {
  // https://react-bootstrap.github.io/docs/components/alerts#dismissing
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Oh snap! You got an error but message about it styled like a success!
        </Alert.Heading>
        <p>
          Change this and that and try again.{" "}
          <span className="dangerText">Danger text styled in tomato color</span>
          , est non commodo luctus, nisi erat porttitor ligula,{" "}
          <span className="infoText">info text styled in violet</span> eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
      </Alert>
    );
  }
  return (
    <Button variant="info" onClick={() => setShow(true)}>
      Button with variant info but in orange color :D
    </Button>
  );
}

const App = () => (
  <Container className="p-3">
    <Container className="pb-1 p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <h2 className="header">Using Sass with custom theming</h2>
      <AlertDismissibleExample />
      <hr />
      <p>
        You can check further in information on the official Bootstrap docs{" "}
        <a
          href="https://getbootstrap.com/docs/4.3/getting-started/theming/#importing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </Container>
  </Container>
);

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import { Col, Row, Container } from 'react-bootstrap';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Container>
        <Row>
          <Col md={{span: 3, offset: 3}}>
            <h2>Home</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

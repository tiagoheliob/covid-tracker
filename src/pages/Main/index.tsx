import { Col, Row, Container } from "react-bootstrap";
import SearchInput from "../../components/SearchInput";
import InfoCardList from "../../components/InfoCardList";

import "./main.css";

export default ({ location }) => {
  return (
    <>
      <Container className="main-page-container">
        <Row>
          <SearchInput />
        </Row>
      </Container>
      <InfoCardList />
    </>
  );
};

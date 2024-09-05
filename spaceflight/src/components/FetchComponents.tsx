import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface SingleFlight {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

const FetchComponents = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles";

  const [flight, setFlight] = useState<SingleFlight | null>(null);

  const fetchSpaceflight = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei libri");
        }
      })
      .then((arrayOfFlight) => {
        console.log(arrayOfFlight);
        setFlight(arrayOfFlight);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchSpaceflight();
  }, []);
  
  return (
    <Container>
      <Row>
        {flight && flight.results.map((f) => {
          return (
            <Col xs={12} md={4} lg={3} key={f.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={f.image_url} />
                <Card.Body>
                  <Card.Title>{f.title}</Card.Title>
                  <Card.Text>
                  {f.published_at}
                  </Card.Text>
                  <Button variant="primary">Dettagli</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default FetchComponents;

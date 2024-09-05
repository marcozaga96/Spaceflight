import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface Result {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: any[];
    events: any[];
  }

const Details = ()=>{
    
    const { id } = useParams<{ id: string }>();
    const [detail, setDetail] = useState<Result | null>(null);


  const fetchIdSpaceflight = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei libri");
        }
      })
      .then((idOfFlight) => {
        console.log(idOfFlight);
        setDetail(idOfFlight)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchIdSpaceflight();
  }, [id]);
return (
    <Container>
    {detail && (
      <Card>
        <Card.Img variant="top" src={detail.image_url} />
        <Card.Body>
          <Card.Title>{detail.title}</Card.Title>
          <Card.Text>{detail.summary}</Card.Text>
          <Card.Text><strong>Pubblicato il:</strong> {detail.published_at}</Card.Text>
          <Card.Text><strong>Pubblicato da:</strong> {detail.news_site}</Card.Text>
          <Button variant="primary" href={detail.url} target="_blank">Leggi tutto l'articolo</Button>
        </Card.Body>
      </Card>
    )}
  </Container>
)
}
export default Details
import './NewsCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
 
const NewsCard=({story})=>{
    if(!story.title)
        return null;
    return(
      <div className='news-card'>
    <Card >
        <Card.Body>
            <Card.Title><h2>{story.title}</h2></Card.Title>
            <Card.Text>Author: <b>{story.author}</b>&nbsp;|&nbsp;{story.num_comments} comments  &nbsp;|&nbsp; {story.points}  points </Card.Text>
        </Card.Body>
 
        <Card.Footer>
            <Button className='custom-button' size='sm' href={story.url}>Read this news</Button>
        </Card.Footer>
 
    </Card>
    </div>
    );
};
export default NewsCard;
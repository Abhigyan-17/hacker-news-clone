import './Cards.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import time from '../../utils/timeFinder';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
 
const CommentCard=({comment})=>{
    
    return(
        <div className='cards'>
            <Card >
                <Card.Body>
                    <Card.Title>
                        <h4>
                            <b><i>Story: </i></b>
                            {comment.story_title}
                        </h4>
                    </Card.Title>
                    <Card.Text>
                        Author: <b>{comment.author}</b> &nbsp;|&nbsp; 
                        {comment.points}  points &nbsp;|&nbsp; 
                        {time(comment.created_at)} 
                    </Card.Text>
                </Card.Body>
                <Card.Footer> 
                    {comment.comment_text}&nbsp;&nbsp;
                    <Button className="custom-button" variant="warning" size='sm' href={comment.story_url}>Read news</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CommentCard;
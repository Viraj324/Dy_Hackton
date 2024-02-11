import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./events.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./police.css";
import sss from 'assets/cr_img/football.png'

function Trendingevents() {
  return (
    <div id='police' >
      <div className='policecontent'>
        <h5 style={{color:"rgb(163, 67, 2)"}}>Events</h5>
        <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab beatae rem quos consequatur, magni incidunt quae optio ratione, possimus architecto ullam accusantium quas. Voluptates a magnam corporis doloremque fugiat.trive to create an environment where everyone feels secure, valued, and heard.</p>
      </div>
      <CardGroup className='row'style={{marginLeft:'10%',marginRight:'10%'}} >
        <Card classname="column" style={{marginRight: '30px', backgroundColor: 'black', border: 'none'}} >
          <Card.Img variant="top"margin="10%" className='img' src={sss} style={{height:'300px', width:'300px'}} />
          <Card.Body style={{color: 'white'}}>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
        <Card classname="column brdr" style={{marginRight: '30px', backgroundColor: 'black', border: 'none'}}>
          <Card.Img variant="top" className='img' src={sss} style={{height:'300px', width:'300px'}}/>
          <Card.Body style={{color: 'white'}}>
            <Card.Title className='title'>Name</Card.Title>
            <Card.Text>
              Non Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
        <Card classname="column brdr" style={{marginRight: '30px', backgroundColor: 'black', border: 'none'}}>
          <Card.Img variant="top" className='img' src={sss} style={{height:'300px', width:'300px'}}/>
          <Card.Body style={{color: 'white'}}>
            <Card.Title>Name</Card.Title>
            <Card.Text >
              Co-carricular activities
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Designation</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Trendingevents;
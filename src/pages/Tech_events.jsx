import React from 'react';
import Navbar from 'components/navbar';
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "components/footer";
import { Card, Container, Row, Col } from 'react-bootstrap';

// import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ClubPage() {
  return (
    
    <div style={{backgroundColor:"black"}}>
      <Navbar/>
      <CardGroup className='row'style={{marginLeft:'10%',marginRight:'10%',marginTop:"-50px",marginBottom:"50px"}} >
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        
      </CardGroup>

      <CardGroup className='row'style={{marginLeft:'10%',marginRight:'10%',marginTop:"-50px",marginBottom:"50px"}} >
      <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        <Card classname="column" style={{marginRight: '30px',background:"transparent",color:"white",border:"none"}} >
          <Card.Img variant="top"margin="10%" className='img' src="https://cdn-icons-png.flaticon.com/512/700/700674.png"  />
          <Card.Body>
            <Card.Title>Name</Card.Title>
            <Card.Text>
              Technical Clubs
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
            <Link to="/clubs" style={{ textDecoration: 'none', color: 'inherit' }}>
      <button style={{borderRadius:"20px",width:"150px",fontWeight:'bold'}}>Explore</button>
    </Link></small>
          </Card.Footer>
        </Card>
        
      </CardGroup>
      <Footer/>
    </div>
  );
}

export default ClubPage;
import React from 'react';
import PropTypes from 'prop-types';

// Importing the Bootstrap Components
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

import { withRouter } from 'react-router-dom'

// Importing components
import Loader from '../shared/loader';

class Project extends React.Component {
 

  createDeveloper(e){
    e.preventDefault();
    this.props.history.push("/create");
  }
  deleteDeveloper(id, e){
   this.props.delete(id)
    
  }
  render() {
    return (
      <Container fluid>
        <Row style={{marginLeft:"7px"}}>
          <Button variant="secondary" 
             onClick={(e) => {this.createDeveloper(e)}}
             className="action-button">
             + ADD NEW DEVELOPER
           </Button>
        </Row>
        <Row>
          <Col md={10} >
            { !this.props.projectData.loading ?
                 this.props.projectData.projects.map( (project, index) =>
                   <Card key={index} className="card-default" bg="#f7f5f5">
                              <Card.Body >
                              <Card.Img variant="top" bsPrefix="logo-image" src={project.logo} />
                                <div className="header-text">
                                  {project.title}
                                </div>
                                <Card.Text  className="header-title">
                                  <div style={{marginRight:"10px"}}>
                                  <span style={{fontWeight:"bold"}}>{project.totalExp}</span>
                                      <br/>
                                    Years Experience
                                  </div>
                                  <div>
                                  <span style={{fontWeight:"bold"}}>{project.totalProjects}</span>
                                    <br/>
                                    Projects
                                  </div>
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Text  style={{height:"100px", textAlign:"left"}}>
                              {project.desc.slice(0,90)}
                              <a href={project.imgURL} >
                                <br/>
                              {project.imgTitle}</a>
                            </Card.Text>
                           
                     <Card.Img variant="top" src={project.imgURL} />
                   
                     <Button variant="secondary" 
                        onClick={(e) => {this.deleteDeveloper(project.id, e)}}
                        style={{marginTop:"10px"}}
                        className="action-button">
                          Delete
                      </Button>
                   </Card>,
                 ) : <Loader/>}
          </Col>
        </Row>
      </Container>
    );
  }
}

Project.propTypes = {
  projectData: PropTypes.array,
};
export default withRouter(Project);

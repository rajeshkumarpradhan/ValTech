import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

// Importing the Bootstrap Components
import {Form, Button} from 'react-bootstrap';

// Importing components

// Importing actions
import {postProjects} from "../redux/actions/projectAction";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: "",
            title: "",
            totalExp: "",
            totalProjects: "",
            desc: "",
            imgTitle: "",
            location:"",
            imgURL:""
        };
      }
      handleChange(e){
          const value = e.target.value;
          this.setState({[e.target.id] : value})
      }
      submit(){
         this.props.postProjects(this.state);
         this.props.history.push("/");
      }
    render() {
        return (
            <React.Fragment>
              <Form className="form">
                    <Form.Group controlId="logo">
                        <Form.Label>Developer Logo Image Url</Form.Label>
                        <Form.Control type="text" value ={this.state.logo} placeholder="Developer Logo Image Url" onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="title">
                        <Form.Label>Developer name</Form.Label>
                        <Form.Control type="text" value ={this.state.title} placeholder="Developer name" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="totalExp">
                        <Form.Label>Years of Experience</Form.Label>
                        <Form.Control type="text" value ={this.state.totalExp} placeholder="Years of Experience" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="totalProjects">
                        <Form.Label>Project Count</Form.Label>
                        <Form.Control type="text" value ={this.state.totalProjects} placeholder="Project Count" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="desc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text"  value ={this.state.desc} placeholder="Description" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="imgTitle">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" value ={this.state.imgTitle} placeholder="Project Name"  onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Project Location</Form.Label>
                        <Form.Control type="text" value ={this.state.location} placeholder="Project Location"  onChange={(e) => this.handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="imgURL">
                        <Form.Label>Project Image Url</Form.Label>
                        <Form.Control type="text" value ={this.state.imgURL} placeholder="Project Image Url" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                    <Button variant="primary" type="button" onClick={() => this.submit()}>
                        Submit
                    </Button>
                    </Form.Group>
                </Form>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.projects,
})

const mapDispatchToProps = dispatch => {
    return {
        postProjects: (data) => dispatch(postProjects(data))
    }
}
FormContainer.propTypes = {
    getProjects: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormContainer))

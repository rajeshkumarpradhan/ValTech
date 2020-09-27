import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// Importing components
import Project from "../components/project";

// Importing actions
import {getProjects, deleteProjects} from "../redux/actions/projectAction";

class ProjectsContainer extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    };

    delete(id){
     this.props.deleteProjects(id);
    }
    
    render() {
        return (
        <React.Fragment>
            <Project filter={this.filterData} projectData={this.props.data} delete={(id) => this.delete(id)}/>   
        </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.projects,
})

const mapDispatchToProps = dispatch => {
    return {
        getProjects: () => dispatch(getProjects()),
        deleteProjects: (id) => dispatch(deleteProjects(id))
    }
}

ProjectsContainer.propTypes = {
    getProjects: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)

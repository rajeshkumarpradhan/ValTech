
import axios from "axios";
import { GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR,
  POST_PROJECTS_REQUEST, POST_PROJECTS_SUCCESS, POST_PROJECTS_ERROR,
  DELETE_PROJECTS_REQUEST,  DELETE_PROJECTS_SUCCESS,  DELETE_PROJECTS_ERROR,
  } from "../actionTypes";

export function isLoading(value) {
    return {
      type: value
    };
}
export function isLoaded(value, data) {
    return {
      type: value,
      payload:data
    };
}
export function isError(value, error) {
    return {
      type: value,
      payload:error
    };
}
export function getProjects() {
    return (dispatch) => {
      let userUrl = "https://5f7064d2bdb178001633bf66.mockapi.io/projects";
        dispatch(isLoading(GET_PROJECTS_REQUEST));
        axios
        .get(userUrl)
        .then((response) => {
            dispatch(isLoaded(GET_PROJECTS_SUCCESS, response.data));
        })
        .catch((error) => {
            dispatch(isError(GET_PROJECTS_ERROR, error));
        });
    };
   
}
export function postProjects(data) {
  return (dispatch) => {
    let userUrl = "https://5f7064d2bdb178001633bf66.mockapi.io/projects";
      dispatch(isLoading(POST_PROJECTS_REQUEST));
      axios
      .post(userUrl, data)
      .then((response) => {
          dispatch(isLoaded(POST_PROJECTS_SUCCESS, data));
      })
      .catch((error) => {
          dispatch(isError(POST_PROJECTS_ERROR, error));
      });
  };
 
}
export function deleteProjects(id) {
  return (dispatch) => {
    let userUrl = "https://5f7064d2bdb178001633bf66.mockapi.io/projects/"+id;
      dispatch(isLoading(DELETE_PROJECTS_REQUEST));
      axios
      .delete(userUrl)
      .then((response) => {
          dispatch(isLoaded(DELETE_PROJECTS_SUCCESS, id));
      })
      .catch((error) => {
          dispatch(isError(DELETE_PROJECTS_ERROR, error));
      });
  };
 
}





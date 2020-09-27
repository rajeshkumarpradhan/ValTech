import { GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR,
   POST_PROJECTS_SUCCESS, POST_PROJECTS_ERROR, DELETE_PROJECTS_SUCCESS
} from "../actionTypes";
  
  const initialState = {
    projects: [],
    loading: false,
    error:false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_PROJECTS_REQUEST: {
        return {
          ...state,
          loading: true,
          error:false
        };
      }
      case GET_PROJECTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error:false,
          projects: action.payload,
        };
      }
      case GET_PROJECTS_ERROR: {
        return {
          ...state,
          loading: false,
          error:true,
        };
      }
      case POST_PROJECTS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error:false,
          projects: [...state.projects, action.payload],
        };
      }
      case POST_PROJECTS_ERROR: {
        return {
          ...state,
          loading: false,
          error:true,
        };
      }
      case DELETE_PROJECTS_SUCCESS: {
        const newState = state.projects.filter( val => val.id !== action.payload );
        return {
          ...state,
          loading: false,
          error:false,
          projects: newState
        };
      }
      
      default:
        return state;
    }
  }
  
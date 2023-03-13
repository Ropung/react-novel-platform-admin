const API_PATH = {
  // User
  API_LOGIN: "/api/users/login",
  API_SIGNUP: "/api/users",

  // MyInfo
  API_CREATE_PROFILE_IMAGE: "/api/users/img",
  API_GET_USER_INFO: "/api/users/info",
  API_UPDATE_USER_INFO: "/api/users/update",
  API_UPDATE_PROFILE_IMAGE: "/api/users/img/update",

  // Projects
  API_CREATE_PROJECT: "/api/projects/",
  API_GET_PROJECT: "/api/projects?user-id=",
  API_UPDATE_PROJECT: "/api/projects/",
  API_DELETE_PROJECT: "/api/projects/",
  API_UPDATE_PROJECT_IMAGE: "/api/projects/img/",

  // Board
  API_CREATE_BOARD: "/api/boards",
  API_GET_BOARD_PAGINATE: "/api/boards?id=",
  API_GET_BOARD: "/api/boards",
  API_UPDATE_BOARD: "/api/boards",
  API_DELETE_BOARD: "api/boards",

  // Comment
  API_COMMENT_CREATE: "/api/comments",
  API_COMMENT_UPDATE: "/api/comments",
  API_COMMENT_DELETE: "/api/comments",
};

Object.freeze(API_PATH);

export default API_PATH;

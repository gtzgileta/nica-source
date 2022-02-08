import axios from "axios";
import { storeToken } from "../utils/wordpress-util";

// ACTION TYPES
const CONNECTION_SUCCESS = "CONNECTION_SUCCESS";
const MENU_SUCCESS = "MENU_SUCCESS";
const HERO_SUCCESS = "HERO_SUCCESS";
const PODCASTS_SUCCESS = "PODCASTS_SUCCESS";
const LOADING = "LOADING";
const ERROR = "ERROR";

// REDUCER
const initialState = {
  token: null,
  menu: [],
  hero: {},
  podcasts: [],
  gallery: [],
  loading: false,
  error: null,
};

export const getToken = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios
      .post("/wp-json/jwt-auth/v1/token", {
        username: "admin",
        password: "admin",
      })
      .catch(() =>
        dispatch({
          type: ERROR,
          payload: `Couldn't find token for these credentials.`,
        })
      );

    const found = res.data.token;

    storeToken(found);
    dispatch({ type: CONNECTION_SUCCESS, payload: found });

    return true;
  } catch (e) {
    dispatch({ type: ERROR, payload: "Error trying to login." });
    return false;
  }
};

export const getMenus = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios
      .get("/wp-json/wp-api-menus/v2/menu-locations/primary")
      .catch(() => dispatch({ type: ERROR, payload: `Couldn't get data.` }));

    // GET data
    const found = res.data;

    dispatch({ type: MENU_SUCCESS, payload: found });

    return true;
  } catch (e) {
    dispatch({ type: ERROR, payload: "Error trying to login." });
    return false;
  }
};

export const getHero = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios
      .get("/wp-json/wp/v2/pages/2")
      .catch(() => dispatch({ type: ERROR, payload: `Couldn't get data.` }));

    // GET data
    const found = res.data.acf;

    dispatch({ type: HERO_SUCCESS, payload: found });

    return true;
  } catch (e) {
    dispatch({ type: ERROR, payload: "Error trying to get hero." });
    return false;
  }
};

export const getPodcasts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const res = await axios
      .get("/wp-json/wp/v2/podcasts")
      .catch(() =>
        dispatch({ type: ERROR, payload: `Couldn't get podcasts.` })
      );

    // GET data
    const found = res.data;
    console.log("found podcasts", found);

    dispatch({ type: PODCASTS_SUCCESS, payload: found });

    return true;
  } catch (e) {
    dispatch({ type: ERROR, payload: "Error trying to get podcasts." });
    return false;
  }
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        error: null,
      };
    case MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: payload,
        error: null,
      };
    case HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: payload,
        error: null,
      };
    case PODCASTS_SUCCESS:
      return {
        ...state,
        loading: false,
        podcasts: payload,
        error: null,
      };
    default:
      return state;
  }
};

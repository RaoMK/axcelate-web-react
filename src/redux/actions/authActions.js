import { setJWT, cleanLocalStorage, getUserInfoFromJWT } from "utils/storage";
import { loginUser } from "api";
import { ActionTypes } from "../constants/actionTypes";
import { toast } from "react-toastify";
import { fetchUser } from "api";

export const loginAction = (data) => async (dispatch) => {
  try {
    const response = await loginUser(data);

    await setJWT(response?.data?.token);
  } catch (error) {
    console.log("eeerro", error);
    toast.error(error);
  }

  const userData = await getUserInfoFromJWT();

  dispatch({
    type: ActionTypes.LOGIN,
    payload: userData,
  });
  window.location.reload();
};

export const fetchUserAction = () => async (dispatch) => {
  const token = await getUserInfoFromJWT();

  const { data } = await fetchUser(token?._id);

  dispatch({
    type: ActionTypes.FETCH_CURRENTUSER,
    payload: token,
  });
  dispatch({
    type: ActionTypes.LOGIN,
    payload: data,
  });
};

export const logout = () => async (dispatch) => {
  // dispatch({ type: ActionTypes.LOGOUT, payload: { loading: true } });
  cleanLocalStorage();

  // history.push("/auth");
  toast.success("Logout Successful");

  dispatch({
    type: ActionTypes.LOGOUT,
    payload: null,
  });
  window.location.replace("/");
};

export const GET_MAIN_DATA = "getmaindata";

export const URL = "http://localhost:4000/";
export const FACEBOOK_PROFILE_PIC_URL = userId => {
  return `https://graph.facebook.com/${userId}/picture?type=large`;
};

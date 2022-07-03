export function getLocalUser() {
  try {
    const user = JSON.parse(localStorage.getItem("karma_user") || "");
    const profile = JSON.parse(localStorage.getItem("karma_profile") || "");
    const token = localStorage.getItem("karma_token") || "";
    const data =  {
      user: Array.isArray(user) ? user[0] : user,
      profile: Array.isArray(profile) ? profile[0] : profile,
      token: token
    };
    console.log(data)
    return data
  } catch (errr) {
    console.log(errr)
    return {};
  }
}

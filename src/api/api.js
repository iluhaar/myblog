import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9a0e9d85-4dc9-444b-ae2c-610ee966bfb2"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(
      `users?page=${currentPage}&count=${pageSize}`, {
    }
    ).then(response => response.data)
  },
  getAuth() {
    return instance
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      }).then(response => response.data)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`,)
      .then((response => response.data))
  },
  follow(userID) {
    instance.post(`follow/${userID}`, {},
    ).then(response => response.data)
  },
  unFollow(userID) {
    instance.delete(`follow/${userID}`, {},
    ).then(response => response.data)
  }
}

// export const getAuth = () => {
//   return instance
//     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     }).then(response => response.data)

// }

// export const getProfile = (userId) => {
//   return instance.get(`profile/` + userId,)
//     .then((response => response.data))
// }

// export const follow = (userID) => {
//   instance.post(`follow/${userID}`, {},
//   ).then(response => response.data)
// }
// export const unFollow = (userID) => {
//   instance.post(`follow/${userID}`, {},
//   ).then(response => response.data)
// }

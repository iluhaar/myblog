import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '5030c85d-7a02-4610-9ad3-3f802dfecc51' 
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
      .get(`/auth/me`, {
      }).then(response => response.data)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`,)
      .then((response => response.data))
  },
  follow(userID) {
    instance.post(`follow/${userID}`, {},
    )
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

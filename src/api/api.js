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
  getProfile(userId) {
    return instance.get(`profile/${userId}`,)
      .then((response => response.data))
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {},
    )
  },

  unFollow(userId) {
    return instance.delete(`follow/${userId}`,
    )
  },
  
}

export const authAPI = {
  getAuth() {
    return instance
      .get(`/auth/me`, {
      }).then(response => response.data)
  }
}

// getStatus(userId) {
//   return instance.get(`profile/status${userId}`)
//     .then((response => response.body))
// }
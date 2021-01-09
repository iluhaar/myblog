let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, item: "Hi, wazzup?", likesCount: 25 },
        { id: 2, item: "GL HF", likesCount: 33 },
        { id: 3, item: "Hello", likesCount: 50 },
        { id: 4, item: "Dobriy den", likesCount: 71 },
      ],
      newPostText: ['Henlo Pepplo!']
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Kon" },
        { id: 2, name: "Hoi" },
        { id: 3, name: "Perdun" },
        { id: 4, name: "Bivalui" },
        { id: 5, name: "Trus" },
      ],

      messages: [
        { id: 1, message: "Privet" },
        { id: 3, message: "Bonjur" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Privet ia Trus" },
      ]
    },

    sideBar: [
      { id: 1, name: "Kolyan" },
      { id: 2, name: "Igorian" },
      { id: 3, name: "Vasian" }

    ]
  },
  _callSub() {
    console.log('smth changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSub = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        item: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = '';
      this._callSub(this._state);
    }
    else if (action.type === 'ON-CHANGE-AREA') {
      this._state.profilePage.newPostText = action.newText
      this._callSub(this._state);
    }
  },
}
export default store;

// addPost() {
//   let newPost = {
//     id: 5,
//     item: this._state.profilePage.newPostText,
//     likesCount: 0
//   }
//   this._state.profilePage.posts.push(newPost)
//   this._state.profilePage.newPostText = '';
//   this._callSub(this._state);
// },
// onChangeArea(newText) {
//   this._state.profilePage.newPostText = newText
//   this._callSub(this._state);
// },
let rerenderEntireTree = () => {
  console.log('smth changed')
}
let state = {

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
}
export const addPost = () => {
  let newPost = {
    id: 5,
    item: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const onChangeArea = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state; 
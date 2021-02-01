import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

// const PostNEW = (props) => {
//   return <form onSubmit={props.hanldeSubmit}>
//       <div>
//         <Field placeholder="Type here" name={"post"} component={"input"}></Field>
//       </div>
//       <div>
//         <button> Add</button>
//       </div>
//       <div>
//       <button>Delete </button>
//       </div>
//   </form>
// }

// const PostReduxForm = reduxForm({
//   form:'post'
// })(PostPostNEW)

const MyPost = (props) => {
  let newElementPost = React.createRef();
  let postsElements = props.posts.map((p,key) => (
    <Post key={p.id} item={p.item} likesCount={p.likesCount} />
  ));

  let addNewPost = () => {
    props.addNewPost();
  };

  let onChangeTextPost = () => {
    let text = newElementPost.current.value;
    props.onChangeTextPost(text);
  };

  return (
    <div className={s.content}> 
      <div>
        My posts
        <div>
          <textarea
            onChange={onChangeTextPost}
            ref={newElementPost}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add</button>
          <button>Delete</button>
        </div>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPost;

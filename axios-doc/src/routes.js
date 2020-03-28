import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

export const routes = [
  { path : "/", component : Posts},
  { path : "/new-post", component : NewPost},
  { path : "*", redirect : "/"}
]

import { setPosts } from "../slice/postSlice";

const fetchAllUsers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => dispatch(setPosts(data)))
};



export default fetchAllUsers
import { setPost } from "../slice/postDetailsSlice";


const fetchDetails = (payload) => (dispatch) => {
    console.log(payload);
    console.log(dispatch);
    fetch('https://jsonplaceholder.typicode.com/posts/'+payload.id)
        .then((res) => res.json())
        .then((data) => dispatch(setPost(data)))
};



export default fetchDetails
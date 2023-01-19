import urls from "../constants/urls";


const getAll = () => {
        return fetch(urls.users)
            .then(response => response.json());
    };

const getAllPosts = ()=>{
    return fetch(urls.posts)
        .then(response => response.json());
}

export const userService = {
    getAll,
    getAllPosts
}
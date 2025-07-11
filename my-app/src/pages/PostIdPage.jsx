import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import Loader from "../Components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostByID, isLoading] = useFetching( async (id) => {
        const response = await PostServise.getByID(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading] = useFetching( async (id) => {
        const response = await PostServise.getCommentsByPostId(id)
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostByID(params.id)
        fetchComments(params.id)
    }, [params.id]);
    return (
        <div>
            <h1>ВЫ ОТКРЫЛИ c ID = {params.id} </h1>
            {isLoading
            ? <Loader/>
            : <div>
                    {post.id}. {post.title}
                </div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)}
                </div>
            }
        </div>

    );
};

export default PostIdPage;
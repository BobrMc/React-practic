
import React, {useState, useEffect} from "react";
import {usePosts} from "../hooks/usePosts";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import Loader from "../Components/UI/Loader/Loader";
import PostList from "../Components/PostList";
import Max from "../Components/Max";
import UserCard from "../Components/UserCard";
import LikeCounter from "../Components/LikeCounter";
import {getPageCount, getPagesArray} from "../utils/pages";
import PostServise from "../API/PostServise";
import {useFetching} from "../hooks/useFetching";
function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [totalPages, setTotalPages] = useState(0)

    const [limit, setLimit] = useState(10)

    const [page, setPage] = useState(1)

    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostServise.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts,newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [page]);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changesPage = (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: '20px'}} >
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}><PostForm create ={createPost}/></MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "space-between"}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS '/> }
            <div className={'page__wrapper'}> {pagesArray.map((p) =>
                <span  onClick={() => changesPage(p)} key={p} className={page === p ? 'page page__current' : 'page'}>
            {p}
            </span>)}
            </div>

            <UserCard name="Алексей" age={25} city="Москва" />
            <LikeCounter/>
        </div>
    );
}
export default Posts;

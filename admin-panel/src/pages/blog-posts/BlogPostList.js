import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import PostPreview from "./PostPreview";
import Button from "../../components/Button";

export default function BlogPostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/blog-posts").then(({ data }) => {
            setPosts(data)
        })
    }, []);

    const deletePost = postId => {
        axios.delete(`/blog-posts/${postId}`)
        setPosts(posts.filter((post) => post._id !== postId));
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <Link to="/posts/add">
                    <Button>Add Post</Button>
                </Link>
            </div>
            <div className="flex flex-col gap-4 w-1/2 mx-auto">
                {posts.map((post) => (
                    <PostPreview
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        body={post.body}
                        publishedAt={post.createdAt}
                        onDelete={() => deletePost(post._id)}
                    />
                ))}
            </div>
        </div>
    );
}
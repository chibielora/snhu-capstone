import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { useEffect, useState } from "react";

export default function EditBlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/blog-posts/${id}`).then(({ data }) => {
            setPost(data);
        })
    }, [id])

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Make the post request
        axios.put(`/blog-posts/${id}`, formData)
        navigate("/posts")
    };

    if (!post) {
        return null;
    }

    return (
        <div className="container mx-auto p-12">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="block" htmlFor="title">
                        Title
                    </label>
                    <input className="p-2 w-full bg-slate-800" type="text" id="title" name="title" defaultValue={post.title} />
                    <label className="block" htmlFor="body">
                        Body
                    </label>
                    <textarea id="body" name="body" className="p-2 w-full bg-slate-800" rows="6" defaultValue={post.body} />
                    <div className="flex justify-end gap-2">
                        <Button variant="outlined" type="button" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
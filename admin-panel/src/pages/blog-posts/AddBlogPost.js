import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function AddBlogPost() {
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        // Make the post request
        axios.post(`/blog-posts`, formData)
    };
    return (
        <div className="container mx-auto p-12">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="block" htmlFor="title">
                        Title
                    </label>
                    <input className="w-full bg-slate-800" type="text" id="title" name="title" />
                    <label className="block" htmlFor="body">
                        Body
                    </label>
                    <textarea id="body" name="body" className="w-full bg-slate-800" rows="6" />
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
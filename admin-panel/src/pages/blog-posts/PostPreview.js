import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function PostPreview({
    id,
    title,
    body,
    onDelete,
    publishedAt,
}) {
    const paragraphs = body.split("\n\n");
    const bodyPreview = paragraphs[0];

    return (
        <div className="flex flex-col gap-4 bg-gray-800 text-white rounded-lg shadow-md overflow-hidden p-4">
            <div className="flex justify-between items-end">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="text-sm text-gray-300">{new Date(publishedAt).toLocaleDateString()}</div>
            </div>
            <p className="rounded-sm border p-2 max-w-prose">
                {bodyPreview}{paragraphs.length > 1 ? "..." : ""}
            </p>
            <div className="flex justify-between">
                <Link to={`/posts/${id}/edit`} >
                    <Button color="green">
                        Edit Post
                    </Button>
                </Link>
                <Button
                    onClick={onDelete}
                    color="red"
                >
                    Delete Post
                </Button>
            </div>
        </div>
    )
}
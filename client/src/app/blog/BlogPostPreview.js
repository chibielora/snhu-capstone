import Link from "next/link";

export default function BlogPostPreview({
    id,
    title,
    body,
    publishedAt,
}) {
    const paragraphs = body.split("\n\n");
    const bodyPreview = paragraphs[0];

    return (
        <div className="blog-post">
            <h3>
                <Link href={`/blog/${id}`}>{title}</Link>
            </h3>
            <p className="date">{new Date(publishedAt).toDateString()}</p>
            <p className="whitespace-pre-wrap">
                {bodyPreview}{paragraphs.length > 1 ? "..." : ""}
            </p>
        </div>
    )
}
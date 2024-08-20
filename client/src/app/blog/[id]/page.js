export default async function Page({ params }) {
    const post = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/${params.id}`
    ).then(res => res.json());

    const paragraphs = post.body.split("\n\n");

    return (
        <section className="container p-4 mx-auto bg-yellow-50 rounded border max-w-prose">
            <header>
                <h2 className="text-2xl text-cyan-800">{post.title}</h2>
                <div className="text-sm text-gray-700">{new Date(post.createdAt).toDateString()}</div>
            </header>
            <main className="mt-4">
                {paragraphs.map((paragraph, i) => (
                    <p className=" mb-4" key={i}>{paragraph}</p>
                ))}
            </main>
        </section>
    )
}
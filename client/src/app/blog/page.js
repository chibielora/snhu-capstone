import BlogPostPreview from "./BlogPostPreview";

export default async function News() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog-posts`
  ).then(res => res.json());

  return (
    <div className="news-container">
      <div>
        <div className="main-news">
          <h1 className="main-title">BLOG</h1>
          {posts.map(post => (
            <BlogPostPreview
              key={post._id}
              id={post._id}
              title={post.title}
              body={post.body}
              publishedAt={post.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

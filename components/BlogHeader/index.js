const BlogHeader = ({ title, subtitle, coverImage, date, author }) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <img
          src={author?.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {author?.name}
        {", "} {date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {title}
      </h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
      {/* Check if contains cover image */}
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid rounded"
          src={coverImage}
          alt="TODO: provide alt"
        />
      </div>
    </div>
  );
};

export default BlogHeader;

import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import { getAllBlogs, getBlogBySlug } from "lib/api";

const BlogDetail = ({ blog }) => {
  console.log("blogs", blog);
  return (
    <PageLayout>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={blog.coverImage}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Col>
      </Row>
    </PageLayout>
  );
};

export default BlogDetail;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug); // your fetch function here

  return {
    props: {
      blog,
    },
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

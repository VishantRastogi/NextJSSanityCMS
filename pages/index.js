import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import { getAllBlogs } from "lib/api";

const Home = ({ blogs }) => {
  return (
    <PageLayout className="">
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {blogs.map(
          ({ author, coverImage, date, subtitle, slug, title }, index) => (
            <Col md="4" key={index}>
              <CardItem
                authorName={author.name}
                authorAvatar={author.avatar}
                publishedDate={date}
                authorImage={coverImage}
                blogSubtitle={subtitle}
                blogTitle={title}
                slugLink={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  );
};

export default Home;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async () => {
  const blogs = await getAllBlogs(); // your fetch function here
  return {
    props: {
      blogs,
    },
  };
};

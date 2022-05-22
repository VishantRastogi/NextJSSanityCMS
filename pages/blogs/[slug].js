import PageLayout from "components/PageLayout";
import { getBlogBySlug } from "lib/api";

const BlogDetail = ({ blogs }) => {
  return (
    <PageLayout>
      <h1>Hello Details {blogs?.slug}</h1>
    </PageLayout>
  );
};

export default BlogDetail;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({ params }) => {
  const blogs = await getBlogBySlug(params.slug);
  return {
    props: {
      blogs,
    },
  };
};

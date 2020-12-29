import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type Props = {
  post: Post;
};

type Post = {
  title: string;
  description: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      post: {
        title: "title1",
        description: "description1",
      },
    },
  };
};

function BlogDetail(props: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <li>{props.post.title}</li>
      <li>{props.post.description}</li>
    </ul>
  );
}

export default BlogDetail;

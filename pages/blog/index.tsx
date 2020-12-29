import { GetStaticProps } from "next";

type Props = {
  posts: Post[];
};

type Post = {
  title: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: [
        {
          title: "title1",
        },
        {
          title: "title2",
        },
      ],
    },
  };
};

function Blog(props: Props) {
  return (
    <ul>
      {props.posts.map((post: Post) => {
        return <li>{post.title}</li>;
      })}
    </ul>
  );
}

export default Blog;

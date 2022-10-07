import React from 'react'
import matter from 'gray-matter'
import Head from 'next/head';
import { marked } from 'marked'
import Image from 'next/image';
import styles from "../../styles/Home.module.css";

const Post = ({ htmlString, data, image}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div className={styles.post}>
        <Image
          src={`http://localhost:1337${image}`}
          alt="blog-post"
          priority={true}
          className="rounded-full"
          width={600}
          height={400}
        />
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
const resulting = await fetch(`http://localhost:1337/api/blogs`);
const result = await resulting.json();

// console.log("paths", result)

    return {
      paths: result.data.map(result => ({
        params: { id: result.id.toString()},
      })),
      fallback: false,
    };
}

export const getStaticProps = async ({params}) => {
  // const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md")).toString()
  // console.log("params", params);
  const res = await fetch(
    `http://localhost:1337/api/blogs/${params.id}?populate=image`
  );
  const markdownWithMeta = await res.json();
  const parsedMarkdown = matter(markdownWithMeta.data.attributes.draft);
  const htmlString = marked(parsedMarkdown.content);
  const image =
    markdownWithMeta.data.attributes.image.data.attributes.formats.large.url;

  return {
    // what this fn pass is the parameter we need to fetch data for
    // anything put in the props object will be passed to our component
    props: {
      image,
      htmlString,
      data: parsedMarkdown.data,
    },
  };
}

export default Post
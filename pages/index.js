import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ images, result }) {

  return (
    <>
      <Head>
        <title>thisBlog</title>
        <meta title="description" content="This is an example of our blog" />
      </Head>
      <div className={styles.container}>
        <h1>Blog Post Links:</h1>
        <div className={styles.card}>
          {result.map(result => {
            return (
              <div className={styles.flexing} key={result.id}>
                {/* // link is a special componen t from next js we can use to navigate pages */}
                <Link href={`/blog/${result.id}`}>
                  <a>
                    <Image
                      src={`${
                        process.env.NEXT_PUBLIC_STRAPI_ASSETS +
                        result.attributes.image.data.attributes.formats.large
                          .url
                      }`}
                      alt="blog-post"
                      priority={true}
                      className="rounded-full"
                      width={300}
                      height={300}
                    />
                    <h2>{result.attributes.title}</h2>
                    <div>
                      <p>{result.attributes.descriptions}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}


export const getStaticProps = async () => {
  const resulting = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=image`
  );
  const result = await resulting.json()

  const images = result.data.map(e =>
    e.attributes.image.data.attributes.formats.thumbnail.url
  );
  return {
    props: {
      images,
      result: result.data,
    },
  };
};
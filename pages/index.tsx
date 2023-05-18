import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import Image from 'next/image'

const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-20">
        <div className="flex">
          <div className="w-2/3 space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="font-sans text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hey, I'm Jasmine!
            </h1>
            <p className="pt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              I'm currently a second-year computer science student at the University of Michigan.
              Feel free to check out my projects or simply explore!
              <br />
              <br />
              Thanks for dropping by. 💗
            </p>
          </div>
          <div className="w-1/3">
            <div className="flex w-full justify-center ">
              <Image
                className="rounded-lg"
                src="/../public/static/images/pinkie.jpg"
                width={200}
                height={200}
                alt="pinkie"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

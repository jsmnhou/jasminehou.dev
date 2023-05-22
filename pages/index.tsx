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
import { TypedHeading } from '@/components/TypedHeading'
import TopTrackSpotify from 'components/TopTrackSpotify'
import Pengu from 'public/static/images/pengu_island.png'
import Footer from '@/components/Footer'

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

      <div className="grid grid-flow-row auto-rows-max">
        <div className="pb-18 mb-20 mt-20">
          <div className="flex">
            <div className="w-1/2 space-y-2 pb-6 pt-6 md:space-y-5">
              <TypedHeading />
              <p className="prose pt-4 text-lg leading-relaxed dark:prose-dark">
                I'm currently a second-year computer science student at the University of Michigan.
                <br />
                <br />
                Thanks for dropping by! ♡
                <br />
              </p>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center ">
                <Image className="rounded-lg" src={Pengu} width={400} height={600} alt="pengu" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

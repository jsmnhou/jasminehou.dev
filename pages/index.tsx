import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { TypedHeading } from '@/components/TypedHeading'
import Pengu from 'public/static/images/pengu_island.png'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

        <div className="pb-18 xl:mt-20">
          <div className="xl:flex">
            <div className="xl:w-1/2 xl:space-y-2 pb-6 pt-6 md:space-y-5">
              <TypedHeading />
              <p className="prose pt-4 pb-8 text-lg leading-relaxed dark:prose-dark">
                I'm currently a second-year computer science student at the University of Michigan.
                <br />
                <br />
                Thanks for dropping by! ♡
              </p>
            </div>
            <div className="xl:w-1/2 pb-10">
              <div className="flex justify-center ">
                <Image className="rounded-lg" src={Pengu} width={400} height={600} alt="pengu" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

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

      <div className="container">
        {/* typed heading + image */}
        <div className="pb-18 mt-20">
          <div className="flex">
            <div className="w-1/2 space-y-2 pb-6 pt-6 md:space-y-5">
              <TypedHeading />
              <p className="prose pt-4 text-lg leading-relaxed dark:prose-dark">
                I'm currently a second-year computer science student at the University of Michigan.
                <br />
                <br />
                Thanks for dropping by! ♡
              </p>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center ">
                <Image className="rounded-lg" src={Pengu} width={400} height={600} alt="pengu" />
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="fixed bottom-0 w-max">
          <Footer />
        </div>
      </div>
    </>
  )
}

import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'

export default function About() {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 xl:sticky xl:top-0 xl:items-start">
          <Image
            src="/../public/static/images/pinkie.jpg"
            width={192}
            height={192}
            alt="pinkie"
            className="rounded-full xl:rounded-lg"
          />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Jasmine Hou</h3>
          <div className="text-gray-500 dark:text-gray-400">Jasmine Hou</div>
          <div className="flex space-x-3 pt-6">SOCIAL ICONS</div>
        </div>
        <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          STRUCTURED TEXT
          <br />
          <div className="mt-20">
            STRUCTURED TEXT
            <br />
          </div>
        </div>
      </div>
      <div>
        LMAO LMAOLMAO
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}

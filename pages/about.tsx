import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'

export default function About() {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-10 pt-6 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pb-12 pt-2 xl:sticky xl:top-2 xl:items-start">
          <Image
            src="/../public/static/images/pinkie.jpg"
            width={192}
            height={192}
            alt="pinkie"
            className="rounded-full xl:rounded-lg"
          />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Jasmine Hou</h3>
          <div className="text-gray-500 dark:text-gray-400">University of Michigan</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          </div>
        </div>
        <div className="prose pb-8 pt-2 text-lg leading-relaxed text-gray-500 dark:text-gray-400 xl:col-span-2">
          Hey, I'm Jasmine! I grew up in the Bay Area and I'm currently in my second year as a
          computer science student at the University of Michigan.{' '}
          <span className="text-blue-500">(Go Blue!)</span>
          <br />
          <br />
          Hobbies include:
          <br />
          - Playing video games
          <br />
          - Skiing / Snowboarding 
          <br />
          - Watching anime or YouTube video essays

          <br />
          <br />
          Got any project ideas or anime recommendations, shoot me an email; I would love to chat!
          <br />
        </div>
      </div>
      <div className="prose max-w-none pb-8 pt-2 dark:prose-dark xl:col-span-3">
        <h1>Favorites</h1>
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

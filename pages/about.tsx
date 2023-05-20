import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
// import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'
import TopTrackSpotify from 'components/TopTrackSpotify'

export default function About() {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* Sticky Sidebar */}
        <div className="flex flex-col items-center pb-12 pt-2 xl:sticky xl:top-4 xl:items-start">
          <div>
            <Image
              src="/../public/static/images/me-akira.JPG"
              width={200}
              height={250}
              alt="pinkie"
              className="rounded-full xl:rounded-lg"
            />
          </div>
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Jasmine Hou</h3>
          <div className="text-gray-500 dark:text-gray-400">University of Michigan</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          </div>
        </div>

        {/* About Me Text */}
        <div className="prose pb-8 pt-2 text-lg leading-relaxed dark:prose-dark xl:col-span-2">
          <TopTrackSpotify />
          Hey, I'm Jasmine! I grew up in the Bay Area and I'm currently in my second year as a
          computer science student at the University of Michigan.{' '}
          <span className="font-semibold text-blue-500">(Go Blue!)</span>
          <br />
          <br />
          When not studying, you'll probably find me:
          <ul className="list-disc">
            <li>Playing League or Smash</li>
            {/* link to krool */}
            <li>Planning my next snowboarding trip</li>
            <li>Watching anime or YouTube video essays</li>
          </ul>
          <br />
          Got any project ideas or anime recommendations, shoot me an email; I would love to chat!
          <br />
          <br />
          <h2>Some Favorites:</h2>
          Hershey (pet me)
          <br />
          <br />
          MAL (top shows)
          <br />
          <br />
          Spotify (top tracks)
          <br />
          <br />
          Krool Gifs
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          More text
        </div>
      </div>
      {/* <div className="prose max-w-none pb-8 pt-2 dark:prose-dark xl:col-span-3">
        <h1>Favorites</h1>
        LMAO LMAOLMAO
        <br />
        <br />
      </div> */}
    </>
  )
}

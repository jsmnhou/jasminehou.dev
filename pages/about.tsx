import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'
import TopTrackSpotify from 'components/TopTrackSpotify'
import animeTop from '@/data/animeTop'
import Jasmine from 'public/static/images/akira.jpg'
import KRool from 'public/static/gifs/krool2.gif'
import Dog from 'public/static/gifs/dog2.gif'
import Sun from 'public/static/gifs/sun3.gif'

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
            <Image src={Jasmine} width={200} height={250} alt="pinkie" className="rounded-lg" />
          </div>
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Jasmine Hou</h3>
          <div className="text-gray-500 dark:text-gray-400">University of Michigan</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="vsco" href={siteMetadata.vsco} />
          </div>
        </div>

        {/* About Me Text */}
        <div className="pb-8 pt-2 text-lg leading-relaxed text-gray-900 dark:text-gray-300 xl:col-span-2">
          Hi, I'm Jasmine! I grew up in the Bay Area and I'm currently in my third year as a
          computer science student at the University of Michigan.{' '}
          <span className="text-blue-500">(Go Blue!)</span>
          <br />
          <br />
          <p className="pb-2">When I'm not studying, you'll probably find me:</p>
          <div className="prose text-gray-900 dark:text-gray-300">
            <ul className="list-disc text-lg">
              <li className="my-0">
                Tilting from video games
                <Image
                  src={KRool}
                  alt="loading..."
                  width="70"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
              <li className="my-0">
                Bullying my dog (&lt;3)
                <Image
                  src={Dog}
                  alt="loading..."
                  width="55"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
              <li className="my-0">
                Replenishing my vitamin D deficiency
                <Image
                  src={Sun}
                  alt="loading..."
                  width="60"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
            </ul>
          </div>
          <br />
          <div className="mb-4 mt-10 text-2xl font-bold">Some Favorites:</div>
          <a
            className="no-underline"
            href="https://myanimelist.net/profile/ppozzu"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-xl font-normal text-gray-900 hover:font-bold hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
              Top Anime
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-1 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <div className="grid grid-cols-6 gap-x-1">
            {animeTop.map((d, i) => (
              <div key={i} className="relative aspect-[25/36]">
                <a href={d.url} title={d.title} target="_blank" rel="noreferrer" className="">
                  <Image className="my-0 object-cover" src={d.thumbnail} alt={d.title} fill />
                </a>
              </div>
            ))}
          </div>
          <a
            className="no-underline"
            href="https://open.spotify.com/user/ke17fmzadn03r8cr328qxoguo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-2 mt-10 text-xl font-normal text-gray-900 hover:font-bold hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
              Top Songs (of the Month)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-1 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <div className="mb-6 ">
            <p className="my-0">Click below for a preview 🎧</p>
          </div>
          <TopTrackSpotify />
          {/* Hershey (pet me)
          <br />
          <br />
          Krool Gifs */}
        </div>
      </div>
    </>
  )
}

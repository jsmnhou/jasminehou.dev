import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from './NowPlaying'

export default function Footer() {
  return (
    // <footer>
    //   <div className="mt-16 flex flex-col items-center">
    //     <div className="mb-3 flex space-x-4">
    //       <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
    //       <SocialIcon kind="github" href={siteMetadata.github} size={6} />
    //       <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
    //       <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
    //       <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
    //       <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
    //     </div>
    //     <div className="prose mb-6 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
    //       {/* <div>{siteMetadata.author}</div>
    //       <div>{` • `}</div>
    //       <div>{`© ${new Date().getFullYear()}`}</div>
    //       <div>{` • `}</div>
    //       <Link href="/">{siteMetadata.title}</Link> */}
    //       Made with ♡ by Jasmine Hou
    //     </div>
    //   </div>
    // </footer>
    <footer className="mt-10 ">
      <NowPlaying />
      <div className="border-t-muted flex flex-col-reverse justify-between gap-3 border-t-[1px] py-3 text-sm md:flex-row">
        Made with ♡ by Jasmine Hou
      </div>
    </footer>
  )
}

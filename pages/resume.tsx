import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
// import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description={`Resume - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>Resume</PageTitle>
      </div>

      {/* Resume Text */}
      <div className="prose pb-8 pt-2 text-lg leading-relaxed dark:prose-dark">
        For a quick summary, please reference my{' '}
        <a
          href="https://docs.google.com/gview?url=https://github.com/jsmnhou/jsmnhou/raw/main/resume.pdf&embedded=true"
          className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
          target="_blank"
        >
          resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: '1.5rem', height: '1rem', fill: 'currentColor' }}
          >
            <g data-name="Layer 2">
              <g data-name="external-link">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
              </g>
            </g>
          </svg>
        </a>
        <h2>Education</h2>
        University of Michigan, B.S. Computer Science, expected Spring 2025
        <ul className="list-disc space-y-1">
          <li>
            <span className="font-bold">Coursework: </span> Programming and Data Structures, Data
            Structures and Algorithms, Discrete Math, Linear Algebra
          </li>
        </ul>
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
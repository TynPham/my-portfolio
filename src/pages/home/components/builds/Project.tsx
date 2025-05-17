import { Link } from 'react-router-dom'
import { Project as ProjectType } from 'src/types/common.type'
import { cn } from 'src/utils/utils'
import parse from 'html-react-parser'

export interface ProjectProps {
  reverse?: boolean
  project: ProjectType
}

export default function Project({ reverse, project }: ProjectProps) {
  return (
    <div className='grid grid-cols-12 grid-rows-1 items-center max-h-[450px]'>
      <div
        className={cn('relative z-[1] grid-in-[1_/_1_/_1_/_-1] h-full lg:h-auto', {
          'lg:grid-in-[1_/_1_/_1_/_8]': !reverse,
          'lg:grid-in-[1_/_6_/_1_/_-1]': reverse
        })}
      >
        <Link
          to={project.link.url}
          target='_blank'
          className='relative bg-main_green before:absolute before:inset-0 before:bg-main_green hover:before:bg-transparent before:transition-all before:opacity-50 mix-blend-screen'
        >
          <div className='mix-blend-luminosity h-full lg:h-auto'>
            <img className='h-full lg:h-auto object-cover' src={project.link.img} alt='project' />
          </div>
        </Link>
      </div>
      <div
        className={cn(
          'relative z-[2] h-full flex flex-col justify-center p-4 sm:p-8 lg:p-0 gap-5 grid-in-[1_/_1_/_1_/_-1] bg-light_navy lg:bg-transparent shadow-navy_shadow lg:shadow-none opacity-90 lg:opacity-100',
          {
            'lg:grid-in-[1_/_7_/_1_/_-1] lg:text-right': !reverse,
            'lg:grid-in-[1_/_1_/_1_/_7] lg:text-left': reverse
          }
        )}
      >
        <article
          className={cn('flex flex-col gap-1', {
            'lg:pl-24': !reverse,
            'lg:pr-24': reverse
          })}
        >
          <h4 className='text-sm text-main_green'>Project</h4>
          <h2 className='text-xl text-lightest_slate'>{project.name}</h2>
        </article>
        <div className='lg:p-6 text-light_slate lg:bg-light_navy text-sm lg:shadow-navy_shadow'>
          <p>{parse(project.description)}</p>
        </div>
        <ul
          className={cn('text-sm flex flex-wrap gap-[0.25rem_1rem]', {
            'lg:justify-end lg:pl-24': !reverse,
            'lg:justify-start lg:pr-24': reverse
          })}
        >
          {project.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
        <div
          className={cn('flex gap-4 lg:justify-end', {
            'lg:justify-end lg:pl-24': !reverse,
            'lg:justify-start lg:pr-24': reverse
          })}
        >
          {project.socialLinks.map((socialLink, index) => {
            const Icon = socialLink.icon
            return (
              <Link to={socialLink.url} target='_blank' key={index}>
                <Icon className='w-6 h-6' />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

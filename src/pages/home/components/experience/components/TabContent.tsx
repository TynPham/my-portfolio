import { memo } from 'react'
import parse from 'html-react-parser'
import { cn } from 'src/utils/utils'
import { WorkExperience } from 'src/types/common.type'

interface TabContentProps {
  experience: WorkExperience
  index: number
  isActive: boolean
}

const TabContent = memo(function TabContent({ experience, index, isActive }: TabContentProps) {
  return (
    <div
      id={`vertical-tab-with-border-${index + 1}`}
      role='tabpanel'
      aria-labelledby={`vertical-tab-with-border-item-${index + 1}`}
      className={cn('mt-1', { hidden: !isActive })}
    >
      <div className='flex flex-col gap-8'>
        <article className='flex flex-col gap-2'>
          <h3 className='text-lightest_slate font-medium text-lg'>
            {experience.position.name}{' '}
            {experience.position.company && <span className='text-main_green'>{experience.position.company}</span>}
          </h3>
          <span className='text-sm'>{experience.position.time}</span>
        </article>
        <ul className="list-['▸'] marker:text-main_green ml-3 flex flex-col gap-6 text-sm max-w-[600px]">
          {experience.content.map((content, idx) => (
            <li className='pl-4' key={idx}>
              {parse(content)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

export default TabContent

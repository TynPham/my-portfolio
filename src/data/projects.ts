import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { playstation_clone, post_pilot, spotify, weather_app } from 'src/assets/images'
import { Project } from 'src/types/common.type'

const projects: Project[] = [
  {
    link: {
      url: 'https://tynpham.com/',
      img: post_pilot
    },
    description: `
   This is a website that supports automatic posting scheduling on social networking platforms such as Facebook, Instagram, X, Threads, etc. At the same time, it provides AI to automatically write content according to the user's wishes.
    <span className='inline-block text-main_green textDecorationEffect'> Authentication</span>,
    <span className='inline-block text-main_green textDecorationEffect'> Authorization</span>,
    <span className='inline-block text-main_green textDecorationEffect'> Posting Scheduling</span>,
    <span className='inline-block text-main_green textDecorationEffect'> Content Generation</span>,
    <span className='inline-block text-main_green textDecorationEffect'> Auto Notification Chat Telegram</span>,
    ...
    `,
    name: 'Post Pilot',
    technologies: [
      'Next.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'Tailwindcss',
      'ShadcnUI',
      'Tanstack Query',
      'Zustand'
    ],
    socialLinks: [
      {
        title: 'Github',
        icon: FiGithub,
        url: 'https://github.com/TynPham/postpilot-front_end'
      },
      {
        title: 'Github',
        icon: FiGithub,
        url: 'https://github.com/TynPham/postpilot-back_end'
      },
      {
        title: 'External Link',
        icon: FiExternalLink,
        url: 'https://tynpham.com/'
      }
    ]
  },
  {
    link: {
      url: 'https://eclectic-kheer-07b7f4.netlify.app/',
      img: weather_app
    },
    description: `
    This is a weather forecast website specializing in providing information about the weather such as temperature, humidity, wind strength, etc.
    <span className='inline-block text-main_green textDecorationEffect'> Register</span>,
    <span className='inline-block text-main_green textDecorationEffect'> login</span>,
    <span className='inline-block text-main_green textDecorationEffect'> weather forecast current location</span>,
    <span className='inline-block text-main_green textDecorationEffect'> search location</span>
    ...
    `,
    name: 'Weather Forecast',
    technologies: ['Reactjs', 'Tailwindcss', 'React-router-dom', 'Redux', 'React-hook-form', 'Yup', 'React-chartjs-2'],
    socialLinks: [
      {
        title: 'Github',
        icon: FiGithub,
        url: 'https://github.com/TynPham/weather_app_web'
      },
      {
        title: 'External Link',
        icon: FiExternalLink,
        url: 'https://eclectic-kheer-07b7f4.netlify.app/'
      }
    ]
  },
  {
    link: {
      url: 'https://wonderful-lebkuchen-4a98a7.netlify.app/',
      img: spotify
    },
    description: `
    This is a music site built on top of spotify.com.
    <span className='inline-block text-main_green textDecorationEffect'> Play music</span>,
    <span className='inline-block text-main_green textDecorationEffect'> auto play music</span>,
    <span className='inline-block text-main_green textDecorationEffect'> repeat song</span>,
    <span className='inline-block text-main_green textDecorationEffect'> random song</span>
    ...
    `,
    name: 'Spotify',
    technologies: ['Reactjs', 'Tailwindcss', 'React-router-dom', 'React-h5-audio-player'],
    socialLinks: [
      {
        title: 'Github',
        icon: FiGithub,
        url: 'https://github.com/TynPham/react_spotify'
      },
      {
        title: 'External Link',
        icon: FiExternalLink,
        url: 'https://wonderful-lebkuchen-4a98a7.netlify.app/'
      }
    ]
  },

  {
    link: {
      url: 'https://lucky-dusk-a768f5.netlify.app/',
      img: playstation_clone
    },
    description: `
    This is a website clone website playstation.com
    `,
    name: 'Playstation Clone',
    technologies: ['Reactjs', 'Tailwindcss', 'React-router-dom', 'React-icons', 'Ant Design', 'Swiper'],
    socialLinks: [
      {
        title: 'Github',
        icon: FiGithub,
        url: 'https://github.com/TynPham/playstation-reactjs'
      },
      {
        title: 'External Link',
        icon: FiExternalLink,
        url: 'https://lucky-dusk-a768f5.netlify.app/'
      }
    ]
  }
]

export default projects

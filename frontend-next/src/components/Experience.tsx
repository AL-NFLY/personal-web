'use client'
import { ZCOOL_KuaiLe } from "next/font/google";
import React from "react";
import { IoCloud, IoCloudDone, IoLogoOctocat, IoSchool } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const experiencesData = [
  {
    title: 'Cloud Engineer Intern',
    location: 'PT. Sigma Cipta Caraka (Telkomsigma)',
    descOne:
      'Learnt the fundamentals of Virtualization & Cloud Computing, such as SDS, SDN, & SDDC.', 
    descTwo:
      'Implemented learnt knowledge into VMWare and AlibabaCloud.',
    descThree:
      'Presented & pitch the prototype to supervisor.',
    icon: <IoCloud />,
    date: 'July 2022 - October 2022',
  },
  {
    title: 'Head of Internal Affairs',
    location: 'HIMATEKKOM ITS',
    descOne:
      'Managed and led internalization all 8 recurring events for Computer Engineering Students.',
    descTwo:
      'Directed 9 staff and appointed them responsibility based on their interests and skills.',
    descThree:
      'Evaluated performances of each staff and events based on Key Performance Indicator (KPI) target.',
    icon: <IoSchool />,
    date: 'April 2022 - April 2023',
  },
  {
    title: 'Cloud Computing Cohort',
    location: 'Bangkit Academy by Google, GoTo, & Traveloka',
    descOne:
      'Had a hands-on-experience working on Cloud Computing using GCP, Fullstack Development using React-Express.js, & work-related soft skills.',
    descTwo:
      'Achieved Associate Cloud Engineer (ACE) certificate from Google.',
    descThree: 
      'Selected as a company-based project by Traveloka, out of hundreds of applicants, and won as Best Team.',
    icon: <IoCloud />,
    date: 'February 2022 - July 2022',
  },
  {
    title: 'Expert Staff of Sponsorship',
    location: 'Multimedia & Game Event 7 (MAGE 7)',
    descOne:
    'Secured an exclusive Rp15.000.000 deal with Telkom Indonesia as a sponsorship partner.',
    descTwo:
    'Came up with MAGE 7 slogan.',
    descThree:
    'Collaborate with other expert staff to create happy hour for all divisions',
    icon: <IoLogoOctocat />,
    date: 'June 2021 - November 2021', 
  },
] as const;

const Experience = () => {
  return (
    <section id="experience" className="pt-16 md:pt-24" >
      <h2>
        <span  className=" text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experiences</span>
      </h2>

      <p className="mt-2">These are some of my experience while I was pursuing my bachelor&apos; degree</p>
      <VerticalTimeline
        lineColor="#d4d4d8"
        className="!mt-6 md:!mt-12"
      >
        {
          experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement 
              contentStyle={{
                background: '#27272a',
                boxShadow: '0 3px #7dd3fc',
              }}
              contentArrowStyle={{borderRight: '7px solid white'}}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                color: '#27272a'
              }}
              >
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.title}</span>
              <p className="text-zinc-400 !mt-0 !text-sm">{item.location}</p>
              <ul className="list-disc iniside list-inside mt-3 space-y-1 text-sm text-zinc-300">
                <li>{item.descOne}</li>
                <li>{item.descTwo}</li>
                <li>{item.descThree}</li>
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience
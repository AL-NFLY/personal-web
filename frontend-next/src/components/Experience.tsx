'use client'
import { ZCOOL_KuaiLe } from "next/font/google";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const experiencesData = [
  {
    title: 'Cloud Engineer Intern',
    location: 'Tangerang Selatan, Banten, Indonesia',
    descOne:
      'Learnt the fundamentals & origin of Cloud Computing-Virtualization, such as SDS, SDN, & SDDC.', 
    descTwo:
      'Implemented learnt knowledge into VMWare and AlibabaCloud.',
    descThree:
      'Presented & pitch the prototype to supervisor.',
    icon: <></>,
    date: 'July 2022 -- October 2022',
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
    icon: <></>,
    date: '',
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
    icon: <></>,
    date: '',
  },
  {
    title: 'Expert Staff of Sponsorship',
    location: 'Multimedia & Game Event 7 (MAGE 7)',
    descOne:
      'Came up with MAGE 7 slogan.',
    descTwo:
      'Secured an exclusive Rp15.000.000 deal with Telkom Indonesia as a sponsorship partner.',
    descThree:
      'Collaborate with other expert staff to create happy hour for all divisions',
    icon: <></>,
    date: '', 
  },
] as const;

const Experience = () => {
  return (
    <section>
      <h2>
        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experiences</span>
      </h2>
        {/* <VerticalTimeline>
          {
            experiencesData.map((experience, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement></VerticalTimelineElement>
              </React.Fragment>
            ))
          }
        </VerticalTimeline> */}
      <VerticalTimeline>
        {
          experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement className="text-zinc-600">
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p>{item.location}</p>
              <ul className="list-disc iniside list-inside">
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
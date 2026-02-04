import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import  CTA  from "../components/CTA";
import { experiences, skills, socialLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-graSdient_text font-semibold drop-shadow'>
          {" "}
            Efren 
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
            Software Engineer based in Mexico, currently specializing in <strong>Fullstack Development</strong> at Banregio.
            I bridge the gap between robust backend microservices and interactive frontend experiences,
            with a focus on system optimization and innovative data solutions.
        </p>
      </div>

        <div className='mt-4 flex gap-5 items-center'>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-transform hover:-translate-y-1'
                >
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow'>
                        <img
                            src={link.iconUrl}
                            alt={link.name}
                            className='w-6 h-6 object-contain'
                        />
                    </div>
                </a>
            ))}
        </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
              From optimizing warehouse logistics at Pepsico to building financial microservices and fraud models at Banregio,
              my journey has been driven by one goal: building efficient, scalable software.
              Here is how I’ve been contributing to the tech world:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
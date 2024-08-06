import React from "react";

export default function About() {
  return (
    <section className="h-[100dvh] relative w-full bg-[#070b0d] flex items-center justify-center px-28">
      <div className="absolute left-16 font-anton top-10 text-[200px] text-[#1b1e24]">
        ABOUT
      </div>
      <div className="text-white z-[2]">
        <div className="text-[90px] leading-[1] uppercase font-anton">
          About us
        </div>
        <div className="text-[40px] leading-[1] uppercase font-anton">
          Who we are
        </div>
        <div className="font-roboto mt-20 flex flex-col gap-4">
          <span>
            This event aims to cultivate innovation and collaboration among
            participants by providing a platform for tackling real-world
            challenges through coding and creative problem-solving. With a focus
            on fostering a supportive environment for learning and networking,
            the Hackathon will empower participants to develop prototypes and
            explore cutting-edge technologies.
          </span>
          <span>
            By leveraging the expertise of industry mentors and fostering
            cross-disciplinary collaboration, our proposal aims to create a
            stimulating environment where participants can unleash their
            creativity and make meaningful contributions to the tech community.
          </span>

          <span>
            We welcome undergraduate students from across India to participate
            and showcase their creativity. In the first round, participants are
            required to submit their ideas using a provided PowerPoint template,
            clearly and concisely articulating their concepts. Shortlisted teams
            advance to the offline round, where they further develop their ideas
            into tangible projects.
          </span>
          <span>
            This intense round takes place on-site at M-block, adding an element
            of excitement and real-time collaboration. Submissions for the
            offline round take place on Sunday morning, adding a sense of
            urgency and focus to the event. The top three teams from each track
            are selected based on the merit of their projects and presentations.
          </span>
          <span>
            These top teams then present their ideas and projects in front of a
            panel of esteemed judges. The top team from each track showcases
            their project to a general audience. After careful deliberation, the
            judges select the top three teams overall, awarding them the coveted
            1st, 2nd, and 3rd prizes. The top two outsider teams from each track
            pitch to the audience, with the audience votes determining the
            winner.
          </span>
        </div>
      </div>
    </section>
  );
}
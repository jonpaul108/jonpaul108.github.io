const content = {
  intro: {
    title: "Military Career Admissions Automation and A/B Testing",
    description:
      "At Hack Reactor, I initiated the automation of the Military Career team's admissions process, a project born from the need to enhance operational efficiency. My role involved innovating our digital assessment tool, securing stakeholder approval, and orchestrating the integration of multiple admission pathways.",
    image: "../../assets/demoTAAMCSP.png",
  },
  body: [
    {
      description: `The Military Career program had a non-scalable admissions process. Current plans involved cannibalizing members from other teams plus hiring additional staff.<br/><br/> Because I have a track record of successfully optimizing admissions and pre-enrollment services, I was asked to take on the problem. In the project charter, <span class="white-highlight">I proposed to build out automation that would 1) address their specific requirements 2) scale to meet needs with current staffing.</span>`,
      image: "../../assets/militaryVisionBoard.png",
      imageDesc: `I proposed scalable solutions to meet bandwidth issues without sacrificing quality.<br/><small>Proprietary information and dates changed.</small>`,
    },
    {
      description: `I started by reviewing their process to deeply understand their blockers. The points that couldn't be scaled were the manual scheduling process and communications, data handling and reporting, and 1 hour live interviews plus review.<br/><br/>To free up time, <span class="white-highlight">I introduced a new process using a scheduling app with the use of an API to automate scheduling and scheduling communications, automate weekly and cycle reports from a central database, and add their team to our assessment platform.</span>
      `,
      image: "../../assets/mcspAutomationProcedureDiagram.png",
      imageDesc: `The new process flows from scheduling to assessment to result and data reporting.<br/><small>Diagram edited to redact proprietary info.</small>`,
    },
    {
      description: `The next step was app integration. As maintainer of the code base, <span class="white-highlight">I innovated solutions allowing our app platform to handle multiple admission pathways and reporting.</span> I made it easy to add new pathways and change assessment types, foreseeing future additions to our assessment application.`,
      image: "../../assets/mcspMultiplePathways.png",
      imageDesc: `I innovated solutions allowing our app platform to handle multiple admission pathways.`,
    },
    {
      description: `Having documented all processes and procedures, I trained the operations and technical admissions staff.<br/><br>
    After training, <span class="white-highlight">I lead the team through alpha and beta testing of the app.</span> I measured the results against predetermined metrics for student success and operations efficiency. One important measurement was student success rates. I had documented increasing student fail or pass rates as a potential risk. <br/><br/>At the end of Alpha and Beta, I reported the results to our executive team. The results showed that we were in the range of fail and success rates and that the majority of students preferred the new processes.
`,
      image: "../../assets/mcspPassRates.png",
      imageDesc: `A/B testing showed we met our measurements for quality, including maintaining the pass rate of applicants.`,
    },
    {
      description: `Finally, I transferred all knowledge and handed the process over to operations.<br/><br/>
      The project was a resounding success. <span class="white-highlight">I delivered expected savings of $150,000 in new staffing costs</span> and saved hundreds of hours monthly of current staffing time, giving time back to other projects and needs.`,
      image: "../../assets/mcspSavingMoney.png",
      imageDesc: `I delivered expected monetary savings of over 150K in staffing costs and hundreds of hours of current staff time.`,
    },
  ],
  conclusion: {
    header: "Summary",
    description: `This project challenged me to forecast results based on careful analysis of current processes. <span class="white-highlight">I used my skills in presentation, data analysis, communication, and process implementation to deliver results.</span><br/><br/>In the end, we delivered a world-class experience to our military customers while saving time and hundreds of thousands of dollars.`,
    imageDesc: "",
  },
};

export default content;

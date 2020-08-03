/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Dushyant Pathak",
	logo_name: "DKP",
	nickname: "DKP",
	subTitle:
		"A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://bit.ly/dkp-resume-1",
	portfolio_repository: "https://github.com/dkp1903",
};

const socialMediaLinks = [
	
  
	{
		name: "Github",
		link: "https://github.com/dkp1903",
		className: "github",
		fontAwesomeIcon: "fa-github", //For more details check out the FontAwesome icons list
	  },
	  {
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/dkp1903",
		className: "linkedin",
		fontAwesomeIcon: "fa-linkedin-in", //For more details check out the FontAwesome icons list
	  },
	  {
		name: "Gmail",
		link: "mailto:dushyantpathak6789@gmail.com",
		className: "google",
		fontAwesomeIcon: "fa-google", //For more details check out the FontAwesome icons list
	  },
	  {
		name: "Twitter",
		link: "https://twitter.com/dkp1903",
		className: "twitter",
		fontAwesomeIcon: "fa-twitter", //For more details check out the FontAwesome icons list
	  },
	  {
		name: "Facebook",
		link: "https://www.facebook.com/dkp1903/",
		className: "facebook",
		fontAwesomeIcon: "fa-facebook-f", //For more details check out the FontAwesome icons list
	  },
	  {
		name: "Instagram",
		link: "https://www.instagram.com/dkp1903/",
		className: "instagram",
		fontAwesomeIcon: "fa-instagram", //For more details check out the FontAwesome icons list
	  },
  ];

const skills = {
  data: [
	{
		title: "Full Stack Development",
		fileName: "FullStackImg",
		skills: [
		  "⚡ Full Stack Web Development in JavaScript, React, Angular, Electron, Gatsby, Node, Express",
		  "⚡ Developing mobile applications in React Native and Android(Java/Kotlin)",
		  
		],
		softwareSkills: [
		  {
			skillName: "HTML5",
			fontAwesomeClassname: "simple-icons:html5",
			style: {
			  color: "#E34F26"
			}
		  },
		  {
			skillName: "CSS3",
			fontAwesomeClassname: "fa-css3",
			style: {
			  color: "#1572B6"
			}
		  },
		  {
			skillName: "Sass",
			fontAwesomeClassname: "simple-icons:sass",
			style: {
			  color: "#CC6699"
			}
		  },
		  {
			skillName: "JavaScript",
			fontAwesomeClassname: "simple-icons:javascript",
			style: {
			  backgroundColor: "#000000",
			  color: "#F7DF1E"
			}
		  },
		  {
			skillName: "ReactJS",
			fontAwesomeClassname: "simple-icons:react",
			style: {
			  color: "#61DAFB"
			}
		  },
		  {
			skillName: "NodeJS",
			fontAwesomeClassname: "simple-icons:node-dot-js",
			style: {
			  color: "#339933"
			}
		  },
		  {
			skillName: "NPM",
			fontAwesomeClassname: "simple-icons:npm",
			style: {
			  color: "#CB3837"
			}
		  },
		  {
			skillName: "Yarn",
			fontAwesomeClassname: "simple-icons:yarn",
			style: {
			  color: "#2C8EBB"
			}
		  },
		  {
			skillName: "Gatsby",
			fontAwesomeClassname: "simple-icons:gatsby",
			style: {
			  color: "#663399"
			}
		  },
		  
		]
	  },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Natural Language Processing projects",
        
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB"
          }
        }
      ]
    },
    
    {
      title: "DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",

      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4"
          }
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900"
          }
        },
        
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791"
          }
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248"
          }
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
          }
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5"
          }
        }
      ]
    },
  ]
};

// Education Page
const competitiveSites = {
  competitiveSites: [
	{
		siteName: "Leetcode",
		iconifyClassname: "simple-icons:leetcode",
		style: {
		  color: "#20BEFF"
		},
		profileLink: "https://www.leetcode.com/dkp1903"
	},
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/dkp1903"
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638"
      },
      profileLink: "https://www.codechef.com/users/dkp1903"
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB"
      },
      profileLink: "http://codeforces.com/profile/dkp1903"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@dkp1903"
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF"
      },
      profileLink: "https://www.kaggle.com/dkp1903"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "DA-IICT, Gandhinagar",
      subtitle: "B.Tech, Information and Communication Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "DA-IICT",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics."
      ],
      website_link: "http://daiict.ac.in"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "Problem Solving",
			subtitle: "- HackerRank",
			logo_path: "logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"Developing Full Stack Web and Android, Writing technical content is my forte",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Tech Analyst",
					company: "Deutsche Bank",
					company_url: "https://db.com/",
					logo_path: "legato_logo.png",
					duration: "May 2020 - June 2020",
					location: "Hyderabad, Telangana",
					description:
						"Development of a MEAN Stack Stock Trading Dashboard",
					color: "#0879bf",
				},
				
				
			],
		},
		
		{
			title: "Volunteerships",
			experiences: [
				
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "Jan 2020 - Present",
					location: "Gandhinagar, Gujarat",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
					color: "#D83B01",
				},
				
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "dkp_speak_photo.jpeg",
		description:
			"Project, guidance or content, hit me up",
	},
	blogSection: {
		title: "Blog",
		subtitle:
			"I blog professionally on Data Structures and Algorithms, Tech and Markets, in a fun-dosed way.",
		link: "https://dkprobes.tech",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle:
			"Surat, Gujarat - 395007",
		avatar_image_path: "address_image.svg",
		location_map_link: "#",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 9023515030",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
const config = {
  header: {
    about: {
      liens: ["/about", "A propos"]
    },
    experiences: {
      liens: ["/experiences", "Experiences"]
    },
    labs: {
      liens: ["/labs", "Labs"]
    },
    contact: {
      liens: ["/contact", "Contact"]
    }
  },
  icons: {
    twitter: {
      liens: ["https://twitter.com/rimbault_gabin", <i className="fa-brands fa-square-twitter"></i>]
    },
    linkedin: {
      liens: ["https://www.linkedin.com/in/gabin-rimbault/", <i className="fa-brands fa-linkedin"></i>]
    },
    github: {
      liens: ["https://github.com/GabinRimbault", <i className="fa-brands fa-square-github"></i>]
    },
    mail: {
      liens: ["mailto:gabin.rimbault@icloud.com?subject='Hello ! from Website'", <i className="fa-solid fa-envelope"></i>]
    }
  },
  skills: [
    <i className="fa-brands fa-html5"></i>,
    <i className="fa-brands fa-css3-alt"></i>,
    <i className="fa-brands fa-js"></i>,
    <i className="fa-brands fa-react"></i>,
    <i className="fa-brands fa-node-js"></i>,
    <i className="fa-brands fa-python"></i>
  ]
}

export default config;
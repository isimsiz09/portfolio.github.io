var skills= [
    {
        name : "Html",
        val : "95"
    },
    {
        name : "Css",
        val : "90"
    },
    {
        name : "Javascript",
        val : "85"
    },
    {
        name : "jQuery",
        val : "85"
    },
    {
        name : "Wordpress",
        val : "80"
    },
    {
        name : "Bootstrap",
        val : "90"
    },
    {
        name : "React Js",
        val : "45"
    },
    {
        name : "Angular / Vue",
        val : "25"
    },
    {
        name : "Photoshop",
        val : "90"
    },
    {
        name : "Illustrator",
        val : "80"
    }
]

var portfolios = [
    {
        id:1,
        name: 'Delta Credit Restoration',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Wordpress, Php, Bootstrap, Html etc',
        urlshow: 'deltacreditrestoration.com',
        url: 'http://deltacreditrestoration.com/',
        desc: 'We help consumer and businesses establish and build good credit. We are the only credit repair company that uses underwriting guidelines as the benchmark for the credit restoration process. We focus on the content of the report as well as the behaviors that lead to good credit like banking, budgeting, credit strategy, and educating consumers of their rights.',
        img1: 'assets/imgs/portfolio/delta.jpg',
        img2: 'assets/imgs/portfolio/delta1.jpg'
    },
    {
        id:2,
        name: 'Global Empowerment',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Laravel, Bootstrap, Html etc',
        urlshow: 'globalempowermentedu.com',
        url: 'https://globalempowermentedu.com/',
        desc: 'We offer professionals & entrepreneurs a premium level of global support on an LMS like no other. Our user-friendly and technologically advanced software not only supports all-size companies but can turn any of your professional skills into an online course.',
        img1: 'assets/imgs/portfolio/globalempowerment.jpg',
        img2: 'assets/imgs/portfolio/globalempowerment1.jpg'
    },
    {
        id:3,
        name: 'Expert Digitizing',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Wordpress, Php, Bootstrap, Html etc',
        urlshow: 'expertdigitizing.com',
        url: 'https://www.expertdigitizing.com/',
        desc: 'Expert Digitizing is corporate that gives their clients not only embroidery digitizing, but also extremely creative ideas. apart from this, we also provide best support and staff augmentation services.',
        img1: 'assets/imgs/portfolio/expertdigitizing.jpg',
        img2: 'assets/imgs/portfolio/expertdigitizing1.jpg'
    },
    {
        id:4,
        name: 'Cascade Valley',
        type: 'Web App',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: 'cascadevalleyafh.org',
        url: 'https://cascadevalleyafh.org/',
        desc: 'Cascade Valley is a family-owned and operated home for the elderly imbibing family values of care, love, and respect. Operating in Grant, Adams, and Lincoln County, we offer you and your loved ones extensive long-term care, 24-hours, seven days a week.',
        img1: 'assets/imgs/portfolio/cascade.jpg'
    },
    {
        id:5,
        name: '3 Gen Farm',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: '3-genfarm.org',
        url: 'https://3-genfarm.org/',
        desc: 'Here at 3-Gen farm we strive to meet the needs of our equestrian, canine and bovine clients. whether its working cattle, show ring or just pleasure, hikers, bikers, dock drivers or frisbee. We strive to meet your needs.',
        img1: 'assets/imgs/portfolio/genfarm.jpg'
    },
    {
        id:6,
        name: 'Kingdom GPS Roadmap',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Wordpress, Php, Bootstrap, html etc',
        urlshow: 'kingdomgpsroadmap.com',
        url: 'https://kingdomgpsroadmap.com/',
        desc: 'This website is providing online courses and student can register on this website for learning.',
        img1: 'assets/imgs/portfolio/kingdom.jpg',
        img2: 'assets/imgs/portfolio/kingdom1.jpg'
    },
    {
        id:7,
        name: 'Koi kompanion',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: 'koikompanion.com',
        url: 'https://koikompanion.com/',
        desc: "Design, installation, and maintenance of hassle free, affordable ponds, waterfalls, and water features. Weather your an expert in the industry or just getting started, we are the professional's you want to talk to.",
        img1: 'assets/imgs/portfolio/koikompanion.jpg',
        img2: 'assets/imgs/portfolio/koikompanion1.jpg'
    },
    {
        id:8,
        name: 'Nursing Management System',
        type: 'Web App',
        filter: 'filter-app',
        languages: 'Bootstrap, Html etc',
        urlshow: 'nms-app.com',
        url: 'https://demo.pnclogos.com/nms-app/public/',
        desc: "This was just the template created on pure bootstrap having some advance javascript that can handle all pages and validations on field.",
        img1: 'assets/imgs/portfolio/nms.jpg',
        img2: 'assets/imgs/portfolio/nms1.jpg'
    },
    {
        id:9,
        name: 'Pnc Logos',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Wordpress, Php, Bootstrap, html etc',
        urlshow: 'pnclogos.com',
        url: 'https://www.pnclogos.com/',
        desc: 'Pnclogos.com is a venture of Pac and Copy and specifically offers customized and consumer centric brand identity solutions. Backed by the some of the most talented individuals in the industry.',
        img1: 'assets/imgs/portfolio/pnclogos.jpg',
        img2: 'assets/imgs/portfolio/pnclogos1.jpg'
    },
    {
        id:10,
        name: 'Qtis',
        type: 'Web App',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: 'qtis-temp.com',
        url: 'https://demo.pnclogos.com/qtis/public/',
        desc: "This is the web application that manage all staff working in a single platform.",
        img1: 'assets/imgs/portfolio/qtis.jpg'
    },
    {
        id:11,
        name: 'Proservants',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: 'proservants.com',
        url: 'https://proservants.com/',
        desc: "Proservants is a online shopping website that is based in USA, it has all functionality that any e-commerce website should have.",
        img1: 'assets/imgs/portfolio/proservants.jpg',
        img2: 'assets/imgs/portfolio/proservants1.jpg'
    },
    {
        id:12,
        name: 'Sak Timber',
        type: 'Website',
        filter: 'filter-app',
        languages: 'Laravel, Php, Bootstrap, Html etc',
        urlshow: 'saktimber.com',
        url: 'https://www.saktimber.com/',
        desc: "Saleh Mohammad A. Karim (SAK Group) is a family owned company and involved in timber business since 1955. We are the largest and leading timber traders and importers in Pakistan from various sources throughout the globe of various types of Round Logs...",
        img1: 'assets/imgs/portfolio/saktimber.jpg',
        img2: 'assets/imgs/portfolio/saktimber1.jpg'
    }

]
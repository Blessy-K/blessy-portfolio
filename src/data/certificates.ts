import awsImage from "../assets/images/certificates/aws.png";
import itnImage from "../assets/images/certificates/introductiontonetworks.png";
import srweImage from "../assets/images/certificates/srwe.png";
import ensaImage from "../assets/images/certificates/ensa.png";
import modernAIImage from "../assets/images/certificates/introtomodernai.png";
import aimlImage from "../assets/images/certificates/aiml-virtual-internship.png";
import juniperImage from "../assets/images/certificates/juniper-certificate.png";
import uipathImage from "../assets/images/certificates/uipath-certificate.png";

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  year: string;
  overview: string;

  skills: string[];
  image: string;

  credential: string;
  certificateUrl: string;
};

export const certificates: Certificate[] = [
  {
    slug: "aws-cloud-foundations",

    title: "AWS Academy Cloud Foundations",

    issuer: "AWS Academy",

    year: "2024",

    overview:
      "Completed foundational cloud computing training covering AWS core services, cloud architecture, security, networking and storage.",

    skills: [
      "AWS",
      "EC2",
      "IAM",
      "S3",
      "Cloud Computing",
    ],

    image: awsImage,

    credential: "/Resume/certificates/aws-cloud-foundations.pdf",

    certificateUrl:
      "https://www.credly.com/badges/120a4284-a211-48d9-9d32-4312dc8ba7b2/public_url",
  },

  {
    slug: "ccna-introduction-to-networks",

    title: "CCNA: Introduction to Networks",

    issuer: "Cisco Networking Academy",

    year: "2025",

    overview:
      "Completed networking fundamentals training covering network architecture, IP addressing, routing concepts, protocols and network security basics.",

    skills: [
      "Computer Networks",
      "TCP/IP",
      "Routing",
      "Switching",
      "Network Security",
    ],

    image: itnImage,

    credential: "/Resume/certificates/ccna-introduction-to-networks.pdf",

    certificateUrl:
      "https://www.credly.com/badges/5e021426-f266-407b-96d1-fad8dd178c44/public_url",
  },

  {
    slug: "aiml-virtual-internship",

    title: "AI/ML Virtual Internship",

    issuer: "AICTE",

    year: "2025",

    overview:
      "Completed an AI and Machine Learning virtual internship focused on machine learning concepts, model development and practical AI applications.",

    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Model Development",
    ],

    image: aimlImage,

    credential: "",

    certificateUrl: "",
  },

  {
    slug: "juniper-certificate",

    title: "Juniper Networks Certification",

    issuer: "Juniper Networks",

    year: "2025",

    overview:
      "Completed networking certification training covering networking fundamentals, routing concepts and network technologies.",

    skills: [
      "Networking",
      "Routing",
      "Switching",
      "Network Fundamentals",
    ],

    image: juniperImage,

    credential: "",

    certificateUrl: "",
  },

  {
    slug: "uipath-rpa-developer",

    title: "UiPath RPA Developer Certification",

    issuer: "UiPath",

    year: "2025",

    overview:
      "Completed robotic process automation training focused on designing automation workflows, process automation and building UiPath solutions.",

    skills: [
      "UiPath",
      "RPA",
      "Workflow Automation",
      "Process Automation",
    ],

    image: uipathImage,

    credential: "",

    certificateUrl: "",
  },

  {
    slug: "ccna-switching-routing-wireless-essentials",

    title: "CCNA: Switching, Routing and Wireless Essentials",

    issuer: "Cisco Networking Academy",

    year: "2025",

    overview:
      "Completed networking training focused on switching concepts, VLANs, routing fundamentals, wireless networking and network configuration.",

    skills: [
      "Switching",
      "Routing",
      "VLAN",
      "Wireless Networking",
      "Network Configuration",
    ],

    image: srweImage,

    credential:
      "/Resume/certificates/ccna-switching-routing-wireless-essentials.pdf",

    certificateUrl: "",
  },

  {
    slug: "ccna-enterprise-networking-security-automation",

    title: "CCNA: Enterprise Networking, Security and Automation",

    issuer: "Cisco Networking Academy",

    year: "2025",

    overview:
      "Completed advanced networking training covering enterprise networks, security concepts, automation and network management.",

    skills: [
      "Enterprise Networking",
      "Network Security",
      "Automation",
      "Cisco Technologies",
      "Infrastructure Management",
    ],

    image: ensaImage,

    credential:
      "/Resume/certificates/ccna-enterprise-networking-security-automation.pdf",

    certificateUrl: "",
  },

  {
    slug: "introduction-to-modern-ai",

    title: "Introduction to Modern AI",

    issuer: "Cisco Networking Academy",

    year: "2025",

    overview:
      "Completed AI fundamentals training covering modern artificial intelligence concepts, machine learning applications and AI technologies.",

    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "AI Applications",
    ],

    image: modernAIImage,

    credential:
      "/Resume/certificates/introduction-to-modern-ai.pdf",

    certificateUrl: "",
  },
];
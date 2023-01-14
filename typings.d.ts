interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "Image";
  assets: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "PageInfo";
  address: string;
  BackgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  ProfilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: string;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: string;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  summary: string;
  technology: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: string;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

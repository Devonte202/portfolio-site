export type HeroType = {
  _id: string,
  heading: string,
  subheading: string,
  backgroundImage: {
    alt: string,
    image: string
  },
  href: string,
  ctaText: string,
  bio: string,
};

export type ProjectType = {
  _id: string,
  title: string,
  description: string,
  thumbnail: {
    alt: string,
    image: string
  },
  repoLink: string,
  projectLink: string,
  techList: string[],
};

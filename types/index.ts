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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'repoLink',
      type: 'string',
      title: 'Github Repo Link'
    },
    {
      name: 'projectLink',
      type: 'string',
      title: 'Deployed Application Link'
    },
    {
      name: 'techList',
      type: 'array',
      of: [
        {
          type: 'string', // type is required
          title: 'Technology'
        },
      ],
      title: 'Technologies Used'
    },
  ]
}

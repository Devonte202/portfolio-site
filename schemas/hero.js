// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'hero',
  type: 'document',
	title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading'
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio'
    },
    {
      name: 'ctaText',
      type: 'string',
      title: 'CTA text'
    },
    {
      name: 'href',
      title: 'CTA href',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      }
    },
  ]
}

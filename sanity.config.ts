import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-website',

  projectId: 'zopn61zy',
  dataset: 'production',
  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

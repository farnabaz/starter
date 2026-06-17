import { comarkCMS } from '@comark/cms'
import fs from '@comark/cms/sources/fs'
import nuxtContentConfig from './content.config'

export default comarkCMS({
  sources: {
    content: fs('./content', { schema: nuxtContentConfig.collections.content })
  }
})

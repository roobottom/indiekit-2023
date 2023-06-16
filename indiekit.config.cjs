const roobottomPostTemplate = require("./roobottom-post-template.js")

module.exports = {
  application: {
    
  },
  plugins: [
    '@indiekit/store-github'
  ],
  publication: {
    me: 'https://roobottom.com',
    categories: 'https://roobottom.com/subjects.json',
    locale: 'en-GB',
    postTemplate: roobottomPostTemplate,
    postTypes: [{
      type: 'article',
      name: 'Long diary entry',
      post: {
        path: 'source/diary/{yyyy}-{MM}-{dd}-{slug}.md',
        url: 'diary/{yyyy}-{MM}-{dd}-{slug}'
      },
      media: {
        path: 'source/assets/images/diary/{yyyy}/{yyyy}-{MM}-{dd}-{filename}',
        url: 'assets/images/diary/{yyyy}/{yyyy}-{MM}-{dd}-{filename}'
      }
    }, {
      type: 'note',
      name: 'Short diary entry',
      post: {
        path: 'source/diary/{yyyy}-{MM}-{dd}-{slug}.md',
        url: 'diary/{yyyy}-{MM}-{dd}-{slug}'
      }
    }, {
      type: 'photo',
      name: 'Short diary entry with photos',
      post: {
        path: 'source/diary/{yyyy}-{MM}-{dd}-{slug}.md',
        url: 'diary/{yyyy}-{MM}-{dd}-{slug}'
      },
      media: {
        path: 'source/assets/images/diary/{yyyy}/{yyyy}-{MM}-{dd}-{filename}',
        url: 'assets/images/diary/{yyyy}/{yyyy}-{MM}-{dd}-{filename}'
      }
    }]
  },
  '@indiekit/store-github': {
    user: 'roobottom',
    repo: 'roobottom-2022'
  }
}
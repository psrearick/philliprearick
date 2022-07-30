// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Money with Phil',
  siteUrl: 'https://www.philliprearick.com',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      }
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/posts/**/*.md',
        typeName: 'Post',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
  ],
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: 'src/templates/Post.vue'
      }
    ],
    Category: [
      {
        path: '/category/:title',
        component: 'src/templates/Category.vue'
      }
    ],
  },
  transformers: {
    remark: {
      //Config options can be added here
    }
  },
}

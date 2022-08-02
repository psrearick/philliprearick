// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss');

module.exports = {
    siteName: 'Money with Phil',
    siteDescription: 'Personal finance for the ordinary person',
    siteUrl: 'https://www.philliprearick.com',
    // metadata: {
    //   twitter: {
    //     site: '@simon_mannes',
    //     creator: '@simon_mannes'
    //   }
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [tailwindcss]
            }
        }
    },
    plugins: [
        // {
        //   use: '@gridsome/source-filesystem',
        //   options: {
        //     path: './src/posts/**/*.md',
        //     typeName: 'Post',
        //     remark: {
        //       //Config options can be added here
        //     }
        //   }
        // },
        {
            use: 'gridsome-plugin-gtag',
            options: {
                config: {
                    id: 'G-55LD6YK92E'
                }
            }
        },
        {
            use: '@gridsome/vue-remark',
            options: {
                typeName: 'Post', // Required
                baseDir: './src/posts', // Where .md files are located
                pathPrefix: '/blog', // Add route prefix. Optional
                template: './src/templates/Post.vue', // Optional
                refs: {
                    categories: {
                        typeName: 'Category',
                        create: true
                    }
                }
            }
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                presetEnvConfig: {},
                shouldImport: false,
                shouldTimeTravel: false
            }
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                exclude: ['/privacy', '/legal']
            }
        }
    ],
    templates: {
        // Post: [
        //   {
        //     path: '/blog/:title',
        //     component: 'src/templates/Post.vue'
        //   }
        // ],
        Category: [
            {
                path: '/category/:title',
                component: 'src/templates/Category.vue'
            }
        ]
    },
    transformers: {
        remark: {
            //Config options can be added here
        }
    }
};

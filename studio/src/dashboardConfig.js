export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdfdec85687bd4608ef3b8f',
                  title: 'Sanity Studio',
                  name: 'recipes-studio-yit7wmmt',
                  apiId: '7c2f1d51-8aee-4db6-a63f-e343f70f9611'
                },
                {
                  buildHookId: '5fdfdec8f8185534b19e75e0',
                  title: 'Blog Website',
                  name: 'recipes-web-r3p8prg3',
                  apiId: 'e4793112-2ae1-4b1f-8617-448ca949001d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taylorcjohnson/recipes',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://recipes-web-r3p8prg3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

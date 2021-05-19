const routes = [
    {
        path: '/',
        changefreq: 'daily', 
        priority: 1       
    },
    {
        path: '/contact',
    },
    {
        path: '/post/:slug',
        changefreq: 'weekly',
          priority: 0.8,
    }
]

export default routes;

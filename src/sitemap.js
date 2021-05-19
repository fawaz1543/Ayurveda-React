import { sitemapBuilder as buildSitemap, paramsApplier as applyParams } from 'react-router-sitemap'; // import applyParams for paths pattern
import routes from '../routes';
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object

// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'http://localhost:3000';

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

// Retrieve the post titles array ['post-title-1', 'post-title-2', ...]
const posts = getPostsForSitemap();

// Replace :slug with post titles
const config = {
	'/post/:slug': [
    	{ slug: posts },
    ],
};
	
// Merge our route paths with config pattern    
const paths = applyParams(routes, config);

// Generate sitemap and return Sitemap instance
// paste new paths constant with hostname
const sitemap = buildSitemap(hostname, paths);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString())

#!/bin/bash

echo "generating sitemap.xml..."

data='<?xml version="1.0" encoding="UTF-8"?>
<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc>https://ai-code-review.web.app/</loc>
        <lastmod>'$(date --iso-8601=seconds)'</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://ai-code-review.web.app/signup</loc>
        <lastmod>'$(date --iso-8601=seconds)'</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>

</urlset>'


echo $data > public/sitemap.xml
# ARC Website: Tailwind + NextJS

## First Timer Guide

- Create a [Github](https://github.com/) account
- Install [git](https://git-scm.com/downloads) command line on your Device
- Connect it with [SSH](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Windows-Example)

From here you have 2 methods:

1. Docker Method(Simple Method)
   - Install [Docker](https://www.docker.com/products/docker-desktop/)
   - Go into the cloned folder
   - Run `docker build -t arcnextapp .`
   - And then run `docker run -it -p 3000:3000 arcnextapp`
2. Manual Installation Method
   - Install [NodeJS](https://nodejs.org/en/), preferably LTS and using [Node Version Manager](https://github.com/nvm-sh/nvm)
   - Use this link for NVM is using [windows](https://github.com/coreybutler/nvm-windows/releases)
   - Open Terminal
   - Clone this repo using `git clone URL`
   - You get the URL when you click on Code above
   - Use cd and other commands to move into the directory where you have cloned the repo
   - Run `npm install `
   - Run `npm start` or `npm run dev` and ppen [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Instructions for Maintaining the Website

Here are some Instructions for the future developers:

**NOTE: mdx and md files go into the data folder**

#### Add Resources

1. To add resources
   - Here `resources` denotes the category of resource, eg. LevelUp or say Processing
   - Add the md/mdx files in the `resources/resource_name` folder
   - Then add the images to `public/static/assets/images/resourcenameResources`
   - Please follow this process and don't add images anywhere else
2. NOTE: Ensure you add TOCInline component for the resources so that you get a table of contents
   `<TOCInline toc={props.toc} toHeading={3} asDisclosure />`
3. Also ensure the md/mdx files under resources do have `orderInSidebar` parameter

#### Add Projects

1. All the project posts go in the `data/projects` folder

---

## Making Posts

### Frontmatter

NOTE: Go through [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for help regarding what markdown is and how it is used
Currently the following fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl (optional, canonical url for the post for SEO)
cover (image that shows up as thumbnail)
```

Here's an example of a post's frontmatter:

```
---
title: Gesture Controlled Bot
tags: [l298n, HC-05, MATLAB, Image Processing]
date: 2015-07-04
mode: normal
type: article
sharing: true
author: Suyash Yeotikar
show_author_profile: true
show_title: true
full_width: false
header: true
cover: /static/assets/images/blog/thumbnails/Gesture Controlled Bot.png
---
```

### Adding Images

For specific size

```
<Image src="/static/assets/images/blog/Robotic-Arm/2.png" alt="Resistor" width="500" height="500" />
```

Otherwise

```
![Image](Image Address)
```

### Adding youtube videos

```
<EmbedItem url="https://www.youtube.com/embed/OffjpoCmOaU" />
```

### Adding Image Sliders

```
<ImageSwiper
  imageArray={[
    '/static/images/levelup/level-1/jumper1.png',
    '/static/images/levelup/level-1/jumper2.png',
  ]}
/>
```

---

## Working on Issues

1. Work in **branches** to avoid clash with the main branch
   Basically create a new branch with your_name/feature you were working on so that it doesn't clash with the deployment version
2. Whenever you want to work on an issue, do `git checkout -b branch_name` and make changes here
3. Then use `git push` to push the code on the **new branch**
4. Solve Issues

## Creating new pages

Inorder to create a new route

- Create a new base page in the `pages`
- If it's supposed to work with slugs, just replicate an existing folder such as `projects`
- Then make a Layout for the same in the `layouts` directory
- Then figure it out :)

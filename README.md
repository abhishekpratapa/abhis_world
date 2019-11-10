# Abhi's World

Hi my name is Abhishek and this is my personal blog. I got frustrated with
worldpress so I decided to come up with my own implementation. This website
serves to be an extension of myself, and who I am.

## What is this website written in?

This website is written in the popular web framework `create-react-app`
provided by Facebook. It was the easiest way to create UI and store articles.


## How does it work?

Articles are defined to be abstract classes and the template for one is located 
in:

[ArticleTemplate.js](https://github.com/abhishekpratapa/abhis_world/blob/master/src/Articles/ArticleTemplate.js)

This class contains `title`, `date`, `type` and `content`.

A registry located in:

[registry.js](https://github.com/abhishekpratapa/abhis_world/blob/master/src/registry.js)

This registry, contains the mappings of articles so that the rendering component
can properly get the content it needs to render the blog.

## What is a type?

A type is of:

- `CREATIVE`
- `TECH`
- `LEARNING`
- `EXISTENTIAL`
- `PERSONAL`

Each article has one of these types.

## Why is your code so spaghetti?

Shipping was the most important factor, unless I have a good enough reason to
refactor then it's not worth it.

I think it's not worth it to put in the time right now to refactor. For me the
end user-facing system works so that's enough. I may refactor if the blog gets 
some traction/I keep up with it.

I'd love to get ya'lls thoughts on it!
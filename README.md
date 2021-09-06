# Frontend Mentor - FAQ accordion card

![Design preview for the FAQ accordion card coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [FrontendMentor](https://your-solution-url.com)
- Live Site URL: [GitHub](https://streetlightkids.github.io/faq-accordion-card-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [jQuery](https://code.jquery.com/) - jQuery library

### What I learned

My JS skills are not the strongest yet so I was really excited to work on this challenge. As I was writing the JS (which I commented out in the script.js file) I was simultaneously learning about jQuery in school. I got super pumped on the power of jQuery and wanted to implement the lesson I had just learned into this challenge. At first I couldn't figure out how to make everything work correctly but after some tinkering I found the right methods (?) to use and it works great with significantly less lines of code!

This is some of the new jQuery code that I learned:

```html
<dd class="faq-list-a" id="faq-a3">
  Yes! Send us a message and we’ll process your request no questions asked.
</dd>
```

```css
.showA {
  font-size: 13px;
  margin: 0;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: var(--mobile-list-margin);
}
```

```js
$("#faq-q0").click(function () {
  $("#faq-a0").toggle();
  $("#faq-a0").toggleClass("showA");
});
```

### Continued development

I'm looking forward to becoming more accustomed with jQuery and furthering my JS practice as well. This is kind of a turning point for my coding capabilities and it's really exciting.

### Useful resources

- [Example resource 1](https://api.jquery.com/toggleclass/) - This helped me handle the adding and removing of class specific styling when the button/answer is toggled.

## Author

- Website - [Nikki Klein](https://www.kleinlikecalvin.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/streetlightkids)
- Twitter - [@yourusername](https://www.twitter.com/anotherklein)

## Acknowledgments

As always, a huge thanks to my mentor Nate Walston, I'm getting better every week thanks to you.

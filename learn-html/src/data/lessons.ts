import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'html-basics',
    title: 'HTML is like Writing a Letter',
    description: 'Learn what HTML is in the simplest way possible',
    icon: '✉️',
    duration: 5,
    difficulty: 'beginner',
    completed: false,
    modules: [
      {
        id: 'what-is-html',
        title: 'What is HTML?',
        type: 'explanation',
        content: `Think of HTML like writing a letter. Just like a letter has:\n\n📬 An envelope (the HTML document)\n📝 A greeting (the header)\n📄 The message (the body)\n✍️ A signature (the footer)\n\nHTML helps you create the structure of a webpage, just like organizing a letter!`,
      },
      {
        id: 'first-html',
        title: 'Your First HTML',
        type: 'demo',
        content:
          'Let\'s write your first HTML! It\'s as easy as writing "Hello" on a piece of paper.',
        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage!</p>
  </body>
</html>`,
      },
      {
        id: 'practice-basics',
        title: 'Try It Yourself',
        type: 'practice',
        content: 'Change the greeting to your name!',
        code: `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, [Your Name]!</h1>
  </body>
</html>`,
        hints: [
          'Change the text between <h1> and </h1>',
          'Replace "World" with your name',
        ],
      },
    ],
  },
  {
    id: 'headlines-text',
    title: 'Headlines & Text (Like a Newspaper)',
    description: 'Learn how to create headings and paragraphs',
    icon: '📰',
    duration: 7,
    difficulty: 'beginner',
    completed: false,
    modules: [
      {
        id: 'understanding-headings',
        title: 'Headings are like Newspaper Headlines',
        type: 'explanation',
        content: `Imagine a newspaper:\n\n📰 Big headline (h1) - The main story\n📄 Section title (h2) - Sports, Weather\n📝 Smaller titles (h3-h6) - Individual articles\n\nHTML has 6 heading sizes, from h1 (biggest) to h6 (smallest)!`,
      },
      {
        id: 'heading-demo',
        title: 'See Headings in Action',
        type: 'demo',
        content: 'Watch how different heading sizes look:',
        code: `<h1>Breaking News! (Biggest)</h1>
<h2>Sports Section</h2>
<h3>Today's Match</h3>
<h4>Team Updates</h4>
<h5>Player Stats</h5>
<h6>Additional Info (Smallest)</h6>

<p>This is a regular paragraph of text.</p>`,
      },
    ],
  },
  {
    id: 'adding-pictures',
    title: 'Adding Pictures (Photo Album)',
    description: 'Learn how to add images to your webpage',
    icon: '🖼️',
    duration: 6,
    difficulty: 'beginner',
    completed: false,
    modules: [
      {
        id: 'understanding-images',
        title: 'Images are like Photos in an Album',
        type: 'explanation',
        content: `Adding images is like putting photos in an album:\n\n📷 You need the photo (image file)\n🏷️ You can add a caption (alt text)\n📐 You can choose the size\n\nThe <img> tag is like the photo frame!`,
      },
      {
        id: 'image-demo',
        title: 'Adding Your First Image',
        type: 'demo',
        content: "Here's how to add an image:",
        code: `<h1>My Photo Album</h1>
<img src="https://via.placeholder.com/300x200" alt="A beautiful sunset">
<p>This is a photo I took last summer!</p>`,
      },
    ],
  },
  {
    id: 'making-lists',
    title: 'Making Lists (Shopping List)',
    description: 'Create ordered and unordered lists',
    icon: '📝',
    duration: 5,
    difficulty: 'beginner',
    completed: false,
    modules: [
      {
        id: 'understanding-lists',
        title: 'Lists are Everywhere!',
        type: 'explanation',
        content: `HTML lists are like real-world lists:\n\n🔢 Numbered lists (Steps in a recipe)\n• Bullet lists (Shopping items)\n\nUse <ol> for numbered, <ul> for bullets!`,
      },
      {
        id: 'list-demo',
        title: 'Creating Lists',
        type: 'demo',
        content: "Let's make both types of lists:",
        code: `<h2>My Shopping List</h2>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Milk</li>
</ul>

<h2>How to Make a Sandwich</h2>
<ol>
  <li>Get two slices of bread</li>
  <li>Add your favorite filling</li>
  <li>Put the slices together</li>
  <li>Enjoy!</li>
</ol>`,
      },
    ],
  },
  {
    id: 'creating-links',
    title: 'Creating Links (Doorways)',
    description: 'Learn how to connect pages with links',
    icon: '🔗',
    duration: 6,
    difficulty: 'beginner',
    completed: false,
    modules: [
      {
        id: 'understanding-links',
        title: 'Links are like Doorways',
        type: 'explanation',
        content: `Links connect pages like doorways connect rooms:\n\n🚪 Click to go somewhere else\n🏠 Can lead to other pages\n🌍 Can lead to other websites\n\nThe <a> tag creates these doorways!`,
      },
      {
        id: 'link-demo',
        title: 'Creating Your First Link',
        type: 'demo',
        content: "Here's how links work:",
        code: `<h1>My Favorite Websites</h1>
<p>Click below to visit:</p>
<a href="https://www.google.com">Visit Google</a>
<br>
<a href="https://www.youtube.com">Watch Videos on YouTube</a>`,
      },
    ],
  },
];

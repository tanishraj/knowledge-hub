export const htmlTags = [
  {
    name: 'html',
    displayName: 'HTML Root',
    description: 'The root of your webpage',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <div className='text-center'>
        <div className='border-2 border-dashed border-purple-500 p-4 rounded'>
          <span className='text-purple-400 font-mono text-sm'>
            &lt;html&gt;
          </span>
          <div className='mt-2 text-gray-400 text-xs'>Root element</div>
        </div>
      </div>
    ),
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page</title>
  </head>
  <body>
    Content here
  </body>
</html>`,
  },
  {
    name: 'head',
    displayName: 'Head Section',
    description: 'Metadata and resources',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <div className='text-center'>
        <div className='bg-gray-800 p-3 rounded'>
          <div className='text-blue-400 font-mono text-sm mb-1'>
            &lt;head&gt;
          </div>
          <div className='text-gray-500 text-xs space-y-1'>
            <div>• Title</div>
            <div>• Meta tags</div>
            <div>• Styles</div>
          </div>
        </div>
      </div>
    ),
    code: `<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <link rel="stylesheet" 
        href="styles.css">
</head>`,
  },
  {
    name: 'body',
    displayName: 'Body Section',
    description: 'Visible page content',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <div className='border-2 border-green-500 border-dashed p-4 rounded'>
        <span className='text-green-400 font-bold'>&lt;body&gt;</span>
        <p className='text-gray-400 text-xs mt-2'>
          All visible content goes here
        </p>
      </div>
    ),
    code: `<body>
  <h1>Welcome!</h1>
  <p>This is the body</p>
  <!-- All visible 
       content here -->
</body>`,
  },
  {
    name: 'title',
    displayName: 'Page Title',
    description: 'Browser tab title',
    category: 'Metadata',
    difficulty: 'basic' as const,
    preview: (
      <div className='text-center'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-t-lg'>
          <div className='bg-white/10 backdrop-blur-sm rounded px-3 py-1'>
            <span className='text-white text-sm'>🌐 My Website</span>
          </div>
        </div>
        <div className='text-gray-500 text-xs mt-2'>Browser tab</div>
      </div>
    ),
    code: `<head>
  <title>My Awesome Website</title>
</head>

<!-- Shows in browser tab -->`,
  },
  {
    name: 'meta',
    displayName: 'Meta Information',
    description: 'Page metadata',
    category: 'Metadata',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='space-y-2 text-left'>
        <div className='bg-gray-800 p-2 rounded'>
          <span className='text-purple-400 font-mono text-xs'>
            charset="UTF-8"
          </span>
        </div>
        <div className='bg-gray-800 p-2 rounded'>
          <span className='text-purple-400 font-mono text-xs'>viewport</span>
        </div>
        <div className='bg-gray-800 p-2 rounded'>
          <span className='text-purple-400 font-mono text-xs'>description</span>
        </div>
      </div>
    ),
    code: `<meta charset="UTF-8">
<meta name="viewport" 
      content="width=device-width">
<meta name="description" 
      content="My site">`,
  },
  {
    name: 'link',
    displayName: 'External Resources',
    description: 'Link CSS and icons',
    category: 'Resources',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='space-y-2'>
        <div className='flex items-center gap-2 text-cyan-400'>
          <span className='text-2xl'>🎨</span>
          <span className='text-sm'>Stylesheet</span>
        </div>
        <div className='flex items-center gap-2 text-yellow-400'>
          <span className='text-2xl'>⭐</span>
          <span className='text-sm'>Favicon</span>
        </div>
      </div>
    ),
    code: `<link rel="stylesheet" 
      href="styles.css">
<link rel="icon" 
      href="favicon.ico">`,
  },
  {
    name: 'script',
    displayName: 'JavaScript',
    description: 'Add interactivity',
    category: 'Resources',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded'>
        <div className='text-white font-mono text-sm'>
          <div>{'<script>'}</div>
          <div className='pl-2'>alert('Hi!');</div>
          <div>{'</script>'}</div>
        </div>
      </div>
    ),
    code: `<script>
  // JavaScript code
  console.log('Hello!');
</script>

<script src="app.js"></script>`,
  },
  {
    name: 'style',
    displayName: 'Internal Styles',
    description: 'CSS in HTML',
    category: 'Resources',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded'>
        <div className='text-white font-mono text-xs'>
          <div>{'<style>'}</div>
          <div className='pl-2'>.text {'{'}</div>
          <div className='pl-4'>color: blue;</div>
          <div className='pl-2'>{'}'}</div>
          <div>{'</style>'}</div>
        </div>
      </div>
    ),
    code: `<style>
  body {
    background: #f0f0f0;
  }
  h1 {
    color: blue;
  }
</style>`,
  },
  {
    name: 'h1',
    displayName: 'Heading 1',
    description: 'The largest heading - your main title',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-white'>Main Title</h1>
      </div>
    ),
    code: `<h1>Main Title</h1>

<!-- The biggest heading! -->
<!-- Use for page titles -->`,
  },
  {
    name: 'p',
    displayName: 'Paragraph',
    description: 'Regular text content',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <div>
        <p className='text-gray-300'>
          This is a paragraph of text. It contains regular content that you want
          to display on your webpage.
        </p>
      </div>
    ),
    code: `<p>
  This is a paragraph of text.
  It contains regular content.
</p>`,
  },
  {
    name: 'button',
    displayName: 'Button',
    description: 'Clickable button element',
    category: 'Interactive',
    difficulty: 'basic' as const,
    preview: (
      <div className='flex gap-2 justify-center'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
          Click Me!
        </button>
        <button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>
          Submit
        </button>
      </div>
    ),
    code: `<button>Click Me!</button>
<button type="submit">Submit</button>

<!-- Triggers actions! -->`,
  },
  {
    name: 'img',
    displayName: 'Image',
    description: 'Display images on your page',
    category: 'Media',
    difficulty: 'basic' as const,
    preview: (
      <div className='flex justify-center'>
        <div className='w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center'>
          <span className='text-white text-4xl'>🖼️</span>
        </div>
      </div>
    ),
    code: `<img 
  src="photo.jpg" 
  alt="Description"
  width="200"
  height="150"
/>`,
  },
  {
    name: 'a',
    displayName: 'Link',
    description: 'Creates hyperlinks to other pages',
    category: 'Navigation',
    difficulty: 'basic' as const,
    preview: (
      <div className='text-center space-y-2'>
        <a href='#section' className='text-blue-400 hover:underline block'>
          Visit our website
        </a>
        <a href='#learn' className='text-purple-400 hover:underline block'>
          Learn more →
        </a>
      </div>
    ),
    code: `<a href="https://example.com">
  Visit our website
</a>

<!-- Links to other pages! -->`,
  },
  {
    name: 'ul',
    displayName: 'Unordered List',
    description: 'Bullet point lists',
    category: 'Lists',
    difficulty: 'basic' as const,
    preview: (
      <div className='w-full'>
        <ul className='text-gray-300 list-disc list-inside space-y-1 text-left block'>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    ),
    code: `<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>`,
  },
  {
    name: 'ol',
    displayName: 'Ordered List',
    description: 'Numbered list items',
    category: 'Lists',
    difficulty: 'basic' as const,
    preview: (
      <div className='w-full'>
        <ol className='text-gray-300 list-decimal list-inside space-y-1 text-left block'>
          <li>First step</li>
          <li>Second step</li>
          <li>Third step</li>
        </ol>
      </div>
    ),
    code: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
  },
  {
    name: 'table',
    displayName: 'Table',
    description: 'Organize data in rows and columns',
    category: 'Data',
    difficulty: 'intermediate' as const,
    preview: (
      <table className='w-full text-sm text-gray-300'>
        <thead>
          <tr className='border-b border-gray-600'>
            <th className='text-left p-1'>Name</th>
            <th className='text-left p-1'>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-1'>John</td>
            <td className='p-1'>25</td>
          </tr>
          <tr>
            <td className='p-1'>Jane</td>
            <td className='p-1'>30</td>
          </tr>
        </tbody>
      </table>
    ),
    code: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`,
  },
  {
    name: 'form',
    displayName: 'Form',
    description: 'Collect user input',
    category: 'Forms',
    difficulty: 'intermediate' as const,
    preview: (
      <form className='space-y-2'>
        <input
          type='text'
          placeholder='Your name'
          className='w-full px-3 py-1 bg-gray-700 rounded text-white text-sm'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-full px-3 py-1 bg-gray-700 rounded text-white text-sm'
        />
        <button className='px-4 py-1 bg-purple-500 text-white rounded text-sm'>
          Submit
        </button>
      </form>
    ),
    code: `<form action="/submit">
  <input type="text" 
         name="name" 
         placeholder="Your name">
  <input type="email" 
         name="email">
  <button type="submit">
    Submit
  </button>
</form>`,
  },
  {
    name: 'div',
    displayName: 'Division',
    description: 'Container for grouping elements',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <div className='border-2 border-dashed border-gray-600 p-4 rounded'>
        <div className='bg-blue-500/20 p-2 rounded mb-2'>
          <span className='text-blue-400 text-sm'>Section 1</span>
        </div>
        <div className='bg-purple-500/20 p-2 rounded'>
          <span className='text-purple-400 text-sm'>Section 2</span>
        </div>
      </div>
    ),
    code: `<div class="container">
  <div class="section">
    Section 1
  </div>
  <div class="section">
    Section 2
  </div>
</div>`,
  },
  {
    name: 'video',
    displayName: 'Video',
    description: 'Embed video content',
    category: 'Media',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='flex justify-center'>
        <div className='w-full h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center'>
          <span className='text-white text-3xl'>▶️</span>
        </div>
      </div>
    ),
    code: `<video controls width="320">
  <source src="movie.mp4" 
          type="video/mp4">
  Your browser doesn't 
  support video.
</video>`,
  },
  {
    name: 'canvas',
    displayName: 'Canvas',
    description: 'Draw graphics with JavaScript',
    category: 'Graphics',
    difficulty: 'advanced' as const,
    preview: (
      <div className='flex justify-center'>
        <div className='w-32 h-32 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse'>
          <span className='text-white text-2xl'>🎨</span>
        </div>
      </div>
    ),
    code: `<canvas id="myCanvas" 
        width="400" 
        height="300">
</canvas>

<script>
  // Draw with JavaScript!
  const ctx = canvas.
    getContext('2d');
</script>`,
  },
  {
    name: 'audio',
    displayName: 'Audio',
    description: 'Play sound and music',
    category: 'Media',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='flex justify-center'>
        <div className='px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center gap-2'>
          <span className='text-white'>🎵</span>
          <span className='text-white text-sm'>Play Audio</span>
        </div>
      </div>
    ),
    code: `<audio controls>
  <source src="song.mp3" 
          type="audio/mpeg">
  <source src="song.ogg" 
          type="audio/ogg">
</audio>`,
  },
  {
    name: 'input',
    displayName: 'Input Field',
    description: 'Text input for user data',
    category: 'Forms',
    difficulty: 'basic' as const,
    preview: (
      <div className='space-y-2'>
        <input
          type='text'
          placeholder='Enter your name'
          className='w-full px-3 py-1 bg-gray-700 rounded text-white'
        />
        <input
          type='password'
          placeholder='Password'
          className='w-full px-3 py-1 bg-gray-700 rounded text-white'
        />
      </div>
    ),
    code: `<input type="text" 
       placeholder="Enter name">
       
<input type="password"
       placeholder="Password">
       
<input type="email">
<input type="number">`,
  },
  {
    name: 'select',
    displayName: 'Dropdown Menu',
    description: 'Let users choose from options',
    category: 'Forms',
    difficulty: 'intermediate' as const,
    preview: (
      <select className='w-full px-3 py-2 bg-gray-700 text-white rounded'>
        <option>Choose an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    ),
    code: `<select name="options">
  <option value="">Choose</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>`,
  },
  {
    name: 'textarea',
    displayName: 'Text Area',
    description: 'Multi-line text input',
    category: 'Forms',
    difficulty: 'basic' as const,
    preview: (
      <textarea
        placeholder='Write your message here...'
        className='w-full h-20 px-3 py-2 bg-gray-700 text-white rounded resize-none'
      />
    ),
    code: `<textarea 
  rows="4" 
  cols="50"
  placeholder="Your message">
</textarea>`,
  },
  {
    name: 'header',
    displayName: 'Header Section',
    description: 'Top section of your page',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <header className='bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded'>
        <nav className='flex justify-between items-center'>
          <span className='text-white font-bold'>Logo</span>
          <div className='space-x-4'>
            <a href='#home' className='text-white'>
              Home
            </a>
            <a href='#about' className='text-white'>
              About
            </a>
          </div>
        </nav>
      </header>
    ),
    code: `<header>
  <nav>
    <h1>Logo</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>`,
  },
  {
    name: 'footer',
    displayName: 'Footer Section',
    description: 'Bottom section of your page',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <footer className='bg-gray-800 p-4 rounded text-center'>
        <p className='text-gray-400 text-sm'>© 2024 Your Website</p>
        <div className='flex justify-center gap-4 mt-2'>
          <a href='#privacy' className='text-blue-400 text-sm'>
            Privacy
          </a>
          <a href='#terms' className='text-blue-400 text-sm'>
            Terms
          </a>
        </div>
      </footer>
    ),
    code: `<footer>
  <p>© 2024 Your Website</p>
  <a href="/privacy">Privacy</a>
  <a href="/terms">Terms</a>
</footer>`,
  },
  {
    name: 'section',
    displayName: 'Section',
    description: 'Group related content',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <section className='border-2 border-dashed border-blue-500 p-4 rounded'>
        <h2 className='text-blue-400 font-bold mb-2'>Section Title</h2>
        <p className='text-gray-300 text-sm'>
          This is a section containing related content.
        </p>
      </section>
    ),
    code: `<section>
  <h2>Section Title</h2>
  <p>Related content goes here</p>
</section>`,
  },
  {
    name: 'article',
    displayName: 'Article',
    description: 'Self-contained content',
    category: 'Structure',
    difficulty: 'intermediate' as const,
    preview: (
      <article className='bg-gray-800 p-4 rounded'>
        <h3 className='text-yellow-400 font-bold'>Article Title</h3>
        <p className='text-gray-400 text-xs mt-1'>By Author • 5 min read</p>
        <p className='text-gray-300 mt-2 text-sm'>
          Article content goes here...
        </p>
      </article>
    ),
    code: `<article>
  <h2>Article Title</h2>
  <p>By Author</p>
  <p>Content...</p>
</article>`,
  },
  {
    name: 'span',
    displayName: 'Span',
    description: 'Inline text styling',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <p className='text-gray-300'>
        This is <span className='text-cyan-400 font-bold'>highlighted</span>{' '}
        text with <span className='text-purple-400 underline'>different</span>{' '}
        styles.
      </p>
    ),
    code: `<p>
  This is 
  <span class="highlight">
    highlighted
  </span> 
  text.
</p>`,
  },
  {
    name: 'strong',
    displayName: 'Strong/Bold',
    description: 'Important bold text',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <p className='text-gray-300'>
        This is <strong className='text-white font-bold'>very important</strong>{' '}
        text!
      </p>
    ),
    code: `<p>
  This is 
  <strong>very important</strong> 
  text!
</p>`,
  },
  {
    name: 'em',
    displayName: 'Emphasis/Italic',
    description: 'Emphasized italic text',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <p className='text-gray-300'>
        This text has <em className='italic text-yellow-400'>emphasis</em> on
        certain words.
      </p>
    ),
    code: `<p>
  This text has 
  <em>emphasis</em> 
  on certain words.
</p>`,
  },
  {
    name: 'br',
    displayName: 'Line Break',
    description: 'Break to a new line',
    category: 'Text',
    difficulty: 'basic' as const,
    preview: (
      <p className='text-gray-300'>
        First line
        <br />
        Second line
        <br />
        Third line
      </p>
    ),
    code: `First line<br>
Second line<br>
Third line`,
  },
  {
    name: 'hr',
    displayName: 'Horizontal Rule',
    description: 'Divider line',
    category: 'Structure',
    difficulty: 'basic' as const,
    preview: (
      <div>
        <p className='text-gray-300 mb-2'>Content above</p>
        <hr className='border-gray-600' />
        <p className='text-gray-300 mt-2'>Content below</p>
      </div>
    ),
    code: `<p>Content above</p>
<hr>
<p>Content below</p>`,
  },
  {
    name: 'blockquote',
    displayName: 'Blockquote',
    description: 'Quote from another source',
    category: 'Text',
    difficulty: 'intermediate' as const,
    preview: (
      <blockquote className='border-l-4 border-cyan-500 pl-4 italic text-gray-400'>
        "This is an inspirational quote from someone famous."
      </blockquote>
    ),
    code: `<blockquote>
  "This is an inspirational 
  quote from someone famous."
</blockquote>`,
  },
  {
    name: 'code',
    displayName: 'Code',
    description: 'Inline code snippets',
    category: 'Text',
    difficulty: 'intermediate' as const,
    preview: (
      <p className='text-gray-300'>
        Use{' '}
        <code className='bg-gray-700 px-2 py-1 rounded text-green-400 font-mono text-sm'>
          console.log()
        </code>{' '}
        to debug.
      </p>
    ),
    code: `<p>
  Use <code>console.log()</code> 
  to debug.
</p>`,
  },
  {
    name: 'pre',
    displayName: 'Preformatted',
    description: 'Preserve spacing and formatting',
    category: 'Text',
    difficulty: 'intermediate' as const,
    preview: (
      <pre className='bg-gray-900 p-2 rounded text-green-400 font-mono text-xs overflow-x-auto'>{`function hello() {
  console.log("Hi!");
}`}</pre>
    ),
    code: `<pre>
function hello() {
  console.log("Hi!");
}
</pre>`,
  },
  {
    name: 'iframe',
    displayName: 'Iframe',
    description: 'Embed external content',
    category: 'Media',
    difficulty: 'advanced' as const,
    preview: (
      <div className='bg-gradient-to-br from-gray-700 to-gray-800 h-24 rounded flex items-center justify-center'>
        <span className='text-gray-400'>External Content Frame</span>
      </div>
    ),
    code: `<iframe 
  src="https://example.com"
  width="600"
  height="400">
</iframe>`,
  },
  {
    name: 'nav',
    displayName: 'Navigation',
    description: 'Navigation links section',
    category: 'Structure',
    difficulty: 'intermediate' as const,
    preview: (
      <nav className='flex gap-4 justify-center'>
        <a href='#home' className='text-blue-400 hover:underline'>
          Home
        </a>
        <a href='#products' className='text-blue-400 hover:underline'>
          Products
        </a>
        <a href='#contact' className='text-blue-400 hover:underline'>
          Contact
        </a>
      </nav>
    ),
    code: `<nav>
  <a href="/">Home</a>
  <a href="/products">Products</a>
  <a href="/contact">Contact</a>
</nav>`,
  },
  {
    name: 'main',
    displayName: 'Main Content',
    description: 'Primary content area',
    category: 'Structure',
    difficulty: 'intermediate' as const,
    preview: (
      <div className='border-2 border-green-500 border-dashed p-4 rounded'>
        <span className='text-green-400 font-bold'>MAIN CONTENT AREA</span>
        <p className='text-gray-400 text-sm mt-2'>
          Your primary content goes here
        </p>
      </div>
    ),
    code: `<main>
  <h1>Page Title</h1>
  <p>Main content...</p>
</main>`,
  },
];

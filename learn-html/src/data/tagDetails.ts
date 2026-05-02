export interface TagDetail {
  name: string;
  definition: string;
  whenToUse: string[];
  syntax: string;
  attributes: {
    name: string;
    description: string;
    required: boolean;
    example?: string;
  }[];
  relatedTags: {
    tag: string;
    description: string;
  }[];
  examples: {
    title: string;
    code: string;
    description: string;
  }[];
  exercises: {
    title: string;
    instruction: string;
    starterCode: string;
    solution: string;
    hints: string[];
  }[];
  tips: string[];
  commonMistakes: string[];
}

export const tagDetails: Record<string, TagDetail> = {
  html: {
    name: 'html',
    definition:
      "The <html> tag is the root element of every HTML page. It's like the container that holds everything on your webpage - think of it as the main box that contains all other boxes.",
    whenToUse: [
      'As the very first tag in every HTML document',
      'Required for every single webpage you create',
      'Wraps around all other HTML content',
    ],
    syntax: '<html lang="en">...all your content...</html>',
    attributes: [
      {
        name: 'lang',
        description:
          'Specifies the language of the page (e.g., "en" for English)',
        required: false,
        example: 'lang="en"',
      },
      {
        name: 'dir',
        description:
          'Text direction: "ltr" (left-to-right) or "rtl" (right-to-left)',
        required: false,
        example: 'dir="ltr"',
      },
    ],
    relatedTags: [
      { tag: 'head', description: 'Contains metadata about the page' },
      { tag: 'body', description: 'Contains all visible content' },
      {
        tag: 'DOCTYPE',
        description: 'Declares the document type (goes before html tag)',
      },
    ],
    examples: [
      {
        title: 'Basic HTML Structure',
        code: '<html lang="en">\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>',
        description: 'The basic structure every webpage needs',
      },
      {
        title: 'HTML with Different Language',
        code: '<html lang="es">\n  <head>\n    <title>Mi Página</title>\n  </head>\n  <body>\n    <h1>¡Hola Mundo!</h1>\n  </body>\n</html>',
        description: 'Setting the language to Spanish for better accessibility',
      },
    ],
    exercises: [
      {
        title: 'Create Basic HTML Structure',
        instruction:
          'Create a complete HTML structure with html, head, and body tags',
        starterCode: '<!-- Create your HTML structure here -->',
        solution:
          '<html lang="en">\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <p>Hello World!</p>\n  </body>\n</html>',
        hints: [
          'Start with <html>',
          'Add lang="en" attribute',
          'Include head and body sections',
          "Don't forget closing tags",
        ],
      },
    ],
    tips: [
      'Always include the lang attribute for better accessibility',
      'The html tag should be the first and last tag in your document',
      'Everything else goes inside the html tag',
    ],
    commonMistakes: [
      'Forgetting to include the html tag',
      'Not adding the lang attribute',
      'Putting content outside the html tag',
    ],
  },
  head: {
    name: 'head',
    definition:
      "The <head> tag contains information ABOUT your webpage that browsers and search engines need, but visitors don't see. It's like the ID card of your webpage.",
    whenToUse: [
      'Required in every HTML document',
      'Goes inside the html tag, before the body',
      'Contains metadata, title, links to CSS, and other invisible information',
    ],
    syntax: '<head>...metadata goes here...</head>',
    attributes: [
      {
        name: 'profile',
        description: 'Specifies metadata profiles (rarely used)',
        required: false,
        example: 'profile="http://example.com/profile"',
      },
    ],
    relatedTags: [
      { tag: 'title', description: 'Sets the page title shown in browser tab' },
      { tag: 'meta', description: 'Provides metadata about the page' },
      { tag: 'link', description: 'Links to external resources like CSS' },
      { tag: 'script', description: 'Includes JavaScript code' },
      { tag: 'style', description: 'Contains internal CSS styles' },
    ],
    examples: [
      {
        title: 'Basic Head Section',
        code: '<head>\n  <title>My Website</title>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>',
        description: 'Essential head content every page should have',
      },
      {
        title: 'Head with CSS and Description',
        code: '<head>\n  <title>Amazing Blog</title>\n  <meta charset="UTF-8">\n  <meta name="description" content="A blog about web development">\n  <link rel="stylesheet" href="styles.css">\n</head>',
        description: 'Head section with styling and SEO information',
      },
    ],
    exercises: [
      {
        title: 'Create a Complete Head Section',
        instruction:
          'Create a head section with title, charset, and viewport meta tags',
        starterCode:
          '<head>\n  <!-- Add your meta tags and title here -->\n</head>',
        solution:
          '<head>\n  <title>My Portfolio</title>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>',
        hints: [
          'Include a descriptive title',
          'Add charset="UTF-8"',
          'Include viewport meta tag for mobile',
        ],
      },
    ],
    tips: [
      'Always include charset and viewport meta tags',
      'Make your title descriptive but concise',
      'Put CSS links before JavaScript for better loading',
    ],
    commonMistakes: [
      'Forgetting the head section entirely',
      'Missing the charset meta tag',
      'Putting visible content in the head',
    ],
  },
  body: {
    name: 'body',
    definition:
      "The <body> tag contains all the content that visitors can see on your webpage - text, images, buttons, everything! It's like the main stage where your content performs.",
    whenToUse: [
      'Required in every HTML document',
      'Contains all visible content of your webpage',
      'Goes after the head section, inside the html tag',
    ],
    syntax: '<body>...all your visible content...</body>',
    attributes: [
      {
        name: 'class',
        description: 'Add CSS classes for styling the entire page',
        required: false,
        example: 'class="dark-theme"',
      },
      {
        name: 'id',
        description: 'Unique identifier for the body element',
        required: false,
        example: 'id="main-content"',
      },
      {
        name: 'onload',
        description: 'JavaScript to run when page loads',
        required: false,
        example: 'onload="welcomeMessage()"',
      },
    ],
    relatedTags: [
      { tag: 'head', description: 'Contains page metadata' },
      { tag: 'html', description: 'Root element containing head and body' },
      { tag: 'main', description: 'Main content area inside body' },
      { tag: 'header', description: 'Page header section' },
      { tag: 'footer', description: 'Page footer section' },
    ],
    examples: [
      {
        title: 'Simple Body Content',
        code: '<body>\n  <h1>Welcome to My Site</h1>\n  <p>This is my first webpage!</p>\n  <button>Click Me</button>\n</body>',
        description: 'Basic body with heading, paragraph, and button',
      },
      {
        title: 'Structured Body Content',
        code: '<body>\n  <header>\n    <h1>My Blog</h1>\n  </header>\n  <main>\n    <p>Welcome to my blog about web development.</p>\n  </main>\n  <footer>\n    <p>&copy; 2024 My Blog</p>\n  </footer>\n</body>',
        description: 'Body with semantic HTML structure',
      },
    ],
    exercises: [
      {
        title: 'Create Your First Body',
        instruction:
          'Create a body section with a heading and a paragraph about yourself',
        starterCode: '<body>\n  <!-- Add your content here -->\n</body>',
        solution:
          "<body>\n  <h1>About Me</h1>\n  <p>Hi! I'm learning HTML and this is my first webpage.</p>\n</body>",
        hints: [
          'Start with a heading using h1',
          'Add a paragraph with p tag',
          'Make it personal and interesting',
        ],
      },
    ],
    tips: [
      'All visible content goes in the body',
      'Use semantic HTML tags like header, main, footer inside body',
      'Keep your content organized and well-structured',
    ],
    commonMistakes: [
      'Forgetting to include the body tag',
      'Putting visible content outside the body',
      'Not organizing content with proper HTML structure',
    ],
  },
  title: {
    name: 'title',
    definition:
      "The <title> tag sets the text that appears in your browser tab and bookmark name. It's like the name tag of your webpage - what people see when they have your page open.",
    whenToUse: [
      'Required in every HTML document',
      'Goes inside the head section',
      'Should describe what the page is about',
    ],
    syntax: '<title>Your Page Title Here</title>',
    attributes: [],
    relatedTags: [
      { tag: 'head', description: 'Container for the title tag' },
      { tag: 'meta', description: 'Other metadata about the page' },
      { tag: 'h1', description: 'Main heading visible on the page' },
    ],
    examples: [
      {
        title: 'Homepage Title',
        code: "<title>Welcome to John's Portfolio</title>",
        description: 'Clear, descriptive title for a personal website',
      },
      {
        title: 'Blog Post Title',
        code: '<title>How to Learn HTML - Web Dev Blog</title>',
        description: 'Specific title that includes the site name',
      },
      {
        title: 'E-commerce Page',
        code: '<title>Blue Sneakers - Size 10 | ShoeMart</title>',
        description: 'Product page title with key details',
      },
    ],
    exercises: [
      {
        title: 'Write a Good Page Title',
        instruction:
          'Create a title for a recipe page about chocolate chip cookies',
        starterCode: '<title><!-- Write your title here --></title>',
        solution:
          '<title>Best Chocolate Chip Cookies Recipe - Easy & Delicious</title>',
        hints: [
          'Include the main topic (chocolate chip cookies)',
          'Add descriptive words (best, easy)',
          'Keep it under 60 characters',
        ],
      },
    ],
    tips: [
      'Keep titles between 30-60 characters for best SEO',
      'Make it descriptive and specific',
      'Include your site/brand name when appropriate',
      'Use keywords people might search for',
    ],
    commonMistakes: [
      'Making titles too long or too short',
      'Using vague titles like "Page 1" or "Untitled"',
      'Forgetting to include the title tag',
      'Using the same title on multiple pages',
    ],
  },
  meta: {
    name: 'meta',
    definition:
      'The <meta> tag provides information about your webpage to browsers and search engines. Think of it as invisible labels that describe your page - like ingredients on a food package.',
    whenToUse: [
      'To set character encoding (always use UTF-8)',
      'To make your site mobile-friendly',
      'To tell search engines what your page is about',
      'To control how your page appears when shared on social media',
    ],
    syntax: '<meta name="description" content="Your page description">',
    attributes: [
      {
        name: 'charset',
        description: 'Character encoding (always use UTF-8)',
        required: false,
        example: 'charset="UTF-8"',
      },
      {
        name: 'name',
        description: 'Type of metadata (description, viewport, keywords)',
        required: false,
        example: 'name="description"',
      },
      {
        name: 'content',
        description: 'The actual metadata content',
        required: false,
        example: 'content="A blog about web development"',
      },
      {
        name: 'http-equiv',
        description: 'HTTP header information',
        required: false,
        example: 'http-equiv="refresh"',
      },
    ],
    relatedTags: [
      { tag: 'head', description: 'Container for meta tags' },
      { tag: 'title', description: 'Page title that appears in browser tab' },
      { tag: 'link', description: 'Links to external resources' },
    ],
    examples: [
      {
        title: 'Essential Meta Tags',
        code: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="Learn web development with easy tutorials">',
        description: 'The three most important meta tags every page needs',
      },
      {
        title: 'SEO Meta Tags',
        code: '<meta name="description" content="Best chocolate chip cookie recipe - easy and delicious!">\n<meta name="keywords" content="recipe, cookies, baking, dessert">\n<meta name="author" content="Chef Sarah">',
        description: 'Meta tags that help with search engine optimization',
      },
      {
        title: 'Social Media Meta Tags',
        code: '<meta property="og:title" content="Amazing Cookie Recipe">\n<meta property="og:description" content="The best chocolate chip cookies you\'ll ever make!">\n<meta property="og:image" content="cookie-photo.jpg">',
        description: 'Open Graph tags for better social media sharing',
      },
    ],
    exercises: [
      {
        title: 'Add Essential Meta Tags',
        instruction:
          'Add charset, viewport, and description meta tags for a personal portfolio site',
        starterCode: '<!-- Add your meta tags here -->',
        solution:
          '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="John Smith - Web Developer Portfolio">',
        hints: [
          'Start with charset="UTF-8"',
          'Add viewport for mobile',
          'Write a clear description',
        ],
      },
    ],
    tips: [
      'Always include charset="UTF-8" first',
      'Viewport meta tag is essential for mobile-friendly sites',
      'Keep descriptions between 120-160 characters',
      'Use relevant keywords in your description naturally',
    ],
    commonMistakes: [
      'Forgetting the charset meta tag',
      'Not including viewport meta tag (makes sites not mobile-friendly)',
      'Writing descriptions that are too long or too short',
      'Keyword stuffing in meta descriptions',
    ],
  },
  link: {
    name: 'link',
    definition:
      'The <link> tag connects your HTML page to external files, most commonly CSS stylesheets. It\'s like telling your webpage "go get that file and use it here."',
    whenToUse: [
      'To connect CSS files to style your webpage',
      'To add favicons (the little icon in browser tabs)',
      'To include web fonts from Google Fonts or other services',
      'To link to other related pages',
    ],
    syntax: '<link rel="stylesheet" href="styles.css">',
    attributes: [
      {
        name: 'rel',
        description: 'Relationship between current page and linked file',
        required: true,
        example: 'rel="stylesheet"',
      },
      {
        name: 'href',
        description: 'Path to the external file',
        required: true,
        example: 'href="styles.css"',
      },
      {
        name: 'type',
        description: 'MIME type of the linked file',
        required: false,
        example: 'type="text/css"',
      },
      {
        name: 'media',
        description: 'When to apply the linked resource',
        required: false,
        example: 'media="screen"',
      },
    ],
    relatedTags: [
      { tag: 'style', description: 'Internal CSS styles' },
      { tag: 'script', description: 'Links to JavaScript files' },
      { tag: 'head', description: 'Container for link tags' },
    ],
    examples: [
      {
        title: 'Link to CSS File',
        code: '<link rel="stylesheet" href="styles.css">',
        description: 'Most common use - linking to your CSS file',
      },
      {
        title: 'Add a Favicon',
        code: '<link rel="icon" href="favicon.ico" type="image/x-icon">',
        description: 'Adding a small icon that appears in the browser tab',
      },
      {
        title: 'Google Fonts',
        code: '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">',
        description: 'Including Google Fonts in your webpage',
      },
    ],
    exercises: [
      {
        title: 'Link Your CSS File',
        instruction:
          'Create a link tag to connect a CSS file called "main.css" to your webpage',
        starterCode: '<!-- Add your link tag here -->',
        solution: '<link rel="stylesheet" href="main.css">',
        hints: [
          'Use rel="stylesheet"',
          'Set href to "main.css"',
          'Put it in the head section',
        ],
      },
    ],
    tips: [
      'Always put link tags in the head section',
      'CSS links should come before JavaScript for better loading',
      'Use relative paths for local files (styles.css) and full URLs for external files',
      'The rel attribute is required and tells the browser what the file is for',
    ],
    commonMistakes: [
      'Putting link tags in the body instead of head',
      'Forgetting the rel attribute',
      'Wrong file paths in href attribute',
      'Not understanding that link is a self-closing tag',
    ],
  },
  script: {
    name: 'script',
    definition:
      'The <script> tag includes JavaScript code in your webpage. JavaScript makes your page interactive - like buttons that do things when clicked, animations, and dynamic content.',
    whenToUse: [
      'To add interactive features to your webpage',
      'To include external JavaScript files',
      'To write JavaScript code directly in your HTML',
      'To make your webpage respond to user actions',
    ],
    syntax: '<script src="script.js"></script>',
    attributes: [
      {
        name: 'src',
        description: 'Path to external JavaScript file',
        required: false,
        example: 'src="script.js"',
      },
      {
        name: 'type',
        description: 'Type of script (usually "text/javascript")',
        required: false,
        example: 'type="text/javascript"',
      },
      {
        name: 'async',
        description: 'Load script asynchronously',
        required: false,
        example: 'async',
      },
      {
        name: 'defer',
        description: 'Delay script execution until page loads',
        required: false,
        example: 'defer',
      },
    ],
    relatedTags: [
      { tag: 'link', description: 'Links to external CSS files' },
      { tag: 'style', description: 'Internal CSS styles' },
      { tag: 'head', description: 'Container for script tags' },
      { tag: 'body', description: 'Alternative location for script tags' },
    ],
    examples: [
      {
        title: 'External JavaScript File',
        code: '<script src="main.js"></script>',
        description: 'Including a JavaScript file from your project',
      },
      {
        title: 'Inline JavaScript',
        code: '<script>\n  alert("Welcome to my website!");\n  console.log("Page loaded");\n</script>',
        description: 'JavaScript code written directly in the HTML',
      },
      {
        title: 'External Library',
        code: '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>',
        description: 'Including a popular JavaScript library like jQuery',
      },
    ],
    exercises: [
      {
        title: 'Add Your First Script',
        instruction:
          'Create a script tag that shows an alert saying "Hello World!" when the page loads',
        starterCode: '<!-- Add your script tag here -->',
        solution: '<script>\n  alert("Hello World!");\n</script>',
        hints: [
          'Use opening and closing script tags',
          'Put alert("Hello World!"); between them',
          'Place it before the closing body tag',
        ],
      },
    ],
    tips: [
      'Put scripts at the end of body for better page loading speed',
      'Use external files for larger JavaScript code',
      'Always close script tags, even when linking external files',
      'Use defer attribute to wait until page content loads',
    ],
    commonMistakes: [
      'Self-closing script tags (always use opening and closing tags)',
      'Putting large scripts in the head (slows down page loading)',
      'Forgetting to close script tags',
      'Not handling JavaScript errors gracefully',
    ],
  },
  style: {
    name: 'style',
    definition:
      "The <style> tag contains CSS code that controls how your webpage looks - colors, fonts, spacing, layout. It's like the paint and decorating instructions for your HTML house.",
    whenToUse: [
      'For small amounts of CSS that are specific to one page',
      'When you want to quickly test styling without creating a separate file',
      'For CSS that only applies to the current page',
      'When learning or prototyping (but use external files for real projects)',
    ],
    syntax: '<style>\n  /* CSS rules go here */\n</style>',
    attributes: [
      {
        name: 'type',
        description: 'MIME type (usually "text/css")',
        required: false,
        example: 'type="text/css"',
      },
      {
        name: 'media',
        description: 'Which devices/conditions the styles apply to',
        required: false,
        example: 'media="screen"',
      },
    ],
    relatedTags: [
      { tag: 'link', description: 'Links to external CSS files' },
      { tag: 'script', description: 'Contains JavaScript code' },
      { tag: 'head', description: 'Container for style tags' },
    ],
    examples: [
      {
        title: 'Basic Styling',
        code: '<style>\n  h1 {\n    color: blue;\n    text-align: center;\n  }\n  p {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n</style>',
        description: 'Simple CSS to style headings and paragraphs',
      },
      {
        title: 'Page-Specific Styles',
        code: '<style>\n  body {\n    background-color: lightblue;\n    font-family: Arial, sans-serif;\n  }\n  .highlight {\n    background-color: yellow;\n  }\n</style>',
        description: 'Styles that apply only to this specific page',
      },
      {
        title: 'Responsive Design',
        code: '<style>\n  .container {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n  @media (max-width: 600px) {\n    .container {\n      max-width: 100%;\n      padding: 10px;\n    }\n  }\n</style>',
        description: 'CSS that adapts to different screen sizes',
      },
    ],
    exercises: [
      {
        title: 'Style Your First Page',
        instruction:
          'Create a style tag that makes h1 elements red and centers them on the page',
        starterCode: '<style>\n  /* Add your CSS here */\n</style>',
        solution:
          '<style>\n  h1 {\n    color: red;\n    text-align: center;\n  }\n</style>',
        hints: [
          'Target h1 elements',
          'Use color: red;',
          'Use text-align: center;',
          "Don't forget the semicolons",
        ],
      },
    ],
    tips: [
      'Always put style tags in the head section',
      'Use external CSS files for larger projects',
      'Keep your CSS organized and well-commented',
      'Test your styles on different screen sizes',
    ],
    commonMistakes: [
      'Forgetting to close style tags',
      'Putting style tags in the body',
      'Using too much inline CSS instead of external files',
      'Not organizing CSS rules logically',
    ],
  },
  h1: {
    name: 'h1',
    definition:
      'The <h1> tag defines the most important heading on a page. Think of it as the main title of a book or newspaper article.',
    whenToUse: [
      'For the main title of your webpage',
      'Only use ONE h1 per page',
      'Should describe what the entire page is about',
    ],
    syntax: '<h1>Your Main Title Here</h1>',
    attributes: [
      {
        name: 'class',
        description: 'Add CSS classes for styling',
        required: false,
        example: 'class="title primary-heading"',
      },
      {
        name: 'id',
        description: 'Unique identifier for the element',
        required: false,
        example: 'id="page-title"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: blue; font-size: 2rem;"',
      },
    ],
    relatedTags: [
      { tag: 'h2', description: 'Second-level heading' },
      { tag: 'h3', description: 'Third-level heading' },
      { tag: 'h4', description: 'Fourth-level heading' },
      { tag: 'h5', description: 'Fifth-level heading' },
      { tag: 'h6', description: 'Sixth-level heading' },
    ],
    examples: [
      {
        title: 'Basic Heading',
        code: '<h1>Welcome to My Website</h1>',
        description: 'A simple main heading for your page',
      },
      {
        title: 'Styled Heading',
        code: '<h1 style="color: blue;">Breaking News!</h1>',
        description: 'A heading with inline styling',
      },
    ],
    exercises: [
      {
        title: 'Create Your First Heading',
        instruction: 'Create an h1 tag with the text "My Amazing Portfolio"',
        starterCode: '<!-- Add your h1 tag here -->',
        solution: '<h1>My Amazing Portfolio</h1>',
        hints: ['Start with <h1>', 'Add your text', 'Close with </h1>'],
      },
    ],
    tips: [
      'Search engines use h1 to understand your page content',
      'Make it descriptive and clear',
      'Keep it under 60 characters for best SEO',
    ],
    commonMistakes: [
      'Using multiple h1 tags on one page',
      'Making h1 too long or vague',
      'Using h1 just to make text bigger (use CSS instead)',
    ],
  },
  p: {
    name: 'p',
    definition:
      "The <p> tag defines a paragraph of text. It's like a paragraph in a book - a block of related sentences.",
    whenToUse: [
      'For any block of regular text',
      'When you need space before and after text',
      'For readable content sections',
    ],
    syntax: '<p>Your paragraph text here</p>',
    attributes: [
      {
        name: 'class',
        description: 'Add CSS classes for styling',
        required: false,
        example: 'class="text-content"',
      },
      {
        name: 'id',
        description: 'Unique identifier for the element',
        required: false,
        example: 'id="intro-paragraph"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="text-align: center;"',
      },
    ],
    relatedTags: [
      { tag: 'br', description: 'Line break within paragraph' },
      { tag: 'strong', description: 'Bold/important text' },
      { tag: 'em', description: 'Emphasized/italic text' },
      { tag: 'span', description: 'Inline text container' },
      { tag: 'a', description: 'Links within paragraphs' },
    ],
    examples: [
      {
        title: 'Simple Paragraph',
        code: '<p>This is a simple paragraph of text.</p>',
        description: 'Basic paragraph usage',
      },
      {
        title: 'Multiple Paragraphs',
        code: `<p>First paragraph here.</p>
<p>Second paragraph with more content.</p>`,
        description: 'Multiple paragraphs with automatic spacing',
      },
    ],
    exercises: [
      {
        title: 'Write About Yourself',
        instruction:
          'Create two paragraphs: one about your name and one about your hobby',
        starterCode: '<!-- Add two p tags here -->',
        solution: `<p>My name is John and I love coding.</p>
<p>My favorite hobby is playing guitar.</p>`,
        hints: [
          'Use two separate <p> tags',
          'Each paragraph should be complete',
        ],
      },
    ],
    tips: [
      'Keep paragraphs short for better readability',
      'One idea per paragraph',
      'Paragraphs automatically add space above and below',
    ],
    commonMistakes: [
      'Using <br> tags instead of new paragraphs',
      'Making paragraphs too long',
      'Forgetting to close the </p> tag',
    ],
  },
  button: {
    name: 'button',
    definition:
      "The <button> tag creates a clickable button. It's like a doorbell - press it to make something happen!",
    whenToUse: [
      'When users need to trigger an action',
      'For form submissions',
      'To open modals or toggle content',
    ],
    syntax: '<button>Click Me</button>',
    attributes: [
      {
        name: 'type',
        description: 'Button type: button, submit, or reset',
        required: false,
        example: 'type="submit"',
      },
      {
        name: 'onclick',
        description: 'JavaScript to run when clicked',
        required: false,
        example: 'onclick="handleClick()"',
      },
      {
        name: 'disabled',
        description: 'Makes button unclickable',
        required: false,
        example: 'disabled',
      },
      {
        name: 'name',
        description: 'Name for form submission',
        required: false,
        example: 'name="action"',
      },
      {
        name: 'value',
        description: 'Value sent when form is submitted',
        required: false,
        example: 'value="save"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="btn btn-primary"',
      },
    ],
    relatedTags: [
      { tag: 'form', description: 'Container for button in forms' },
      { tag: 'input', description: 'Alternative input elements' },
      { tag: 'a', description: 'Link styled as button' },
      { tag: 'submit', description: 'Submit input type' },
    ],
    examples: [
      {
        title: 'Basic Button',
        code: '<button>Click Me!</button>',
        description: 'A simple clickable button',
      },
      {
        title: 'Submit Button',
        code: '<button type="submit">Send Form</button>',
        description: 'Button for form submission',
      },
      {
        title: 'Button with Action',
        code: '<button onclick="alert(\'Hello!\')">Say Hello</button>',
        description: 'Button that shows an alert when clicked',
      },
    ],
    exercises: [
      {
        title: 'Create Action Buttons',
        instruction: 'Create three buttons: "Save", "Cancel", and "Delete"',
        starterCode: '<!-- Add three buttons here -->',
        solution: `<button>Save</button>
<button>Cancel</button>
<button>Delete</button>`,
        hints: [
          'Each button needs its own tag',
          'Put the text between the tags',
        ],
      },
    ],
    tips: [
      'Always add type attribute for clarity',
      'Make button text action-oriented (Save, Submit, Download)',
      'Consider adding icons for better UX',
    ],
    commonMistakes: [
      'Making buttons too small to click',
      'Vague button text like "Click Here"',
      'Not handling button clicks properly',
    ],
  },
  img: {
    name: 'img',
    definition:
      "The <img> tag embeds an image in your webpage. It's like placing a photo in a photo album.",
    whenToUse: [
      'To display photos, logos, or graphics',
      'For visual content that adds value',
      "When text alone isn't enough",
    ],
    syntax: '<img src="image.jpg" alt="description">',
    attributes: [
      {
        name: 'src',
        description: 'Path to the image file',
        required: true,
        example: 'src="/images/photo.jpg"',
      },
      {
        name: 'alt',
        description: 'Text description for accessibility',
        required: true,
        example: 'alt="A beautiful sunset"',
      },
      {
        name: 'width',
        description: 'Image width in pixels or percentage',
        required: false,
        example: 'width="300"',
      },
      {
        name: 'height',
        description: 'Image height in pixels or percentage',
        required: false,
        example: 'height="200"',
      },
      {
        name: 'loading',
        description: 'Lazy loading behavior',
        required: false,
        example: 'loading="lazy"',
      },
      {
        name: 'srcset',
        description: 'Responsive image sources',
        required: false,
        example: 'srcset="img-320w.jpg 320w, img-640w.jpg 640w"',
      },
    ],
    relatedTags: [
      { tag: 'picture', description: 'Container for responsive images' },
      { tag: 'figure', description: 'Image with caption container' },
      { tag: 'figcaption', description: 'Caption for images' },
      { tag: 'a', description: 'Make images clickable' },
    ],
    examples: [
      {
        title: 'Basic Image',
        code: '<img src="cat.jpg" alt="A cute cat">',
        description: 'Simple image with alt text',
      },
      {
        title: 'Sized Image',
        code: '<img src="logo.png" alt="Company Logo" width="200" height="100">',
        description: 'Image with specific dimensions',
      },
    ],
    exercises: [
      {
        title: 'Add a Profile Picture',
        instruction: 'Add an image tag for a profile picture with alt text',
        starterCode: '<!-- Add img tag here -->',
        solution: '<img src="profile.jpg" alt="Profile picture">',
        hints: [
          "Don't forget the src attribute",
          'Alt text is important for accessibility',
        ],
      },
    ],
    tips: [
      'Always include alt text for accessibility',
      'Optimize image file sizes for web',
      'Use appropriate formats (JPG for photos, PNG for graphics)',
    ],
    commonMistakes: [
      'Forgetting alt attribute',
      'Using images that are too large',
      'Wrong file paths in src',
    ],
  },
  a: {
    name: 'a',
    definition:
      "The <a> tag creates a hyperlink. It's like a teleporter that takes you to another page or location!",
    whenToUse: [
      'To link to other pages',
      'For navigation menus',
      'To link to sections within the same page',
    ],
    syntax: '<a href="url">Link Text</a>',
    attributes: [
      {
        name: 'href',
        description: 'URL or path to link to',
        required: true,
        example: 'href="https://example.com"',
      },
      {
        name: 'target',
        description: 'Where to open the link',
        required: false,
        example: 'target="_blank"',
      },
      {
        name: 'title',
        description: 'Tooltip text on hover',
        required: false,
        example: 'title="Visit our homepage"',
      },
      {
        name: 'rel',
        description: 'Relationship to linked page',
        required: false,
        example: 'rel="noopener noreferrer"',
      },
      {
        name: 'download',
        description: 'Download the linked resource',
        required: false,
        example: 'download="file.pdf"',
      },
    ],
    relatedTags: [
      { tag: 'nav', description: 'Navigation container for links' },
      { tag: 'button', description: 'Alternative clickable element' },
      { tag: 'img', description: 'Images inside links' },
      { tag: 'span', description: 'Style text within links' },
    ],
    examples: [
      {
        title: 'External Link',
        code: '<a href="https://google.com">Visit Google</a>',
        description: 'Link to another website',
      },
      {
        title: 'New Tab Link',
        code: '<a href="https://example.com" target="_blank">Open in New Tab</a>',
        description: 'Opens link in a new browser tab',
      },
    ],
    exercises: [
      {
        title: 'Create a Navigation Menu',
        instruction: 'Create three links: Home, About, and Contact',
        starterCode: '<!-- Add three links here -->',
        solution: `<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="contact.html">Contact</a>`,
        hints: ['Each link needs href attribute', 'Make link text descriptive'],
      },
    ],
    tips: [
      'Use descriptive link text, not "click here"',
      'Use target="_blank" for external links',
      'Add title attribute for better accessibility',
    ],
    commonMistakes: [
      'Using # for all href values',
      'Non-descriptive link text',
      'Forgetting to close the </a> tag',
    ],
  },
  ul: {
    name: 'ul',
    definition:
      'The <ul> tag creates an unordered (bullet) list, and <li> tags define each list item. Like a shopping list!',
    whenToUse: [
      "For lists where order doesn't matter",
      'Navigation menus',
      'Feature lists',
    ],
    syntax: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="nav-list"',
      },
      {
        name: 'type',
        description: 'Bullet style (disc, circle, square)',
        required: false,
        example: 'type="circle"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="list-style: none;"',
      },
    ],
    relatedTags: [
      { tag: 'li', description: 'List item (required child)' },
      { tag: 'ol', description: 'Ordered (numbered) list' },
      { tag: 'dl', description: 'Description list' },
      { tag: 'nav', description: 'Navigation container for lists' },
    ],
    examples: [
      {
        title: 'Shopping List',
        code: `<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Milk</li>
</ul>`,
        description: 'A simple shopping list',
      },
    ],
    exercises: [
      {
        title: 'Create Your Favorite Foods List',
        instruction: 'Make a list of your 3 favorite foods',
        starterCode: '<!-- Create ul with 3 li items -->',
        solution: `<ul>
  <li>Pizza</li>
  <li>Ice Cream</li>
  <li>Sushi</li>
</ul>`,
        hints: [
          'Start with <ul>',
          'Each item needs <li></li>',
          'End with </ul>',
        ],
      },
    ],
    tips: [
      'Always nest li directly inside ul',
      'Can nest lists inside list items',
      'Use CSS to customize bullet styles',
    ],
    commonMistakes: [
      'Putting text directly in ul without li',
      'Forgetting to close li tags',
      'Using ul when order matters (use ol instead)',
    ],
  },
  li: {
    name: 'li',
    definition:
      'The <li> tag defines a list item. It must be used inside <ul> (unordered list), <ol> (ordered list), or <menu> elements.',
    whenToUse: [
      'To define individual items in a list',
      'Inside ul or ol tags',
      'For navigation menu items',
    ],
    syntax: '<li>List item content</li>',
    attributes: [
      {
        name: 'value',
        description: 'Specifies the value of a list item (only for ol)',
        required: false,
        example: 'value="5"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="list-item"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: red;"',
      },
    ],
    relatedTags: [
      { tag: 'ul', description: 'Unordered list container' },
      { tag: 'ol', description: 'Ordered list container' },
      { tag: 'dl', description: 'Description list' },
    ],
    examples: [
      {
        title: 'Basic List Item',
        code: '<li>This is a list item</li>',
        description: 'Simple list item',
      },
      {
        title: 'Nested List',
        code: `<li>Main item
  <ul>
    <li>Sub-item 1</li>
    <li>Sub-item 2</li>
  </ul>
</li>`,
        description: 'List item with nested list',
      },
    ],
    exercises: [
      {
        title: 'Create List Items',
        instruction: 'Create three list items for a todo list',
        starterCode: '<!-- Add three li tags -->',
        solution: `<li>Buy groceries</li>
<li>Walk the dog</li>
<li>Read a book</li>`,
        hints: ['Each item needs <li> tags', 'Put your text between the tags'],
      },
    ],
    tips: [
      'Always use li inside ul or ol',
      'Can contain other elements like links or images',
      'Can have nested lists inside',
    ],
    commonMistakes: [
      'Using li without a parent ul or ol',
      'Forgetting to close the li tag',
      'Putting li directly inside another li',
    ],
  },
  ol: {
    name: 'ol',
    definition:
      'The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.',
    whenToUse: [
      'For lists where order matters',
      'Step-by-step instructions',
      'Rankings or priorities',
    ],
    syntax: `<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>`,
    attributes: [
      {
        name: 'type',
        description: 'Numbering type (1, A, a, I, i)',
        required: false,
        example: 'type="A"',
      },
      {
        name: 'start',
        description: 'Starting value of the list',
        required: false,
        example: 'start="5"',
      },
      {
        name: 'reversed',
        description: 'List order should be descending',
        required: false,
        example: 'reversed',
      },
    ],
    relatedTags: [
      { tag: 'li', description: 'List item (required child)' },
      { tag: 'ul', description: 'Unordered list alternative' },
      { tag: 'dl', description: 'Description list' },
    ],
    examples: [
      {
        title: 'Basic Ordered List',
        code: `<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
        description: 'Simple numbered list',
      },
      {
        title: 'Alphabetical List',
        code: `<ol type="A">
  <li>Section A</li>
  <li>Section B</li>
  <li>Section C</li>
</ol>`,
        description: 'List with letters instead of numbers',
      },
    ],
    exercises: [
      {
        title: 'Create a Recipe',
        instruction: 'Create an ordered list of 3 cooking steps',
        starterCode: '<!-- Create ol with 3 steps -->',
        solution: `<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>`,
        hints: ['Start with <ol>', 'Add three <li> items', 'Close with </ol>'],
      },
    ],
    tips: [
      'Use for sequential or ranked content',
      'Can customize numbering style with type attribute',
      'Can start from any number with start attribute',
    ],
    commonMistakes: [
      'Using ol for non-sequential lists',
      'Forgetting li tags inside',
      'Mixing content directly in ol without li',
    ],
  },
  div: {
    name: 'div',
    definition:
      "The <div> tag defines a division or section in an HTML document. It's a generic container for grouping elements.",
    whenToUse: [
      'To group related elements',
      'For layout and styling purposes',
      'As a container for JavaScript manipulation',
    ],
    syntax: '<div>Content goes here</div>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="container card"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="main-content"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background: blue;"',
      },
      {
        name: 'data-*',
        description: 'Custom data attributes',
        required: false,
        example: 'data-user-id="123"',
      },
    ],
    relatedTags: [
      { tag: 'section', description: 'Semantic section container' },
      { tag: 'article', description: 'Self-contained content' },
      { tag: 'span', description: 'Inline container' },
      { tag: 'main', description: 'Main content container' },
    ],
    examples: [
      {
        title: 'Basic Container',
        code: `<div>
  <h2>Section Title</h2>
  <p>Some content here</p>
</div>`,
        description: 'Simple content container',
      },
      {
        title: 'Card Component',
        code: `<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
</div>`,
        description: 'Nested divs for component structure',
      },
    ],
    exercises: [
      {
        title: 'Create a Card',
        instruction: 'Create a div with a heading and paragraph inside',
        starterCode: '<!-- Create a div container -->',
        solution: `<div>
  <h3>Card Title</h3>
  <p>This is the card content.</p>
</div>`,
        hints: ['Start with <div>', 'Add content inside', 'Close with </div>'],
      },
    ],
    tips: [
      'Use semantic HTML5 elements when possible',
      'Great for CSS Grid and Flexbox layouts',
      'Add classes for reusable styling',
    ],
    commonMistakes: [
      'Using div for everything (div soup)',
      'Not using semantic alternatives when appropriate',
      'Forgetting to close div tags',
    ],
  },
  span: {
    name: 'span',
    definition:
      'The <span> tag is an inline container used to mark up a part of text or document.',
    whenToUse: [
      'To style part of text differently',
      'For inline elements grouping',
      'To target text with JavaScript',
    ],
    syntax: '<span>Inline text</span>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="highlight"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="special-text"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: red;"',
      },
    ],
    relatedTags: [
      { tag: 'div', description: 'Block-level container' },
      { tag: 'strong', description: 'Important text' },
      { tag: 'em', description: 'Emphasized text' },
      { tag: 'mark', description: 'Highlighted text' },
    ],
    examples: [
      {
        title: 'Colored Text',
        code: 'This is <span style="color: blue;">blue text</span> in a sentence.',
        description: 'Styling part of text',
      },
      {
        title: 'Icon with Text',
        code: '<span class="icon">🚀</span> Launch',
        description: 'Combining icon and text',
      },
    ],
    exercises: [
      {
        title: 'Highlight Words',
        instruction: 'Use span to make one word red in a sentence',
        starterCode: '<p>This word should be red.</p>',
        solution:
          '<p>This <span style="color: red;">word</span> should be red.</p>',
        hints: [
          'Wrap the word in <span>',
          'Add style attribute',
          'Use color: red',
        ],
      },
    ],
    tips: [
      'Use for inline styling without semantic meaning',
      "Doesn't add line breaks like div",
      'Perfect for icons or small text variations',
    ],
    commonMistakes: [
      'Using span when semantic tags are better',
      'Using span for block-level styling',
      'Nesting block elements inside span',
    ],
  },
  h2: {
    name: 'h2',
    definition:
      'The <h2> tag defines the second-level heading. Used for major section titles under the main heading.',
    whenToUse: [
      'For main section headings',
      'Subsections under h1',
      'Chapter titles in articles',
    ],
    syntax: '<h2>Section Heading</h2>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="section-title"',
      },
      {
        name: 'id',
        description: 'Unique identifier for anchoring',
        required: false,
        example: 'id="introduction"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: navy;"',
      },
    ],
    relatedTags: [
      { tag: 'h1', description: 'Main page heading' },
      { tag: 'h3', description: 'Sub-section heading' },
      { tag: 'h4', description: 'Fourth-level heading' },
      { tag: 'h5', description: 'Fifth-level heading' },
      { tag: 'h6', description: 'Sixth-level heading' },
    ],
    examples: [
      {
        title: 'Section Heading',
        code: '<h2>About Us</h2>',
        description: 'Major section title',
      },
      {
        title: 'Chapter Title',
        code: '<h2>Chapter 1: Introduction</h2>',
        description: 'Chapter heading in article',
      },
    ],
    exercises: [
      {
        title: 'Create Section Headings',
        instruction: 'Create an h2 for a "Features" section',
        starterCode: '<!-- Add h2 heading -->',
        solution: '<h2>Features</h2>',
        hints: ['Use <h2> tags', 'Add text between tags'],
      },
    ],
    tips: [
      'Use after h1 in document hierarchy',
      'Keep consistent heading hierarchy',
      'Good for SEO and accessibility',
    ],
    commonMistakes: [
      'Skipping heading levels (h1 to h3)',
      'Using for styling instead of structure',
      'Multiple h2 without proper h1',
    ],
  },
  h3: {
    name: 'h3',
    definition:
      'The <h3> tag defines the third-level heading. Used for sub-sections within h2 sections.',
    whenToUse: [
      'Sub-sections under h2',
      'Article sub-topics',
      'Card or component titles',
    ],
    syntax: '<h3>Sub-section Heading</h3>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="subtitle"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="details"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="font-weight: 600;"',
      },
    ],
    relatedTags: [
      { tag: 'h1', description: 'Main page heading' },
      { tag: 'h2', description: 'Section heading' },
      { tag: 'h4', description: 'Fourth-level heading' },
      { tag: 'h5', description: 'Fifth-level heading' },
      { tag: 'h6', description: 'Sixth-level heading' },
    ],
    examples: [
      {
        title: 'Sub-section Title',
        code: '<h3>Key Benefits</h3>',
        description: 'Sub-section under main section',
      },
    ],
    exercises: [
      {
        title: 'Create Sub-headings',
        instruction: 'Create an h3 for "Contact Information"',
        starterCode: '<!-- Add h3 heading -->',
        solution: '<h3>Contact Information</h3>',
        hints: ['Use <h3> tags', 'Place your text inside'],
      },
    ],
    tips: [
      'Maintain heading hierarchy',
      'Use for subsections of h2',
      "Don't skip from h1 to h3",
    ],
    commonMistakes: [
      'Using without parent h2',
      'Inconsistent heading hierarchy',
      'Using for visual size only',
    ],
  },
  form: {
    name: 'form',
    definition:
      'The <form> tag creates an HTML form for user input. Forms are used to collect user data and submit it to a server.',
    whenToUse: [
      'Collecting user input',
      'Login and registration',
      'Search functionality',
      'Contact forms',
    ],
    syntax: `<form action="/submit" method="post">
  <!-- form elements -->
</form>`,
    attributes: [
      {
        name: 'action',
        description: 'URL where form data is sent',
        required: false,
        example: 'action="/api/submit"',
      },
      {
        name: 'method',
        description: 'HTTP method (GET or POST)',
        required: false,
        example: 'method="post"',
      },
      {
        name: 'name',
        description: 'Form name for JavaScript',
        required: false,
        example: 'name="loginForm"',
      },
      {
        name: 'onsubmit',
        description: 'JavaScript on form submit',
        required: false,
        example: 'onsubmit="return validate()"',
      },
    ],
    relatedTags: [
      { tag: 'input', description: 'Input fields' },
      { tag: 'button', description: 'Submit buttons' },
      { tag: 'select', description: 'Dropdown lists' },
      { tag: 'textarea', description: 'Multi-line text input' },
      { tag: 'label', description: 'Input labels' },
    ],
    examples: [
      {
        title: 'Login Form',
        code: `<form action="/login" method="post">
  <input type="email" name="email" placeholder="Email">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Login</button>
</form>`,
        description: 'Simple login form',
      },
    ],
    exercises: [
      {
        title: 'Create Contact Form',
        instruction: 'Create a form with name and email inputs',
        starterCode: '<!-- Create a form -->',
        solution: `<form>
  <input type="text" name="name" placeholder="Your Name">
  <input type="email" name="email" placeholder="Your Email">
  <button type="submit">Send</button>
</form>`,
        hints: [
          'Start with <form>',
          'Add input elements',
          'Include a submit button',
        ],
      },
    ],
    tips: [
      'Always specify method attribute',
      'Use POST for sensitive data',
      'Add labels for accessibility',
      'Validate on both client and server',
    ],
    commonMistakes: [
      'Forgetting the action attribute',
      'Not specifying method',
      'Nesting forms inside forms',
      'Missing submit button',
    ],
  },
  input: {
    name: 'input',
    definition:
      'The <input> tag specifies an input field where users can enter data. The type attribute determines the input behavior.',
    whenToUse: [
      'Text input fields',
      'Checkboxes and radio buttons',
      'File uploads',
      'Hidden form data',
    ],
    syntax: '<input type="text" name="username">',
    attributes: [
      {
        name: 'type',
        description: 'Input type (text, email, password, etc.)',
        required: false,
        example: 'type="email"',
      },
      {
        name: 'name',
        description: 'Field name for form submission',
        required: false,
        example: 'name="username"',
      },
      {
        name: 'value',
        description: 'Default or current value',
        required: false,
        example: 'value="John"',
      },
      {
        name: 'placeholder',
        description: 'Hint text when empty',
        required: false,
        example: 'placeholder="Enter name"',
      },
      {
        name: 'required',
        description: 'Makes field mandatory',
        required: false,
        example: 'required',
      },
    ],
    relatedTags: [
      { tag: 'form', description: 'Form container' },
      { tag: 'label', description: 'Input label' },
      { tag: 'button', description: 'Submit button' },
      { tag: 'select', description: 'Dropdown alternative' },
      { tag: 'textarea', description: 'Multi-line text alternative' },
    ],
    examples: [
      {
        title: 'Text Input',
        code: '<input type="text" name="fullname" placeholder="Full Name">',
        description: 'Basic text input field',
      },
      {
        title: 'Checkbox',
        code: '<input type="checkbox" name="agree" value="yes"> I agree',
        description: 'Checkbox input',
      },
    ],
    exercises: [
      {
        title: 'Create Email Input',
        instruction: 'Create a required email input field',
        starterCode: '<!-- Create email input -->',
        solution:
          '<input type="email" name="email" required placeholder="your@email.com">',
        hints: [
          'Set type="email"',
          'Add required attribute',
          'Include placeholder',
        ],
      },
    ],
    tips: [
      'Choose appropriate type for validation',
      'Always include name attribute for forms',
      'Use placeholder for hints',
      'Add required for mandatory fields',
    ],
    commonMistakes: [
      'Wrong type attribute',
      'Missing name attribute',
      'Not closing self-closing tag in XHTML',
      'Forgetting labels for accessibility',
    ],
  },
  table: {
    name: 'table',
    definition:
      'The <table> tag defines an HTML table for displaying tabular data in rows and columns.',
    whenToUse: [
      'Displaying data in rows and columns',
      'Spreadsheet-like information',
      'Comparison charts',
      'Financial data',
    ],
    syntax: `<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>`,
    attributes: [
      {
        name: 'border',
        description: 'Table border width',
        required: false,
        example: 'border="1"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="data-table"',
      },
      {
        name: 'cellpadding',
        description: 'Space within cells',
        required: false,
        example: 'cellpadding="5"',
      },
      {
        name: 'cellspacing',
        description: 'Space between cells',
        required: false,
        example: 'cellspacing="0"',
      },
    ],
    relatedTags: [
      { tag: 'tr', description: 'Table row' },
      { tag: 'td', description: 'Table data cell' },
      { tag: 'th', description: 'Table header cell' },
      { tag: 'thead', description: 'Table header group' },
      { tag: 'tbody', description: 'Table body group' },
    ],
    examples: [
      {
        title: 'Basic Table',
        code: `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`,
        description: 'Simple table with headers',
      },
    ],
    exercises: [
      {
        title: 'Create Price Table',
        instruction: 'Create a table with product and price columns',
        starterCode: '<!-- Create table -->',
        solution: `<table>
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Apple</td>
    <td>$1.00</td>
  </tr>
</table>`,
        hints: [
          'Start with <table>',
          'Add <tr> for rows',
          'Use <th> for headers',
        ],
      },
    ],
    tips: [
      'Use thead, tbody for structure',
      'Add th for header cells',
      'Use CSS for styling, not attributes',
      'Consider responsive design',
    ],
    commonMistakes: [
      'Missing tr tags around cells',
      'Mixing th and td incorrectly',
      'Not using semantic table structure',
      'Using tables for layout',
    ],
  },
  strong: {
    name: 'strong',
    definition:
      'The <strong> tag makes text bold and indicates that the text has strong importance or emphasis.',
    whenToUse: [
      'To emphasize important text',
      'For warnings or critical information',
      'To highlight key terms',
    ],
    syntax: '<strong>Important text</strong>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="important"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="warning-text"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: red;"',
      },
    ],
    relatedTags: [
      { tag: 'em', description: 'Emphasized/italic text' },
      { tag: 'b', description: 'Bold text without semantic meaning' },
      { tag: 'mark', description: 'Highlighted text' },
      { tag: 'span', description: 'Generic inline container' },
    ],
    examples: [
      {
        title: 'Important Warning',
        code: '<p><strong>Warning:</strong> This action cannot be undone.</p>',
        description: 'Emphasizing a warning message',
      },
      {
        title: 'Key Information',
        code: '<p>Remember to save your work <strong>before closing</strong> the application.</p>',
        description: 'Highlighting critical information',
      },
    ],
    exercises: [
      {
        title: 'Add Emphasis',
        instruction: 'Make the word "important" bold in the sentence',
        starterCode: '<p>This is very important information.</p>',
        solution: '<p>This is very <strong>important</strong> information.</p>',
        hints: [
          'Wrap the word in <strong> tags',
          'Strong indicates importance',
        ],
      },
    ],
    tips: [
      'Use for semantic importance, not just visual bold',
      'Screen readers will emphasize strong text',
      "Don't overuse - loses impact if everything is strong",
    ],
    commonMistakes: [
      'Using strong just for visual bold (use CSS instead)',
      'Making entire paragraphs strong',
      'Confusing with <b> tag (which has no semantic meaning)',
    ],
  },
  em: {
    name: 'em',
    definition:
      'The <em> tag makes text italic and indicates emphasis. It shows that text should be stressed when spoken.',
    whenToUse: [
      'To add emphasis to words',
      'For foreign words or phrases',
      'To indicate a different tone or mood',
    ],
    syntax: '<em>Emphasized text</em>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="emphasis"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="highlighted"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="color: blue;"',
      },
    ],
    relatedTags: [
      { tag: 'strong', description: 'Strong importance/bold text' },
      { tag: 'i', description: 'Italic text without semantic meaning' },
      { tag: 'mark', description: 'Highlighted text' },
      { tag: 'cite', description: 'Citation text' },
    ],
    examples: [
      {
        title: 'Emphasis in Sentence',
        code: '<p>I <em>really</em> enjoyed the movie.</p>',
        description: 'Adding emphasis to show strong feeling',
      },
      {
        title: 'Foreign Word',
        code: '<p>The French word <em>bonjour</em> means hello.</p>',
        description: 'Emphasizing a foreign word',
      },
    ],
    exercises: [
      {
        title: 'Add Emphasis',
        instruction: 'Emphasize the word "never" in the sentence',
        starterCode: '<p>I will never give up on my dreams.</p>',
        solution: '<p>I will <em>never</em> give up on my dreams.</p>',
        hints: ['Use <em> for emphasis', 'Wrap only the word "never"'],
      },
    ],
    tips: [
      'Use for vocal emphasis when reading aloud',
      "Great for subtle emphasis vs strong's heavy emphasis",
      'Screen readers will change tone for em text',
    ],
    commonMistakes: [
      'Using em just for visual italics (use CSS instead)',
      'Overusing emphasis in text',
      'Confusing with <i> tag (which has no semantic meaning)',
    ],
  },
  br: {
    name: 'br',
    definition:
      'The <br> tag creates a line break. It forces text to start on a new line, like pressing Enter.',
    whenToUse: [
      'For addresses with multiple lines',
      'In poems where line breaks matter',
      'To separate content within the same paragraph',
    ],
    syntax: '<br>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="line-break"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="margin: 10px 0;"',
      },
    ],
    relatedTags: [
      { tag: 'p', description: 'Paragraph (better for text blocks)' },
      { tag: 'div', description: 'Block container' },
      { tag: 'hr', description: 'Horizontal line separator' },
    ],
    examples: [
      {
        title: 'Address Format',
        code: '123 Main Street<br>Anytown, State 12345<br>USA',
        description: 'Formatting an address with line breaks',
      },
      {
        title: 'Poem Lines',
        code: 'Roses are red<br>Violets are blue<br>HTML is awesome<br>And so are you!',
        description: 'Creating line breaks in poetry',
      },
    ],
    exercises: [
      {
        title: 'Format Contact Info',
        instruction: 'Add line breaks between name, phone, and email',
        starterCode: 'John Smith (555) 123-4567 john@email.com',
        solution: 'John Smith<br>(555) 123-4567<br>john@email.com',
        hints: ['Add <br> after name', 'Add <br> after phone number'],
      },
    ],
    tips: [
      'Self-closing tag - no closing </br> needed',
      'Use sparingly - paragraphs are often better',
      'Great for addresses and short poems',
    ],
    commonMistakes: [
      'Using multiple <br> tags instead of CSS margins',
      'Using <br> to create space between paragraphs',
      'Adding closing </br> tag (not needed)',
    ],
  },
  hr: {
    name: 'hr',
    definition:
      "The <hr> tag creates a horizontal line (rule) across the page. It's used to separate content sections.",
    whenToUse: [
      'To separate different topics',
      'Between article sections',
      'To create visual breaks in content',
    ],
    syntax: '<hr>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="section-divider"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="border: 2px solid blue;"',
      },
      {
        name: 'width',
        description: 'Width of the line (deprecated, use CSS)',
        required: false,
        example: 'width="50%"',
      },
    ],
    relatedTags: [
      { tag: 'div', description: 'Block container for separation' },
      { tag: 'section', description: 'Semantic content sections' },
      { tag: 'br', description: 'Line break (smaller separation)' },
    ],
    examples: [
      {
        title: 'Content Separator',
        code: '<p>First section content here.</p>\n<hr>\n<p>Second section content here.</p>',
        description: 'Separating different content sections',
      },
      {
        title: 'Styled Divider',
        code: '<hr style="border: 2px solid #ccc; margin: 20px 0;">',
        description: 'Custom styled horizontal rule',
      },
    ],
    exercises: [
      {
        title: 'Add Section Break',
        instruction: 'Add a horizontal rule between two paragraphs',
        starterCode:
          '<p>About section content.</p>\n<p>Contact section content.</p>',
        solution:
          '<p>About section content.</p>\n<hr>\n<p>Contact section content.</p>',
        hints: ['Place <hr> between the paragraphs', 'No closing tag needed'],
      },
    ],
    tips: [
      'Self-closing tag - no </hr> needed',
      'Use CSS to style the line appearance',
      'Great for creating visual breaks',
    ],
    commonMistakes: [
      'Adding closing </hr> tag',
      'Using multiple hr tags for spacing',
      'Using hr inside inline elements',
    ],
  },
  blockquote: {
    name: 'blockquote',
    definition:
      "The <blockquote> tag represents a section that is quoted from another source. It's like a speech bubble for longer quotes.",
    whenToUse: [
      'For longer quotations from other sources',
      'Customer testimonials',
      'Excerpts from articles or books',
    ],
    syntax: '<blockquote>Quoted text here</blockquote>',
    attributes: [
      {
        name: 'cite',
        description: 'URL of the quote source',
        required: false,
        example: 'cite="https://example.com/article"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="testimonial"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="font-style: italic;"',
      },
    ],
    relatedTags: [
      { tag: 'cite', description: 'Citation for quote source' },
      { tag: 'q', description: 'Short inline quotes' },
      { tag: 'p', description: 'Regular paragraph text' },
    ],
    examples: [
      {
        title: 'Customer Testimonial',
        code: '<blockquote>\n  "This product changed my life! I would recommend it to everyone."\n  <cite>- Sarah Johnson</cite>\n</blockquote>',
        description: 'Customer review with attribution',
      },
      {
        title: 'Famous Quote',
        code: '<blockquote cite="https://example.com">\n  "The only way to do great work is to love what you do."\n</blockquote>',
        description: 'Quote with source URL',
      },
    ],
    exercises: [
      {
        title: 'Create a Quote',
        instruction: 'Create a blockquote with a motivational quote',
        starterCode: '<!-- Add a blockquote here -->',
        solution:
          '<blockquote>\n  "Success is not final, failure is not fatal: it is the courage to continue that counts."\n</blockquote>',
        hints: ['Use <blockquote> tags', 'Add your quote inside'],
      },
    ],
    tips: [
      'Use cite attribute to reference source',
      'Browsers usually indent blockquotes',
      'Great for testimonials and reviews',
    ],
    commonMistakes: [
      'Using for regular text (not quotes)',
      'Forgetting to attribute the source',
      'Using blockquote for short quotes (use <q> instead)',
    ],
  },
  code: {
    name: 'code',
    definition:
      'The <code> tag displays text as computer code. It uses a monospace font to make code easier to read.',
    whenToUse: [
      'For short code snippets in text',
      'Programming keywords or functions',
      'File names or paths',
    ],
    syntax: '<code>console.log("Hello")</code>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="language-javascript"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background: #f4f4f4;"',
      },
    ],
    relatedTags: [
      { tag: 'pre', description: 'Preformatted text for code blocks' },
      { tag: 'kbd', description: 'Keyboard input' },
      { tag: 'samp', description: 'Sample computer output' },
      { tag: 'var', description: 'Variables in code' },
    ],
    examples: [
      {
        title: 'Inline Code',
        code: '<p>Use the <code>console.log()</code> function to print output.</p>',
        description: 'Code snippet within regular text',
      },
      {
        title: 'File Path',
        code: '<p>Save the file as <code>/home/user/documents/file.txt</code></p>',
        description: 'Displaying a file path',
      },
    ],
    exercises: [
      {
        title: 'Add Code Reference',
        instruction: 'Make "alert()" appear as code in the sentence',
        starterCode: '<p>Use the alert() function to show messages.</p>',
        solution:
          '<p>Use the <code>alert()</code> function to show messages.</p>',
        hints: ['Wrap alert() in <code> tags', 'Keep the parentheses'],
      },
    ],
    tips: [
      'Automatically uses monospace font',
      'Perfect for inline code references',
      'Combine with <pre> for code blocks',
    ],
    commonMistakes: [
      'Using for large code blocks (use <pre> instead)',
      'Forgetting to escape HTML characters',
      'Using for non-code text that needs monospace',
    ],
  },
  pre: {
    name: 'pre',
    definition:
      'The <pre> tag displays preformatted text. It preserves spaces, line breaks, and formatting exactly as written.',
    whenToUse: [
      'For code blocks with multiple lines',
      'ASCII art or text diagrams',
      'When exact spacing matters',
    ],
    syntax: '<pre>\nformatted\n    text\n        here\n</pre>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="code-block"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background: #f8f8f8;"',
      },
    ],
    relatedTags: [
      { tag: 'code', description: 'Inline code snippets' },
      { tag: 'samp', description: 'Sample computer output' },
      { tag: 'div', description: 'Block container' },
    ],
    examples: [
      {
        title: 'Code Block',
        code: '<pre><code>\nfunction greet(name) {\n    console.log("Hello, " + name);\n}\n</code></pre>',
        description: 'Multi-line code with preserved formatting',
      },
      {
        title: 'ASCII Art',
        code: '<pre>\n   /\\_/\\  \n  ( o.o ) \n   > ^ <\n</pre>',
        description: 'ASCII art cat with preserved spacing',
      },
    ],
    exercises: [
      {
        title: 'Format Code Block',
        instruction: 'Create a pre block with a simple function',
        starterCode: '<!-- Add pre-formatted code -->',
        solution:
          '<pre>\nfunction sayHello() {\n    alert("Hello World!");\n}\n</pre>',
        hints: ['Use <pre> tags', 'Include proper indentation'],
      },
    ],
    tips: [
      'Preserves all whitespace and line breaks',
      'Combine with <code> for semantic meaning',
      'Great for displaying formatted text',
    ],
    commonMistakes: [
      'Not escaping HTML characters in code',
      'Using for regular text (not preformatted)',
      'Forgetting that all spaces are preserved',
    ],
  },
  label: {
    name: 'label',
    definition:
      'The <label> tag defines a label for form elements. It helps users understand what each input field is for.',
    whenToUse: [
      'To describe form input fields',
      'To improve form accessibility',
      'To make form fields clickable',
    ],
    syntax: '<label for="input-id">Label text</label>',
    attributes: [
      {
        name: 'for',
        description: 'ID of the form element this label belongs to',
        required: false,
        example: 'for="email-input"',
      },
      {
        name: 'form',
        description: 'Form ID this label belongs to',
        required: false,
        example: 'form="contact-form"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="form-label"',
      },
    ],
    relatedTags: [
      { tag: 'input', description: 'Form input fields' },
      { tag: 'select', description: 'Dropdown lists' },
      { tag: 'textarea', description: 'Multi-line text input' },
      { tag: 'form', description: 'Form container' },
    ],
    examples: [
      {
        title: 'Input with Label',
        code: '<label for="name">Your Name:</label>\n<input type="text" id="name" name="name">',
        description: 'Label connected to input field',
      },
      {
        title: 'Checkbox with Label',
        code: '<label>\n  <input type="checkbox" name="newsletter">\n  Subscribe to newsletter\n</label>',
        description: 'Label wrapping a checkbox',
      },
    ],
    exercises: [
      {
        title: 'Create Labeled Input',
        instruction: 'Add a label for an email input field',
        starterCode: '<input type="email" id="user-email" name="email">',
        solution:
          '<label for="user-email">Email Address:</label>\n<input type="email" id="user-email" name="email">',
        hints: [
          'Add label before input',
          'Use for attribute matching input id',
        ],
      },
    ],
    tips: [
      'Always connect labels to inputs with for/id',
      'Clicking label focuses the associated input',
      'Essential for screen reader accessibility',
    ],
    commonMistakes: [
      'Not connecting label to input with for/id',
      'Placing label inside input',
      'Using div or span instead of label',
    ],
  },
  textarea: {
    name: 'textarea',
    definition:
      'The <textarea> tag creates a multi-line text input area. Perfect for longer text like comments or messages.',
    whenToUse: [
      'For multi-line text input',
      'Comments and feedback forms',
      'Message or description fields',
    ],
    syntax:
      '<textarea name="message" rows="4" cols="50">Default text</textarea>',
    attributes: [
      {
        name: 'name',
        description: 'Field name for form submission',
        required: false,
        example: 'name="comments"',
      },
      {
        name: 'rows',
        description: 'Number of visible text lines',
        required: false,
        example: 'rows="5"',
      },
      {
        name: 'cols',
        description: 'Number of visible character columns',
        required: false,
        example: 'cols="40"',
      },
      {
        name: 'placeholder',
        description: 'Hint text when empty',
        required: false,
        example: 'placeholder="Enter your message"',
      },
      {
        name: 'required',
        description: 'Makes field mandatory',
        required: false,
        example: 'required',
      },
    ],
    relatedTags: [
      { tag: 'input', description: 'Single-line text input' },
      { tag: 'label', description: 'Field label' },
      { tag: 'form', description: 'Form container' },
    ],
    examples: [
      {
        title: 'Comment Box',
        code: '<label for="comments">Comments:</label>\n<textarea id="comments" name="comments" rows="4" cols="50" placeholder="Share your thoughts..."></textarea>',
        description: 'Multi-line comment input area',
      },
      {
        title: 'Message Field',
        code: '<textarea name="message" rows="6" required>\nType your message here...\n</textarea>',
        description: 'Required message field with default text',
      },
    ],
    exercises: [
      {
        title: 'Create Feedback Form',
        instruction: 'Create a textarea for user feedback with 3 rows',
        starterCode: '<!-- Add textarea for feedback -->',
        solution:
          '<textarea name="feedback" rows="3" placeholder="Please share your feedback"></textarea>',
        hints: [
          'Set rows="3"',
          'Add placeholder text',
          'Include name attribute',
        ],
      },
    ],
    tips: [
      'Use rows and cols to set visible size',
      'Users can resize in most browsers',
      'Default text goes between opening and closing tags',
    ],
    commonMistakes: [
      'Using input type="text" for multi-line text',
      'Forgetting name attribute for forms',
      'Making textarea too small for expected content',
    ],
  },
  select: {
    name: 'select',
    definition:
      'The <select> tag creates a dropdown list. Users can choose one or more options from the list.',
    whenToUse: [
      'For dropdown menus with predefined options',
      'Country or state selection',
      'Category or type selection',
    ],
    syntax:
      '<select name="country">\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n</select>',
    attributes: [
      {
        name: 'name',
        description: 'Field name for form submission',
        required: false,
        example: 'name="country"',
      },
      {
        name: 'multiple',
        description: 'Allow multiple selections',
        required: false,
        example: 'multiple',
      },
      {
        name: 'size',
        description: 'Number of visible options',
        required: false,
        example: 'size="3"',
      },
      {
        name: 'required',
        description: 'Makes field mandatory',
        required: false,
        example: 'required',
      },
    ],
    relatedTags: [
      { tag: 'option', description: 'Individual choice in select' },
      { tag: 'optgroup', description: 'Group of related options' },
      { tag: 'label', description: 'Field label' },
      { tag: 'form', description: 'Form container' },
    ],
    examples: [
      {
        title: 'Country Selector',
        code: '<label for="country">Country:</label>\n<select id="country" name="country">\n  <option value="">Choose a country</option>\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n  <option value="uk">United Kingdom</option>\n</select>',
        description: 'Dropdown with country options',
      },
      {
        title: 'Size Selection',
        code: '<select name="size">\n  <option value="s">Small</option>\n  <option value="m" selected>Medium</option>\n  <option value="l">Large</option>\n</select>',
        description: 'Size selector with default selection',
      },
    ],
    exercises: [
      {
        title: 'Create Color Picker',
        instruction: 'Create a select with color options: Red, Green, Blue',
        starterCode: '<!-- Add select with color options -->',
        solution:
          '<select name="color">\n  <option value="red">Red</option>\n  <option value="green">Green</option>\n  <option value="blue">Blue</option>\n</select>',
        hints: [
          'Use <select> tag',
          'Add <option> for each color',
          'Include value attributes',
        ],
      },
    ],
    tips: [
      'Always include option elements inside',
      'Use value attribute for form submission',
      'Add empty option for "choose one" prompt',
    ],
    commonMistakes: [
      'Forgetting option tags inside select',
      'Not providing value attributes',
      'Using select for too many options (consider search instead)',
    ],
  },
  option: {
    name: 'option',
    definition:
      'The <option> tag defines an option in a dropdown list. Each option represents a choice users can select.',
    whenToUse: [
      'Inside select elements',
      'To define individual choices',
      'For dropdown menu items',
    ],
    syntax: '<option value="choice1">Display Text</option>',
    attributes: [
      {
        name: 'value',
        description: 'Value sent when form is submitted',
        required: false,
        example: 'value="option1"',
      },
      {
        name: 'selected',
        description: 'Pre-selects this option',
        required: false,
        example: 'selected',
      },
      {
        name: 'disabled',
        description: 'Makes option unselectable',
        required: false,
        example: 'disabled',
      },
    ],
    relatedTags: [
      { tag: 'select', description: 'Dropdown container' },
      { tag: 'optgroup', description: 'Group of related options' },
    ],
    examples: [
      {
        title: 'Basic Options',
        code: '<select name="fruit">\n  <option value="apple">Apple</option>\n  <option value="banana" selected>Banana</option>\n  <option value="orange">Orange</option>\n</select>',
        description: 'Options with one pre-selected',
      },
      {
        title: 'Disabled Option',
        code: '<option value="" disabled selected>Choose an option</option>',
        description: 'Placeholder option that cannot be selected',
      },
    ],
    exercises: [
      {
        title: 'Add Pizza Sizes',
        instruction: 'Create options for Small, Medium, and Large pizzas',
        starterCode:
          '<select name="pizza-size">\n  <!-- Add options here -->\n</select>',
        solution:
          '<select name="pizza-size">\n  <option value="small">Small</option>\n  <option value="medium">Medium</option>\n  <option value="large">Large</option>\n</select>',
        hints: [
          'Add three <option> tags',
          'Use lowercase values',
          'Capitalize display text',
        ],
      },
    ],
    tips: [
      'Value attribute is what gets sent to server',
      'Text between tags is what user sees',
      'Use selected attribute to set default',
    ],
    commonMistakes: [
      'Using option outside of select',
      'Forgetting value attribute',
      'Using multiple selected options in single-select',
    ],
  },
  header: {
    name: 'header',
    definition:
      'The <header> tag represents introductory content. It typically contains navigation, logos, or heading information.',
    whenToUse: [
      'For page headers with logo and navigation',
      'Article or section introductions',
      'At the top of content areas',
    ],
    syntax:
      '<header>\n  <h1>Site Title</h1>\n  <nav>Navigation here</nav>\n</header>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="site-header"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="main-header"',
      },
      {
        name: 'role',
        description: 'ARIA role for accessibility',
        required: false,
        example: 'role="banner"',
      },
    ],
    relatedTags: [
      { tag: 'nav', description: 'Navigation links' },
      { tag: 'main', description: 'Main content area' },
      { tag: 'footer', description: 'Footer content' },
      { tag: 'section', description: 'Content sections' },
    ],
    examples: [
      {
        title: 'Site Header',
        code: '<header>\n  <h1>My Website</h1>\n  <nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n    <a href="/contact">Contact</a>\n  </nav>\n</header>',
        description: 'Website header with title and navigation',
      },
      {
        title: 'Article Header',
        code: '<article>\n  <header>\n    <h2>Article Title</h2>\n    <p>Published on March 1, 2024</p>\n  </header>\n  <p>Article content...</p>\n</article>',
        description: 'Header within an article',
      },
    ],
    exercises: [
      {
        title: 'Create Page Header',
        instruction:
          'Create a header with a site title and two navigation links',
        starterCode: '<!-- Create page header -->',
        solution:
          '<header>\n  <h1>My Blog</h1>\n  <nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n  </nav>\n</header>',
        hints: [
          'Start with <header>',
          'Add h1 for title',
          'Include nav with links',
        ],
      },
    ],
    tips: [
      'Can be used multiple times on a page',
      'Great for semantic HTML structure',
      'Often contains navigation and branding',
    ],
    commonMistakes: [
      'Using only one header per page (can have multiple)',
      'Putting footer content in header',
      'Not including relevant heading elements',
    ],
  },
  nav: {
    name: 'nav',
    definition:
      'The <nav> tag represents a section with navigation links. It helps users and search engines identify navigation areas.',
    whenToUse: [
      'For main site navigation',
      'Breadcrumb navigation',
      'Table of contents links',
    ],
    syntax:
      '<nav>\n  <a href="/home">Home</a>\n  <a href="/about">About</a>\n</nav>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="main-nav"',
      },
      {
        name: 'aria-label',
        description: 'Accessible label for navigation',
        required: false,
        example: 'aria-label="Main navigation"',
      },
      {
        name: 'role',
        description: 'ARIA role (usually navigation)',
        required: false,
        example: 'role="navigation"',
      },
    ],
    relatedTags: [
      { tag: 'a', description: 'Navigation links' },
      { tag: 'ul', description: 'List of navigation items' },
      { tag: 'header', description: 'Header containing navigation' },
      { tag: 'aside', description: 'Secondary navigation' },
    ],
    examples: [
      {
        title: 'Main Navigation',
        code: '<nav>\n  <a href="/">Home</a>\n  <a href="/products">Products</a>\n  <a href="/services">Services</a>\n  <a href="/contact">Contact</a>\n</nav>',
        description: 'Primary site navigation',
      },
      {
        title: 'List Navigation',
        code: '<nav>\n  <ul>\n    <li><a href="/home">Home</a></li>\n    <li><a href="/blog">Blog</a></li>\n    <li><a href="/about">About</a></li>\n  </ul>\n</nav>',
        description: 'Navigation using an unordered list',
      },
    ],
    exercises: [
      {
        title: 'Create Menu Navigation',
        instruction: 'Create navigation with Home, Menu, and Order links',
        starterCode: '<!-- Add navigation -->',
        solution:
          '<nav>\n  <a href="/home">Home</a>\n  <a href="/menu">Menu</a>\n  <a href="/order">Order</a>\n</nav>',
        hints: [
          'Use <nav> tags',
          'Add three <a> links',
          'Include href attributes',
        ],
      },
    ],
    tips: [
      'Use for groups of navigation links',
      'Can have multiple nav sections per page',
      'Improves accessibility and SEO',
    ],
    commonMistakes: [
      'Using nav for non-navigation links',
      'Wrapping every single link in nav',
      'Not providing accessible labels for multiple navs',
    ],
  },
  main: {
    name: 'main',
    definition:
      'The <main> tag represents the main content of the page. There should only be one main element per page.',
    whenToUse: [
      'For the primary content area',
      'Content unique to this page',
      'Everything except headers, footers, and sidebars',
    ],
    syntax:
      '<main>\n  <h1>Page Title</h1>\n  <p>Main content here</p>\n</main>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="content-area"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="main-content"',
      },
      {
        name: 'role',
        description: 'ARIA role (usually main)',
        required: false,
        example: 'role="main"',
      },
    ],
    relatedTags: [
      { tag: 'header', description: 'Page header' },
      { tag: 'footer', description: 'Page footer' },
      { tag: 'aside', description: 'Sidebar content' },
      { tag: 'section', description: 'Content sections within main' },
    ],
    examples: [
      {
        title: 'Basic Main Content',
        code: '<main>\n  <h1>Welcome to Our Site</h1>\n  <p>This is the main content area of our homepage.</p>\n  <section>\n    <h2>Featured Products</h2>\n    <p>Check out our latest offerings...</p>\n  </section>\n</main>',
        description: 'Main content area with sections',
      },
      {
        title: 'Article Page',
        code: '<main>\n  <article>\n    <h1>Article Title</h1>\n    <p>Article content goes here...</p>\n  </article>\n</main>',
        description: 'Main content containing an article',
      },
    ],
    exercises: [
      {
        title: 'Create Main Content Area',
        instruction: 'Create a main element with a heading and paragraph',
        starterCode: '<!-- Add main content area -->',
        solution:
          '<main>\n  <h1>About Us</h1>\n  <p>Learn more about our company and mission.</p>\n</main>',
        hints: [
          'Start with <main>',
          'Add h1 heading',
          'Include descriptive paragraph',
        ],
      },
    ],
    tips: [
      'Only one main element per page',
      'Skip to main content for accessibility',
      "Contains the page's unique content",
    ],
    commonMistakes: [
      'Using multiple main elements',
      'Including headers/footers inside main',
      'Putting navigation inside main',
    ],
  },
  footer: {
    name: 'footer',
    definition:
      'The <footer> tag represents footer content. It typically contains copyright info, links, or contact details.',
    whenToUse: [
      'For page footers with copyright info',
      'Contact information and links',
      'Article or section endings',
    ],
    syntax: '<footer>\n  <p>&copy; 2024 Company Name</p>\n</footer>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="site-footer"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="main-footer"',
      },
      {
        name: 'role',
        description: 'ARIA role for accessibility',
        required: false,
        example: 'role="contentinfo"',
      },
    ],
    relatedTags: [
      { tag: 'header', description: 'Header content' },
      { tag: 'main', description: 'Main content area' },
      { tag: 'nav', description: 'Footer navigation' },
      { tag: 'section', description: 'Footer sections' },
    ],
    examples: [
      {
        title: 'Site Footer',
        code: '<footer>\n  <p>&copy; 2024 My Website. All rights reserved.</p>\n  <nav>\n    <a href="/privacy">Privacy Policy</a>\n    <a href="/terms">Terms of Service</a>\n  </nav>\n</footer>',
        description: 'Website footer with copyright and links',
      },
      {
        title: 'Contact Footer',
        code: '<footer>\n  <h3>Contact Us</h3>\n  <p>Email: info@company.com</p>\n  <p>Phone: (555) 123-4567</p>\n</footer>',
        description: 'Footer with contact information',
      },
    ],
    exercises: [
      {
        title: 'Create Simple Footer',
        instruction: 'Create a footer with copyright and a privacy link',
        starterCode: '<!-- Add footer -->',
        solution:
          '<footer>\n  <p>&copy; 2024 My Site</p>\n  <a href="/privacy">Privacy Policy</a>\n</footer>',
        hints: [
          'Use <footer> tags',
          'Add copyright symbol &copy;',
          'Include privacy link',
        ],
      },
    ],
    tips: [
      'Can have multiple footers per page',
      'Good for copyright and legal links',
      'Often contains secondary navigation',
    ],
    commonMistakes: [
      'Putting main content in footer',
      'Using footer for styling instead of semantic meaning',
      'Not including relevant footer information',
    ],
  },
  section: {
    name: 'section',
    definition:
      'The <section> tag represents a distinct section of content. It groups related content together with a theme.',
    whenToUse: [
      'For distinct content sections',
      'Chapters or topics in articles',
      'Different areas of a webpage',
    ],
    syntax:
      '<section>\n  <h2>Section Title</h2>\n  <p>Section content</p>\n</section>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="features-section"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="about-section"',
      },
      {
        name: 'aria-label',
        description: 'Accessible label for section',
        required: false,
        example: 'aria-label="Product features"',
      },
    ],
    relatedTags: [
      { tag: 'article', description: 'Self-contained content' },
      { tag: 'div', description: 'Generic container' },
      { tag: 'aside', description: 'Sidebar content' },
      { tag: 'main', description: 'Main content container' },
    ],
    examples: [
      {
        title: 'Features Section',
        code: '<section>\n  <h2>Our Features</h2>\n  <p>Discover what makes our product special.</p>\n  <ul>\n    <li>Fast performance</li>\n    <li>Easy to use</li>\n    <li>Great support</li>\n  </ul>\n</section>',
        description: 'Section highlighting product features',
      },
      {
        title: 'Contact Section',
        code: '<section id="contact">\n  <h2>Get in Touch</h2>\n  <p>We\'d love to hear from you!</p>\n  <form>\n    <!-- contact form here -->\n  </form>\n</section>',
        description: 'Contact section with form',
      },
    ],
    exercises: [
      {
        title: 'Create About Section',
        instruction:
          'Create a section about services with heading and description',
        starterCode: '<!-- Add services section -->',
        solution:
          '<section>\n  <h2>Our Services</h2>\n  <p>We provide high-quality services to meet your needs.</p>\n</section>',
        hints: [
          'Use <section> tags',
          'Add h2 heading',
          'Include descriptive paragraph',
        ],
      },
    ],
    tips: [
      'Should have a heading (h1-h6)',
      'Groups thematically related content',
      'Better than div for semantic meaning',
    ],
    commonMistakes: [
      'Using section without a heading',
      'Using section for styling only',
      'Confusing section with article',
    ],
  },
  article: {
    name: 'article',
    definition:
      'The <article> tag represents a complete, self-contained piece of content that could stand alone.',
    whenToUse: [
      'For blog posts or news articles',
      'Product reviews or testimonials',
      'Independent content pieces',
    ],
    syntax:
      '<article>\n  <h2>Article Title</h2>\n  <p>Article content</p>\n</article>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="blog-post"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="article-123"',
      },
    ],
    relatedTags: [
      { tag: 'section', description: 'Thematic content sections' },
      { tag: 'header', description: 'Article header' },
      { tag: 'footer', description: 'Article footer' },
      { tag: 'aside', description: 'Related sidebar content' },
    ],
    examples: [
      {
        title: 'Blog Post',
        code: '<article>\n  <header>\n    <h1>10 Tips for Better HTML</h1>\n    <p>Published on March 15, 2024</p>\n  </header>\n  <p>Here are some great tips for writing better HTML...</p>\n  <footer>\n    <p>Tags: HTML, Web Development</p>\n  </footer>\n</article>',
        description: 'Complete blog post with header and footer',
      },
      {
        title: 'Product Review',
        code: '<article>\n  <h2>Amazing Product Review</h2>\n  <p>This product exceeded my expectations...</p>\n  <p>Rating: 5/5 stars</p>\n</article>',
        description: 'Self-contained product review',
      },
    ],
    exercises: [
      {
        title: 'Write a News Article',
        instruction:
          'Create an article about a local event with title and content',
        starterCode: '<!-- Add news article -->',
        solution:
          '<article>\n  <h2>Local Festival This Weekend</h2>\n  <p>The annual spring festival will take place this Saturday in the town square.</p>\n</article>',
        hints: [
          'Use <article> tags',
          'Add descriptive heading',
          'Include event details',
        ],
      },
    ],
    tips: [
      'Content should make sense on its own',
      'Can contain header and footer elements',
      'Perfect for blog posts and news',
    ],
    commonMistakes: [
      'Using article for non-standalone content',
      'Confusing article with section',
      'Not including a proper heading',
    ],
  },
  aside: {
    name: 'aside',
    definition:
      'The <aside> tag represents content that is related to the main content but separate from it, like a sidebar.',
    whenToUse: [
      'For sidebar content',
      'Related links or advertisements',
      'Author information or pull quotes',
    ],
    syntax:
      '<aside>\n  <h3>Related Links</h3>\n  <ul>\n    <li><a href="#">Link 1</a></li>\n  </ul>\n</aside>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="sidebar"',
      },
      {
        name: 'id',
        description: 'Unique identifier',
        required: false,
        example: 'id="related-content"',
      },
    ],
    relatedTags: [
      { tag: 'main', description: 'Main content area' },
      { tag: 'section', description: 'Content sections' },
      { tag: 'article', description: 'Self-contained content' },
      { tag: 'nav', description: 'Navigation links' },
    ],
    examples: [
      {
        title: 'Sidebar with Links',
        code: '<aside>\n  <h3>Related Articles</h3>\n  <ul>\n    <li><a href="/article1">HTML Basics</a></li>\n    <li><a href="/article2">CSS Tips</a></li>\n    <li><a href="/article3">JavaScript Guide</a></li>\n  </ul>\n</aside>',
        description: 'Sidebar with related article links',
      },
      {
        title: 'Author Bio',
        code: '<aside>\n  <h4>About the Author</h4>\n  <p>John Smith is a web developer with 10 years of experience.</p>\n</aside>',
        description: 'Author information sidebar',
      },
    ],
    exercises: [
      {
        title: 'Create a Tip Sidebar',
        instruction: 'Create an aside with a quick tip about HTML',
        starterCode: '<!-- Add tip sidebar -->',
        solution:
          '<aside>\n  <h4>Quick Tip</h4>\n  <p>Always use semantic HTML tags for better accessibility!</p>\n</aside>',
        hints: [
          'Use <aside> tags',
          'Add a tip heading',
          'Include helpful advice',
        ],
      },
    ],
    tips: [
      'Content should be related but not essential',
      'Perfect for sidebars and pull quotes',
      'Can be positioned anywhere on the page',
    ],
    commonMistakes: [
      'Using aside for main content',
      'Putting unrelated content in aside',
      'Not providing a heading for aside content',
    ],
  },
  video: {
    name: 'video',
    definition:
      'The <video> tag embeds video content in your webpage. It allows users to play videos directly in the browser.',
    whenToUse: [
      'To display video content',
      'Product demonstrations',
      'Educational or entertainment videos',
    ],
    syntax:
      '<video src="movie.mp4" controls>\n  Your browser does not support video.\n</video>',
    attributes: [
      {
        name: 'src',
        description: 'Path to the video file',
        required: false,
        example: 'src="video.mp4"',
      },
      {
        name: 'controls',
        description: 'Shows play/pause controls',
        required: false,
        example: 'controls',
      },
      {
        name: 'autoplay',
        description: 'Automatically starts playing',
        required: false,
        example: 'autoplay',
      },
      {
        name: 'loop',
        description: 'Repeats the video',
        required: false,
        example: 'loop',
      },
      {
        name: 'muted',
        description: 'Starts muted',
        required: false,
        example: 'muted',
      },
      {
        name: 'width',
        description: 'Video width',
        required: false,
        example: 'width="320"',
      },
      {
        name: 'height',
        description: 'Video height',
        required: false,
        example: 'height="240"',
      },
    ],
    relatedTags: [
      { tag: 'audio', description: 'Audio content' },
      { tag: 'source', description: 'Multiple video sources' },
      { tag: 'track', description: 'Subtitles and captions' },
    ],
    examples: [
      {
        title: 'Basic Video',
        code: '<video src="demo.mp4" controls width="400">\n  Your browser does not support the video tag.\n</video>',
        description: 'Simple video with controls',
      },
      {
        title: 'Multiple Sources',
        code: '<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <source src="movie.ogg" type="video/ogg">\n  Your browser does not support video.\n</video>',
        description: 'Video with multiple format options',
      },
    ],
    exercises: [
      {
        title: 'Add Video Player',
        instruction: 'Create a video player with controls for "tutorial.mp4"',
        starterCode: '<!-- Add video player -->',
        solution:
          '<video src="tutorial.mp4" controls>\n  Your browser does not support video.\n</video>',
        hints: [
          'Use src attribute',
          'Add controls attribute',
          'Include fallback text',
        ],
      },
    ],
    tips: [
      'Always include controls for user experience',
      'Provide fallback text for unsupported browsers',
      'Consider autoplay policies in browsers',
    ],
    commonMistakes: [
      'Forgetting controls attribute',
      'Not providing fallback content',
      'Using autoplay without muted (blocked by browsers)',
    ],
  },
  audio: {
    name: 'audio',
    definition:
      'The <audio> tag embeds audio content in your webpage. Users can play sound files directly in the browser.',
    whenToUse: [
      'For music or sound effects',
      'Podcast episodes',
      'Audio announcements or instructions',
    ],
    syntax:
      '<audio src="sound.mp3" controls>\n  Your browser does not support audio.\n</audio>',
    attributes: [
      {
        name: 'src',
        description: 'Path to the audio file',
        required: false,
        example: 'src="audio.mp3"',
      },
      {
        name: 'controls',
        description: 'Shows play/pause controls',
        required: false,
        example: 'controls',
      },
      {
        name: 'autoplay',
        description: 'Automatically starts playing',
        required: false,
        example: 'autoplay',
      },
      {
        name: 'loop',
        description: 'Repeats the audio',
        required: false,
        example: 'loop',
      },
      {
        name: 'muted',
        description: 'Starts muted',
        required: false,
        example: 'muted',
      },
    ],
    relatedTags: [
      { tag: 'video', description: 'Video content' },
      { tag: 'source', description: 'Multiple audio sources' },
    ],
    examples: [
      {
        title: 'Basic Audio Player',
        code: '<audio src="podcast.mp3" controls>\n  Your browser does not support the audio element.\n</audio>',
        description: 'Simple audio player with controls',
      },
      {
        title: 'Background Music',
        code: '<audio src="background.mp3" autoplay loop muted>\n  Background music not supported.\n</audio>',
        description: 'Background audio that loops (starts muted)',
      },
    ],
    exercises: [
      {
        title: 'Create Music Player',
        instruction: 'Add an audio player for "song.mp3" with controls',
        starterCode: '<!-- Add audio player -->',
        solution:
          '<audio src="song.mp3" controls>\n  Your browser does not support audio.\n</audio>',
        hints: [
          'Use src for audio file',
          'Add controls attribute',
          'Include fallback message',
        ],
      },
    ],
    tips: [
      'Always provide controls for accessibility',
      'Include fallback text for older browsers',
      'Be mindful of autoplay policies',
    ],
    commonMistakes: [
      'Using autoplay without user interaction',
      'Not providing fallback content',
      'Forgetting controls for user control',
    ],
  },
  canvas: {
    name: 'canvas',
    definition:
      'The <canvas> tag provides a drawing area for graphics. You can draw shapes, images, and animations using JavaScript.',
    whenToUse: [
      'For drawing graphics with JavaScript',
      'Creating charts and graphs',
      'Building games or animations',
    ],
    syntax:
      '<canvas id="myCanvas" width="400" height="300">\n  Canvas not supported.\n</canvas>',
    attributes: [
      {
        name: 'width',
        description: 'Canvas width in pixels',
        required: false,
        example: 'width="800"',
      },
      {
        name: 'height',
        description: 'Canvas height in pixels',
        required: false,
        example: 'height="600"',
      },
      {
        name: 'id',
        description: 'Unique identifier for JavaScript',
        required: false,
        example: 'id="drawing-canvas"',
      },
    ],
    relatedTags: [
      { tag: 'svg', description: 'Vector graphics alternative' },
      { tag: 'img', description: 'Static image display' },
    ],
    examples: [
      {
        title: 'Basic Canvas',
        code: '<canvas id="drawingCanvas" width="500" height="300">\n  Your browser does not support the canvas element.\n</canvas>',
        description: 'Empty canvas ready for drawing',
      },
      {
        title: 'Canvas with JavaScript',
        code: '<canvas id="chart" width="400" height="200"></canvas>\n<script>\n  const canvas = document.getElementById(\'chart\');\n  const ctx = canvas.getContext(\'2d\');\n  ctx.fillStyle = \'blue\';\n  ctx.fillRect(20, 20, 100, 50);\n</script>',
        description: 'Canvas with a blue rectangle drawn using JavaScript',
      },
    ],
    exercises: [
      {
        title: 'Create Drawing Canvas',
        instruction: 'Create a canvas for drawing that is 600x400 pixels',
        starterCode: '<!-- Add canvas element -->',
        solution:
          '<canvas id="myDrawing" width="600" height="400">\n  Canvas not supported in your browser.\n</canvas>',
        hints: [
          'Set width and height attributes',
          'Add an id for JavaScript',
          'Include fallback text',
        ],
      },
    ],
    tips: [
      'Requires JavaScript to draw anything',
      'Set width/height with attributes, not CSS',
      'Provide fallback content for unsupported browsers',
    ],
    commonMistakes: [
      'Setting size with CSS instead of attributes',
      'Forgetting to include fallback content',
      'Not providing an id for JavaScript access',
    ],
  },
  iframe: {
    name: 'iframe',
    definition:
      "The <iframe> tag embeds another webpage or document inside your current page. It's like a window to another website.",
    whenToUse: [
      'To embed YouTube videos or maps',
      'Including external content',
      'Displaying other websites safely',
    ],
    syntax:
      '<iframe src="https://example.com" width="400" height="300">\n  Iframe not supported.\n</iframe>',
    attributes: [
      {
        name: 'src',
        description: 'URL of the page to embed',
        required: true,
        example: 'src="https://www.youtube.com/embed/video-id"',
      },
      {
        name: 'width',
        description: 'Frame width',
        required: false,
        example: 'width="560"',
      },
      {
        name: 'height',
        description: 'Frame height',
        required: false,
        example: 'height="315"',
      },
      {
        name: 'title',
        description: 'Accessible description',
        required: false,
        example: 'title="YouTube video player"',
      },
      {
        name: 'frameborder',
        description: 'Border around frame (deprecated)',
        required: false,
        example: 'frameborder="0"',
      },
    ],
    relatedTags: [
      { tag: 'embed', description: 'Embed multimedia content' },
      { tag: 'object', description: 'Embed objects' },
    ],
    examples: [
      {
        title: 'YouTube Video',
        code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player">\n  Your browser does not support iframes.\n</iframe>',
        description: 'Embedded YouTube video',
      },
      {
        title: 'Google Maps',
        code: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..." width="400" height="300" title="Map location">\n  Map cannot be displayed.\n</iframe>',
        description: 'Embedded Google Maps location',
      },
    ],
    exercises: [
      {
        title: 'Embed a Website',
        instruction: 'Create an iframe to display "https://www.example.com"',
        starterCode: '<!-- Add iframe -->',
        solution:
          '<iframe src="https://www.example.com" width="500" height="400" title="Example website">\n  Iframe not supported.\n</iframe>',
        hints: [
          'Use src attribute for URL',
          'Set width and height',
          'Add title for accessibility',
        ],
      },
    ],
    tips: [
      'Always include title attribute for accessibility',
      'Be careful with security when embedding external content',
      'Some sites prevent being embedded in iframes',
    ],
    commonMistakes: [
      'Not including title attribute',
      'Forgetting fallback content',
      'Using deprecated frameborder attribute',
    ],
  },
  thead: {
    name: 'thead',
    definition:
      'The <thead> tag groups header content in a table. It contains the table headers and helps organize table structure.',
    whenToUse: [
      'To group table header rows',
      'When you need table headers separate from data',
      'For better table semantics and styling',
    ],
    syntax:
      '<thead>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n</thead>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="table-header"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background-color: #f0f0f0;"',
      },
    ],
    relatedTags: [
      { tag: 'table', description: 'Table container' },
      { tag: 'tbody', description: 'Table body content' },
      { tag: 'tr', description: 'Table rows' },
      { tag: 'th', description: 'Table header cells' },
    ],
    examples: [
      {
        title: 'Table with Header',
        code: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>City</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>John</td>\n      <td>25</td>\n      <td>New York</td>\n    </tr>\n  </tbody>\n</table>',
        description: 'Complete table with separated header and body',
      },
    ],
    exercises: [
      {
        title: 'Create Table Header',
        instruction:
          'Create a thead with headers for Product, Price, and Stock',
        starterCode: '<table>\n  <!-- Add thead here -->\n</table>',
        solution:
          '<table>\n  <thead>\n    <tr>\n      <th>Product</th>\n      <th>Price</th>\n      <th>Stock</th>\n    </tr>\n  </thead>\n</table>',
        hints: [
          'Use <thead> to wrap headers',
          'Add <tr> for the row',
          'Use <th> for each header',
        ],
      },
    ],
    tips: [
      'Should contain only tr elements with th cells',
      'Helps screen readers navigate tables',
      'Can be styled separately from tbody',
    ],
    commonMistakes: [
      'Using td instead of th in thead',
      'Putting tbody content in thead',
      'Not including thead when you have table headers',
    ],
  },
  tbody: {
    name: 'tbody',
    definition:
      'The <tbody> tag groups the body content in a table. It contains the main data rows separate from headers.',
    whenToUse: [
      'To group main table data rows',
      'When separating table content from headers',
      'For better table structure and styling',
    ],
    syntax:
      '<tbody>\n  <tr>\n    <td>Data 1</td>\n    <td>Data 2</td>\n  </tr>\n</tbody>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="table-body"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background-color: white;"',
      },
    ],
    relatedTags: [
      { tag: 'table', description: 'Table container' },
      { tag: 'thead', description: 'Table header group' },
      { tag: 'tr', description: 'Table rows' },
      { tag: 'td', description: 'Table data cells' },
    ],
    examples: [
      {
        title: 'Table Body with Data',
        code: '<table>\n  <thead>\n    <tr><th>Name</th><th>Score</th></tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>95</td>\n    </tr>\n    <tr>\n      <td>Bob</td>\n      <td>87</td>\n    </tr>\n  </tbody>\n</table>',
        description: 'Table with separated header and body data',
      },
    ],
    exercises: [
      {
        title: 'Add Table Data',
        instruction: 'Create tbody with two rows of product data',
        starterCode:
          '<table>\n  <thead>\n    <tr><th>Item</th><th>Price</th></tr>\n  </thead>\n  <!-- Add tbody here -->\n</table>',
        solution:
          '<table>\n  <thead>\n    <tr><th>Item</th><th>Price</th></tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Apple</td>\n      <td>$1.00</td>\n    </tr>\n    <tr>\n      <td>Banana</td>\n      <td>$0.50</td>\n    </tr>\n  </tbody>\n</table>',
        hints: [
          'Use <tbody> to wrap data rows',
          'Add <tr> for each row',
          'Use <td> for data cells',
        ],
      },
    ],
    tips: [
      'Contains the main table data',
      'Use td elements for data cells',
      'Can have multiple tbody sections in one table',
    ],
    commonMistakes: [
      'Using th instead of td for data',
      'Mixing header and data content',
      'Not grouping related rows together',
    ],
  },
  tr: {
    name: 'tr',
    definition:
      'The <tr> tag defines a table row. It contains table cells (th or td) that make up the columns.',
    whenToUse: [
      'To create rows in tables',
      'Inside thead, tbody, or table elements',
      'For each horizontal row of data',
    ],
    syntax: '<tr>\n  <td>Cell 1</td>\n  <td>Cell 2</td>\n</tr>',
    attributes: [
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="data-row"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="background-color: #f9f9f9;"',
      },
    ],
    relatedTags: [
      { tag: 'table', description: 'Table container' },
      { tag: 'td', description: 'Table data cell' },
      { tag: 'th', description: 'Table header cell' },
      { tag: 'thead', description: 'Table header group' },
      { tag: 'tbody', description: 'Table body group' },
    ],
    examples: [
      {
        title: 'Data Row',
        code: '<tr>\n  <td>John Smith</td>\n  <td>Manager</td>\n  <td>$75,000</td>\n</tr>',
        description: 'Row with employee information',
      },
      {
        title: 'Header Row',
        code: '<tr>\n  <th>Name</th>\n  <th>Position</th>\n  <th>Salary</th>\n</tr>',
        description: 'Header row with column titles',
      },
    ],
    exercises: [
      {
        title: 'Create Product Row',
        instruction:
          'Create a table row with product name, price, and quantity',
        starterCode: '<!-- Add table row -->',
        solution:
          '<tr>\n  <td>Laptop</td>\n  <td>$999</td>\n  <td>5</td>\n</tr>',
        hints: [
          'Use <tr> for the row',
          'Add three <td> elements',
          'Include product details',
        ],
      },
    ],
    tips: [
      'Must contain th or td elements',
      'Each row should have same number of cells',
      'Use th for headers, td for data',
    ],
    commonMistakes: [
      'Putting content directly in tr without td/th',
      'Inconsistent number of cells per row',
      'Using tr outside of table structure',
    ],
  },
  th: {
    name: 'th',
    definition:
      "The <th> tag defines a header cell in a table. It's bold and centered by default, making it perfect for column titles.",
    whenToUse: [
      'For table column headers',
      'Row headers in data tables',
      'Any cell that describes other cells',
    ],
    syntax: '<th>Column Header</th>',
    attributes: [
      {
        name: 'scope',
        description: 'Defines what the header applies to',
        required: false,
        example: 'scope="col"',
      },
      {
        name: 'colspan',
        description: 'Number of columns to span',
        required: false,
        example: 'colspan="2"',
      },
      {
        name: 'rowspan',
        description: 'Number of rows to span',
        required: false,
        example: 'rowspan="3"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="header-cell"',
      },
    ],
    relatedTags: [
      { tag: 'td', description: 'Table data cell' },
      { tag: 'tr', description: 'Table row container' },
      { tag: 'thead', description: 'Table header group' },
      { tag: 'table', description: 'Table container' },
    ],
    examples: [
      {
        title: 'Column Headers',
        code: '<tr>\n  <th scope="col">Product</th>\n  <th scope="col">Price</th>\n  <th scope="col">Quantity</th>\n</tr>',
        description: 'Header row with column titles',
      },
      {
        title: 'Spanning Header',
        code: '<tr>\n  <th colspan="2">Sales Data</th>\n</tr>\n<tr>\n  <th>Q1</th>\n  <th>Q2</th>\n</tr>',
        description: 'Header spanning multiple columns',
      },
    ],
    exercises: [
      {
        title: 'Create Table Headers',
        instruction:
          'Create headers for a student grade table: Name, Math, Science, English',
        starterCode: '<tr>\n  <!-- Add header cells -->\n</tr>',
        solution:
          '<tr>\n  <th>Name</th>\n  <th>Math</th>\n  <th>Science</th>\n  <th>English</th>\n</tr>',
        hints: [
          'Use <th> for each header',
          'Add four header cells',
          'Use descriptive text',
        ],
      },
    ],
    tips: [
      'Automatically bold and centered',
      'Use scope attribute for accessibility',
      'Can span multiple columns or rows',
    ],
    commonMistakes: [
      'Using td for headers instead of th',
      'Not using scope attribute for complex tables',
      'Forgetting to make headers descriptive',
    ],
  },
  td: {
    name: 'td',
    definition:
      'The <td> tag defines a standard data cell in a table. It contains the actual information displayed in table rows.',
    whenToUse: [
      'For regular table data',
      'Content that goes under column headers',
      'Any non-header cell in a table',
    ],
    syntax: '<td>Cell data here</td>',
    attributes: [
      {
        name: 'colspan',
        description: 'Number of columns to span',
        required: false,
        example: 'colspan="2"',
      },
      {
        name: 'rowspan',
        description: 'Number of rows to span',
        required: false,
        example: 'rowspan="3"',
      },
      {
        name: 'class',
        description: 'CSS classes for styling',
        required: false,
        example: 'class="data-cell"',
      },
      {
        name: 'style',
        description: 'Inline CSS styles',
        required: false,
        example: 'style="text-align: center;"',
      },
    ],
    relatedTags: [
      { tag: 'th', description: 'Table header cell' },
      { tag: 'tr', description: 'Table row container' },
      { tag: 'tbody', description: 'Table body group' },
      { tag: 'table', description: 'Table container' },
    ],
    examples: [
      {
        title: 'Data Cells',
        code: '<tr>\n  <td>John Doe</td>\n  <td>30</td>\n  <td>Engineer</td>\n</tr>',
        description: 'Row with employee data in cells',
      },
      {
        title: 'Spanning Cell',
        code: '<tr>\n  <td>Product A</td>\n  <td colspan="2">Out of Stock</td>\n</tr>',
        description: 'Cell spanning two columns',
      },
    ],
    exercises: [
      {
        title: 'Add Student Data',
        instruction: 'Create a row with student data: Alice, 95, 88, 92',
        starterCode: '<tr>\n  <!-- Add data cells -->\n</tr>',
        solution:
          '<tr>\n  <td>Alice</td>\n  <td>95</td>\n  <td>88</td>\n  <td>92</td>\n</tr>',
        hints: [
          'Use <td> for each data cell',
          'Add four cells',
          'Include name and grades',
        ],
      },
    ],
    tips: [
      'Contains actual table data',
      'Can span multiple columns or rows',
      'Aligns left by default',
    ],
    commonMistakes: [
      'Using th for regular data',
      'Inconsistent number of cells per row',
      'Putting complex layouts inside td',
    ],
  },
};

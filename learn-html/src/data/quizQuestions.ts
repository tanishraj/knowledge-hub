export interface Question {
  id: string;
  category:
    | 'objective'
    | 'attributes'
    | 'complete-code'
    | 'practical-easy'
    | 'practical-medium'
    | 'practical-hard';
  type:
    | 'single-choice'
    | 'multiple-choice'
    | 'fill-blank'
    | 'code-completion'
    | 'practical';
  question: string;
  code?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: Question[] = [
  // 25 Objective Questions
  {
    id: 'obj-1',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation:
      'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.',
  },
  {
    id: 'obj-2',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element is used to define the title of a document?',
    options: ['<title>', '<head>', '<meta>', '<header>'],
    correctAnswer: '<title>',
    explanation:
      "The <title> element defines the title of the document, shown in the browser's title bar or page tab.",
  },
  {
    id: 'obj-3',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element is used for the largest heading?',
    options: ['<h1>', '<h6>', '<heading>', '<head>'],
    correctAnswer: '<h1>',
    explanation:
      'The <h1> element represents the largest heading, with headings ranging from <h1> to <h6>.',
  },
  {
    id: 'obj-4',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<br>', '<break>', '<lb>', '<newline>'],
    correctAnswer: '<br>',
    explanation:
      'The <br> element produces a line break in text (carriage-return).',
  },
  {
    id: 'obj-5',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which character is used to indicate an end tag?',
    options: ['/', '*', '<', '^'],
    correctAnswer: '/',
    explanation:
      'The forward slash (/) is used in closing tags, like </p> or </div>.',
  },
  {
    id: 'obj-6',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which HTML element defines the root of an HTML document?',
    options: ['<html>', '<root>', '<body>', '<head>'],
    correctAnswer: '<html>',
    explanation: 'The <html> element is the root element of an HTML page.',
  },
  {
    id: 'obj-7',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the correct HTML for creating a hyperlink?',
    options: [
      '<a href="url">link text</a>',
      '<link>url</link>',
      '<hyperlink>url</hyperlink>',
      '<url>link text</url>',
    ],
    correctAnswer: '<a href="url">link text</a>',
    explanation:
      'The <a> element with href attribute creates hyperlinks in HTML.',
  },
  {
    id: 'obj-8',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element is used to define an unordered list?',
    options: ['<ul>', '<ol>', '<list>', '<li>'],
    correctAnswer: '<ul>',
    explanation: 'The <ul> element defines an unordered (bulleted) list.',
  },
  {
    id: 'obj-9',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which doctype is correct for HTML5?',
    options: [
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML5>',
      '<!DOCTYPE html PUBLIC>',
      '<doctype html>',
    ],
    correctAnswer: '<!DOCTYPE html>',
    explanation: 'HTML5 uses the simple declaration <!DOCTYPE html>.',
  },
  {
    id: 'obj-10',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which HTML element is used to specify a footer for a document or section?',
    options: ['<footer>', '<bottom>', '<section>', '<foot>'],
    correctAnswer: '<footer>',
    explanation:
      'The <footer> element defines a footer for a document or section.',
  },
  {
    id: 'obj-11',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which input type defines a slider control in HTML5?',
    options: ['range', 'slider', 'scroll', 'control'],
    correctAnswer: 'range',
    explanation:
      'The input type="range" creates a slider control for selecting a value from a range.',
  },
  {
    id: 'obj-12',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the correct HTML element for playing video files?',
    options: ['<video>', '<movie>', '<media>', '<film>'],
    correctAnswer: '<video>',
    explanation: 'The <video> element is used to embed video content in HTML5.',
  },
  {
    id: 'obj-13',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element defines navigation links?',
    options: ['<nav>', '<navigate>', '<navigation>', '<menu>'],
    correctAnswer: '<nav>',
    explanation: 'The <nav> element defines a set of navigation links.',
  },
  {
    id: 'obj-14',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which element is used to define a description list?',
    options: ['<dl>', '<dd>', '<dt>', '<desc>'],
    correctAnswer: '<dl>',
    explanation:
      'The <dl> element defines a description list, with <dt> for terms and <dd> for descriptions.',
  },
  {
    id: 'obj-15',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the correct HTML for making a text area?',
    options: [
      '<textarea>',
      '<input type="textarea">',
      '<input type="text">',
      '<textbox>',
    ],
    correctAnswer: '<textarea>',
    explanation:
      'The <textarea> element defines a multi-line text input control.',
  },
  {
    id: 'obj-16',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which HTML element is used to display a scalar measurement within a range?',
    options: ['<meter>', '<measure>', '<gauge>', '<range>'],
    correctAnswer: '<meter>',
    explanation:
      'The <meter> element represents a scalar value within a known range.',
  },
  {
    id: 'obj-17',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which element is used to define important text?',
    options: ['<strong>', '<important>', '<b>', '<i>'],
    correctAnswer: '<strong>',
    explanation:
      'The <strong> element defines text with strong importance, typically displayed as bold.',
  },
  {
    id: 'obj-18',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which HTML5 element is used to define self-contained content?',
    options: ['<article>', '<section>', '<aside>', '<content>'],
    correctAnswer: '<article>',
    explanation:
      'The <article> element specifies independent, self-contained content.',
  },
  {
    id: 'obj-19',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the correct HTML for making a checkbox?',
    options: [
      '<input type="checkbox">',
      '<checkbox>',
      '<check>',
      '<input type="check">',
    ],
    correctAnswer: '<input type="checkbox">',
    explanation: 'The input element with type="checkbox" creates a checkbox.',
  },
  {
    id: 'obj-20',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element is used to define a table row?',
    options: ['<tr>', '<td>', '<table>', '<th>'],
    correctAnswer: '<tr>',
    explanation: 'The <tr> element defines a row in an HTML table.',
  },
  {
    id: 'obj-21',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Which element is used to define a container for an external application?',
    options: ['<embed>', '<object>', '<iframe>', '<applet>'],
    correctAnswer: '<embed>',
    explanation:
      'The <embed> element is used as a container for external applications or interactive content.',
  },
  {
    id: 'obj-22',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'What is the correct HTML element for defining a definition term?',
    options: ['<dt>', '<dd>', '<dl>', '<dfn>'],
    correctAnswer: '<dt>',
    explanation: 'The <dt> element defines a term in a description list.',
  },
  {
    id: 'obj-23',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which HTML element is used to define emphasized text?',
    options: ['<em>', '<i>', '<italic>', '<emphasis>'],
    correctAnswer: '<em>',
    explanation:
      'The <em> element defines emphasized text, typically displayed as italic.',
  },
  {
    id: 'obj-24',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to show the progress of a task?',
    options: ['<progress>', '<meter>', '<status>', '<loading>'],
    correctAnswer: '<progress>',
    explanation:
      'The <progress> element represents the completion progress of a task.',
  },
  {
    id: 'obj-25',
    category: 'objective',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which element defines a clickable area inside an image map?',
    options: ['<area>', '<map>', '<region>', '<zone>'],
    correctAnswer: '<area>',
    explanation:
      'The <area> element defines clickable areas within an image map.',
  },

  // 25 HTML Attributes Questions
  {
    id: 'attr-1',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which attribute specifies the URL of the page the link goes to?',
    options: ['href', 'src', 'link', 'url'],
    correctAnswer: 'href',
    explanation:
      'The href attribute specifies the URL of the page the link goes to.',
  },
  {
    id: 'attr-2',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute is used to provide an alternate text for an image?',
    options: ['alt', 'title', 'text', 'description'],
    correctAnswer: 'alt',
    explanation:
      'The alt attribute provides alternative text for an image if it cannot be displayed.',
  },
  {
    id: 'attr-3',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute specifies that an input field must be filled out before submitting?',
    options: ['required', 'mandatory', 'validate', 'must'],
    correctAnswer: 'required',
    explanation:
      'The required attribute specifies that an input field must be filled out before submitting the form.',
  },
  {
    id: 'attr-4',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which attribute is used to specify the width of an image?',
    options: ['width', 'size', 'w', 'length'],
    correctAnswer: 'width',
    explanation:
      'The width attribute specifies the width of an element, like an image.',
  },
  {
    id: 'attr-5',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which attribute specifies where to open the linked document?',
    options: ['target', 'window', 'open', 'location'],
    correctAnswer: 'target',
    explanation:
      'The target attribute specifies where to open the linked document (e.g., _blank for new window).',
  },
  {
    id: 'attr-6',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute provides a unique identifier for an HTML element?',
    options: ['id', 'name', 'key', 'identifier'],
    correctAnswer: 'id',
    explanation:
      'The id attribute provides a unique identifier for an HTML element.',
  },
  {
    id: 'attr-7',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute is used to specify the character encoding for the HTML document?',
    options: ['charset', 'encoding', 'char', 'code'],
    correctAnswer: 'charset',
    explanation:
      'The charset attribute specifies the character encoding for the HTML document.',
  },
  {
    id: 'attr-8',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which attribute makes an input field read-only?',
    options: ['readonly', 'disabled', 'locked', 'fixed'],
    correctAnswer: 'readonly',
    explanation:
      'The readonly attribute makes an input field read-only (cannot be modified).',
  },
  {
    id: 'attr-9',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute specifies the maximum number of characters allowed in an input?',
    options: ['maxlength', 'max', 'limit', 'size'],
    correctAnswer: 'maxlength',
    explanation:
      'The maxlength attribute specifies the maximum number of characters allowed in an input field.',
  },
  {
    id: 'attr-10',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute is used to group related options in a dropdown list?',
    options: ['optgroup', 'group', 'category', 'section'],
    correctAnswer: 'optgroup',
    explanation:
      'The optgroup element groups related options in a dropdown list.',
  },
  {
    id: 'attr-11',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Which attribute specifies a regular expression pattern for input validation?',
    options: ['pattern', 'regex', 'validate', 'format'],
    correctAnswer: 'pattern',
    explanation:
      'The pattern attribute specifies a regular expression that the input value is checked against.',
  },
  {
    id: 'attr-12',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute provides a hint about the expected value of an input field?',
    options: ['placeholder', 'hint', 'tip', 'example'],
    correctAnswer: 'placeholder',
    explanation:
      'The placeholder attribute provides a short hint describing the expected value of an input field.',
  },
  {
    id: 'attr-13',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute is used to specify multiple values for the <input> element?',
    options: ['multiple', 'many', 'multi', 'several'],
    correctAnswer: 'multiple',
    explanation:
      'The multiple attribute allows users to enter/select more than one value.',
  },
  {
    id: 'attr-14',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Which attribute enables spell checking for input fields and textareas?',
    options: ['spellcheck', 'spell', 'check', 'autocorrect'],
    correctAnswer: 'spellcheck',
    explanation:
      'The spellcheck attribute specifies whether spell checking is enabled for an element.',
  },
  {
    id: 'attr-15',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which attribute specifies the visible width of a text input?',
    options: ['size', 'width', 'cols', 'length'],
    correctAnswer: 'size',
    explanation:
      'The size attribute specifies the visible width, in characters, of an input field.',
  },
  {
    id: 'attr-16',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Which attribute allows a form element to be associated with multiple forms?',
    options: ['form', 'formid', 'parent', 'belongs'],
    correctAnswer: 'form',
    explanation:
      'The form attribute allows form elements to be associated with a form by its id.',
  },
  {
    id: 'attr-17',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which attribute specifies the MIME type of the linked document?',
    options: ['type', 'mime', 'format', 'content-type'],
    correctAnswer: 'type',
    explanation:
      'The type attribute specifies the MIME type of the linked document.',
  },
  {
    id: 'attr-18',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which attribute makes an element draggable in HTML5?',
    options: ['draggable', 'drag', 'movable', 'move'],
    correctAnswer: 'draggable',
    explanation:
      'The draggable attribute specifies whether an element is draggable or not.',
  },
  {
    id: 'attr-19',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which attribute specifies the content to be editable by users?',
    options: ['contenteditable', 'editable', 'edit', 'modify'],
    correctAnswer: 'contenteditable',
    explanation:
      'The contenteditable attribute specifies whether the content of an element is editable.',
  },
  {
    id: 'attr-20',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which attribute specifies the tab order of an element?',
    options: ['tabindex', 'tab', 'order', 'index'],
    correctAnswer: 'tabindex',
    explanation:
      'The tabindex attribute specifies the tab order of an element.',
  },
  {
    id: 'attr-21',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute provides additional information about an element (tooltip)?',
    options: ['title', 'tooltip', 'info', 'description'],
    correctAnswer: 'title',
    explanation:
      'The title attribute provides additional information about an element, often shown as a tooltip.',
  },
  {
    id: 'attr-22',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Which attribute is used to specify a keyboard shortcut for an element?',
    options: ['accesskey', 'shortcut', 'key', 'hotkey'],
    correctAnswer: 'accesskey',
    explanation:
      'The accesskey attribute specifies a keyboard shortcut to activate/focus an element.',
  },
  {
    id: 'attr-23',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute is used to specify that a video should start playing automatically?',
    options: ['autoplay', 'auto', 'play', 'start'],
    correctAnswer: 'autoplay',
    explanation:
      'The autoplay attribute specifies that the audio/video will start playing automatically.',
  },
  {
    id: 'attr-24',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'easy',
    question:
      'Which attribute specifies that video controls should be displayed?',
    options: ['controls', 'show-controls', 'display', 'interface'],
    correctAnswer: 'controls',
    explanation:
      'The controls attribute specifies that audio/video controls should be displayed.',
  },
  {
    id: 'attr-25',
    category: 'attributes',
    type: 'single-choice',
    difficulty: 'medium',
    question:
      'Which attribute is used to specify the relationship between the current document and linked document?',
    options: ['rel', 'relationship', 'link', 'connection'],
    correctAnswer: 'rel',
    explanation:
      'The rel attribute specifies the relationship between the current document and the linked document.',
  },

  // 25 Complete the Code Questions
  {
    id: 'code-1',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the HTML code to create a basic paragraph:',
    code: '___Your text here___',
    correctAnswer: '<p>Your text here</p>',
    explanation: 'Paragraphs are created using <p> tags.',
  },
  {
    id: 'code-2',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to create a link that opens in a new tab:',
    code: '<a ___ target="___">Click here</a>',
    correctAnswer: '<a href="#" target="_blank">Click here</a>',
    explanation:
      'Use href for the URL and target="_blank" to open in a new tab.',
  },
  {
    id: 'code-3',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question:
      'Complete the code to create an email input field with placeholder:',
    code: '<input type="___" placeholder="___" />',
    correctAnswer: '<input type="email" placeholder="Enter your email" />',
    explanation:
      'Use type="email" for email validation and placeholder for hint text.',
  },
  {
    id: 'code-4',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to display an image with alt text:',
    code: '<___ src="image.jpg" ___="Description" />',
    correctAnswer: '<img src="image.jpg" alt="Description" />',
    explanation:
      'Use <img> tag with src for image source and alt for alternative text.',
  },
  {
    id: 'code-5',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create an ordered list with three items:',
    code: '___\n  <li>First</li>\n  ___Second___\n  <li>Third</li>\n___',
    correctAnswer:
      '<ol>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ol>',
    explanation: 'Use <ol> for ordered list and <li> for list items.',
  },
  {
    id: 'code-6',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code to create a form with method POST:',
    code: '<___ action="/submit" ___="POST">\n  <input type="submit" />\n</___>',
    correctAnswer:
      '<form action="/submit" method="POST">\n  <input type="submit" />\n</form>',
    explanation:
      'Use <form> tag with action for URL and method for HTTP method.',
  },
  {
    id: 'code-7',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a table header row:',
    code: '<table>\n  ___\n    ___Name___\n    <th>Age</th>\n  ___\n</table>',
    correctAnswer:
      '<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n</table>',
    explanation: 'Use <tr> for table row and <th> for table headers.',
  },
  {
    id: 'code-8',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to make text bold:',
    code: '___Important text___',
    correctAnswer: '<strong>Important text</strong>',
    explanation: 'Use <strong> tag for semantically important bold text.',
  },
  {
    id: 'code-9',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code to create a select dropdown with options:',
    code: '___\n  <option ___="1">Option 1</option>\n  <option value="2">Option 2</option>\n___',
    correctAnswer:
      '<select>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>',
    explanation:
      'Use <select> for dropdown and <option> with value attribute for choices.',
  },
  {
    id: 'code-10',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a text input with a label:',
    code: '<___ for="name">Name:<___>\n<input type="text" ___="name" />',
    correctAnswer:
      '<label for="name">Name:</label>\n<input type="text" id="name" />',
    explanation:
      'Use <label> with for attribute matching input id for accessibility.',
  },
  {
    id: 'code-11',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to create a horizontal rule:',
    code: '___',
    correctAnswer: '<hr>',
    explanation: 'Use <hr> tag to create a horizontal rule (line).',
  },
  {
    id: 'code-12',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code to embed a video with controls:',
    code: '<___ src="video.mp4" ___>\n  Your browser does not support video.\n</___>',
    correctAnswer:
      '<video src="video.mp4" controls>\n  Your browser does not support video.\n</video>',
    explanation:
      'Use <video> tag with controls attribute for playback controls.',
  },
  {
    id: 'code-13',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a button with onclick event:',
    code: '<___ ___="alert(\'Hello!\')">Click me</___>',
    correctAnswer: '<button onclick="alert(\'Hello!\')">Click me</button>',
    explanation:
      'Use <button> tag with onclick attribute for JavaScript events.',
  },
  {
    id: 'code-14',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to create a blockquote:',
    code: '___This is a quote___',
    correctAnswer: '<blockquote>This is a quote</blockquote>',
    explanation: 'Use <blockquote> tag for quotations from another source.',
  },
  {
    id: 'code-15',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code to create a definition list:',
    code: '___\n  ___HTML___\n  ___Hypertext Markup Language___\n</dl>',
    correctAnswer:
      '<dl>\n  <dt>HTML</dt>\n  <dd>Hypertext Markup Language</dd>\n</dl>',
    explanation:
      'Use <dl> for definition list, <dt> for term, <dd> for description.',
  },
  {
    id: 'code-16',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a fieldset with legend:',
    code: '___\n  ___Personal Info___\n  <input type="text" />\n</___>',
    correctAnswer:
      '<fieldset>\n  <legend>Personal Info</legend>\n  <input type="text" />\n</fieldset>',
    explanation:
      'Use <fieldset> to group form elements and <legend> for the caption.',
  },
  {
    id: 'code-17',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to add a comment in HTML:',
    code: '___ This is a comment ___',
    correctAnswer: '<!-- This is a comment -->',
    explanation: 'HTML comments are written between <!-- and -->.',
  },
  {
    id: 'code-18',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code to create a progress bar at 70%:',
    code: '<___ value="___" max="100"></___>',
    correctAnswer: '<progress value="70" max="100"></progress>',
    explanation: 'Use <progress> tag with value and max attributes.',
  },
  {
    id: 'code-19',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a text area with 5 rows:',
    code: '<___ ___="5" cols="30"></___>',
    correctAnswer: '<textarea rows="5" cols="30"></textarea>',
    explanation:
      'Use <textarea> tag with rows and cols attributes for dimensions.',
  },
  {
    id: 'code-20',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to create a line break:',
    code: 'First line___ Second line',
    correctAnswer: 'First line<br> Second line',
    explanation: 'Use <br> tag for line breaks.',
  },
  {
    id: 'code-21',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code for a color input with default value:',
    code: '<input type="___" ___="#ff0000" />',
    correctAnswer: '<input type="color" value="#ff0000" />',
    explanation: 'Use type="color" for color picker with value in hex format.',
  },
  {
    id: 'code-22',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a details element with summary:',
    code: '___\n  ___Click to expand___\n  <p>Hidden content</p>\n</___>',
    correctAnswer:
      '<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content</p>\n</details>',
    explanation:
      'Use <details> for expandable content with <summary> as the visible heading.',
  },
  {
    id: 'code-23',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'easy',
    question: 'Complete the code to create an abbreviation:',
    code: '<___ title="World Wide Web">WWW</___>',
    correctAnswer: '<abbr title="World Wide Web">WWW</abbr>',
    explanation: 'Use <abbr> tag with title attribute for abbreviations.',
  },
  {
    id: 'code-24',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'medium',
    question: 'Complete the code to create a meter element:',
    code: '<___ value="6" min="0" ___="10">6 out of 10</___>',
    correctAnswer: '<meter value="6" min="0" max="10">6 out of 10</meter>',
    explanation: 'Use <meter> tag with value, min, and max attributes.',
  },
  {
    id: 'code-25',
    category: 'complete-code',
    type: 'code-completion',
    difficulty: 'hard',
    question: 'Complete the code for an iframe with specific dimensions:',
    code: '<___ src="page.html" ___="400" height="300"></___>',
    correctAnswer: '<iframe src="page.html" width="400" height="300"></iframe>',
    explanation: 'Use <iframe> tag with src, width, and height attributes.',
  },

  // 10 Easy Practical Questions
  {
    id: 'prac-easy-1',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a simple "Hello World" webpage with proper HTML structure including doctype, html, head with title, and body.',
    correctAnswer: `<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`,
    explanation:
      'A basic HTML page needs DOCTYPE, html, head with title, and body elements.',
  },
  {
    id: 'prac-easy-2',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a navigation menu with three links: Home, About, and Contact.',
    correctAnswer: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
    explanation:
      'Navigation menus use <nav> element with lists and links for semantic structure.',
  },
  {
    id: 'prac-easy-3',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a simple contact form with name, email, and message fields.',
    correctAnswer: `<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <button type="submit">Submit</button>
</form>`,
    explanation:
      'Forms should have proper labels, input types, and required attributes for validation.',
  },
  {
    id: 'prac-easy-4',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question: 'Create an image gallery with three images in a row.',
    correctAnswer: `<div class="gallery">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
  <img src="image3.jpg" alt="Image 3">
</div>`,
    explanation:
      'Image galleries need proper alt text for accessibility and can be wrapped in a container.',
  },
  {
    id: 'prac-easy-5',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a simple table with headers for Name, Age, and City with two data rows.',
    correctAnswer: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>London</td>
    </tr>
  </tbody>
</table>`,
    explanation:
      'Tables should use thead, tbody, th for headers, and td for data cells.',
  },
  {
    id: 'prac-easy-6',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a footer with copyright information and social media links.',
    correctAnswer: `<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <div class="social-links">
    <a href="#">Facebook</a>
    <a href="#">Twitter</a>
    <a href="#">Instagram</a>
  </div>
</footer>`,
    explanation:
      'Footers typically contain copyright info and links, using semantic <footer> element.',
  },
  {
    id: 'prac-easy-7',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question: 'Create a login form with username and password fields.',
    correctAnswer: `<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  
  <button type="submit">Login</button>
</form>`,
    explanation:
      'Login forms should use type="password" for password fields to hide input.',
  },
  {
    id: 'prac-easy-8',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question:
      'Create a blog post structure with title, date, author, and content.',
    correctAnswer: `<article>
  <header>
    <h1>Blog Post Title</h1>
    <p class="meta">
      <time datetime="2024-01-01">January 1, 2024</time>
      <span>By John Doe</span>
    </p>
  </header>
  <div class="content">
    <p>Blog post content goes here...</p>
  </div>
</article>`,
    explanation:
      'Blog posts should use <article> for semantic structure with header and content sections.',
  },
  {
    id: 'prac-easy-9',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question: 'Create a newsletter subscription form with email input.',
    correctAnswer: `<form>
  <h2>Subscribe to our Newsletter</h2>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required>
  <button type="submit">Subscribe</button>
</form>`,
    explanation:
      'Newsletter forms should use type="email" for proper validation and placeholder text.',
  },
  {
    id: 'prac-easy-10',
    category: 'practical-easy',
    type: 'practical',
    difficulty: 'easy',
    question: 'Create an FAQ section with two collapsible questions.',
    correctAnswer: `<section class="faq">
  <h2>Frequently Asked Questions</h2>
  <details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language.</p>
  </details>
  <details>
    <summary>How do I learn HTML?</summary>
    <p>Start with basic tags and practice building simple webpages.</p>
  </details>
</section>`,
    explanation:
      'FAQ sections can use <details> and <summary> for collapsible content without JavaScript.',
  },

  // 10 Medium Practical Questions
  {
    id: 'prac-medium-1',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a responsive card component with image, title, description, and a button.',
    correctAnswer: `<div class="card">
  <img src="card-image.jpg" alt="Card image">
  <div class="card-body">
    <h3>Card Title</h3>
    <p>This is a description of the card content.</p>
    <a href="#" class="btn">Learn More</a>
  </div>
</div>`,
    explanation:
      'Card components typically have an image, content area with title, description, and actions.',
  },
  {
    id: 'prac-medium-2',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a product listing with image, name, price, rating, and add to cart button.',
    correctAnswer: `<div class="product">
  <img src="product.jpg" alt="Product name">
  <h3>Product Name</h3>
  <div class="rating">
    <span>★★★★☆</span>
    <span>(4.0)</span>
  </div>
  <p class="price">$29.99</p>
  <button type="button">Add to Cart</button>
</div>`,
    explanation:
      'Product cards need structured information including visuals, pricing, and actions.',
  },
  {
    id: 'prac-medium-3',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a comment section with user avatar, name, date, and comment text.',
    correctAnswer: `<div class="comment">
  <img src="avatar.jpg" alt="User avatar" class="avatar">
  <div class="comment-content">
    <div class="comment-header">
      <strong>John Doe</strong>
      <time datetime="2024-01-01">January 1, 2024</time>
    </div>
    <p>This is a great article! Thanks for sharing.</p>
    <button>Reply</button>
  </div>
</div>`,
    explanation:
      'Comment sections need user info, timestamp, content, and interaction options.',
  },
  {
    id: 'prac-medium-4',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a pricing table with three plans showing features and prices.',
    correctAnswer: `<div class="pricing-table">
  <div class="plan">
    <h3>Basic</h3>
    <p class="price">$9/month</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
    <button>Choose Plan</button>
  </div>
  <div class="plan featured">
    <h3>Pro</h3>
    <p class="price">$19/month</p>
    <ul>
      <li>All Basic features</li>
      <li>Feature 3</li>
      <li>Feature 4</li>
    </ul>
    <button>Choose Plan</button>
  </div>
  <div class="plan">
    <h3>Enterprise</h3>
    <p class="price">$39/month</p>
    <ul>
      <li>All Pro features</li>
      <li>Feature 5</li>
      <li>Feature 6</li>
    </ul>
    <button>Choose Plan</button>
  </div>
</div>`,
    explanation:
      'Pricing tables compare different plans with features and call-to-action buttons.',
  },
  {
    id: 'prac-medium-5',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a testimonial section with quote, author name, and company.',
    correctAnswer: `<section class="testimonial">
  <blockquote>
    <p>"This product has transformed our business. Highly recommended!"</p>
    <footer>
      <cite>
        <strong>Jane Smith</strong>
        <span>CEO, TechCorp</span>
      </cite>
    </footer>
  </blockquote>
</section>`,
    explanation:
      'Testimonials use blockquote with proper citation including author and credentials.',
  },
  {
    id: 'prac-medium-6',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question: 'Create a search bar with filters for category and sort options.',
    correctAnswer: `<form class="search-form">
  <input type="search" placeholder="Search..." name="query">
  <select name="category">
    <option value="">All Categories</option>
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
  </select>
  <select name="sort">
    <option value="relevance">Relevance</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
  </select>
  <button type="submit">Search</button>
</form>`,
    explanation:
      'Search forms often include filters and sorting options using select elements.',
  },
  {
    id: 'prac-medium-7',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question: 'Create a timeline component with three events.',
    correctAnswer: `<div class="timeline">
  <div class="event">
    <time>2022</time>
    <h3>Company Founded</h3>
    <p>Started our journey with a small team.</p>
  </div>
  <div class="event">
    <time>2023</time>
    <h3>First Product Launch</h3>
    <p>Released our flagship product to market.</p>
  </div>
  <div class="event">
    <time>2024</time>
    <h3>Global Expansion</h3>
    <p>Expanded operations to 10 countries.</p>
  </div>
</div>`,
    explanation:
      'Timelines show chronological events with dates and descriptions.',
  },
  {
    id: 'prac-medium-8',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a user profile card with avatar, bio, stats, and social links.',
    correctAnswer: `<div class="profile-card">
  <img src="avatar.jpg" alt="User Name" class="avatar">
  <h2>John Doe</h2>
  <p class="bio">Web developer passionate about creating amazing experiences.</p>
  <div class="stats">
    <div>
      <strong>150</strong>
      <span>Posts</span>
    </div>
    <div>
      <strong>2.5k</strong>
      <span>Followers</span>
    </div>
    <div>
      <strong>180</strong>
      <span>Following</span>
    </div>
  </div>
  <div class="social">
    <a href="#">Twitter</a>
    <a href="#">LinkedIn</a>
    <a href="#">GitHub</a>
  </div>
</div>`,
    explanation:
      'Profile cards display user information, statistics, and social connections.',
  },
  {
    id: 'prac-medium-9',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a checkout form with billing and shipping address sections.',
    correctAnswer: `<form class="checkout">
  <section>
    <h2>Billing Address</h2>
    <label for="bill-name">Full Name:</label>
    <input type="text" id="bill-name" name="billing_name" required>
    
    <label for="bill-email">Email:</label>
    <input type="email" id="bill-email" name="billing_email" required>
    
    <label for="bill-address">Address:</label>
    <input type="text" id="bill-address" name="billing_address" required>
    
    <label for="bill-city">City:</label>
    <input type="text" id="bill-city" name="billing_city" required>
  </section>
  
  <section>
    <h2>Shipping Address</h2>
    <label>
      <input type="checkbox" name="same_address"> Same as billing
    </label>
    
    <label for="ship-address">Address:</label>
    <input type="text" id="ship-address" name="shipping_address">
    
    <label for="ship-city">City:</label>
    <input type="text" id="ship-city" name="shipping_city">
  </section>
  
  <button type="submit">Place Order</button>
</form>`,
    explanation:
      'Checkout forms need separate sections for billing and shipping with proper field grouping.',
  },
  {
    id: 'prac-medium-10',
    category: 'practical-medium',
    type: 'practical',
    difficulty: 'medium',
    question:
      'Create a media player interface with video element and custom controls.',
    correctAnswer: `<div class="video-player">
  <video id="video" width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <div class="controls">
    <button id="play-pause">Play</button>
    <input type="range" id="seek" min="0" max="100" value="0">
    <span id="time">0:00 / 0:00</span>
    <input type="range" id="volume" min="0" max="100" value="50">
    <button id="fullscreen">Fullscreen</button>
  </div>
</div>`,
    explanation:
      'Media players need video element with multiple sources and custom control interface.',
  },

  // 5 Hard Real-time Practical Questions
  {
    id: 'prac-hard-1',
    category: 'practical-hard',
    type: 'practical',
    difficulty: 'hard',
    question:
      'Create a complete e-commerce product page with image carousel, product details, size/color selection, reviews section, and related products.',
    correctAnswer: `<main class="product-page">
  <div class="product-images">
    <div class="carousel">
      <img src="product1.jpg" alt="Product view 1" class="active">
      <img src="product2.jpg" alt="Product view 2">
      <img src="product3.jpg" alt="Product view 3">
    </div>
    <div class="thumbnails">
      <img src="thumb1.jpg" alt="Thumbnail 1">
      <img src="thumb2.jpg" alt="Thumbnail 2">
      <img src="thumb3.jpg" alt="Thumbnail 3">
    </div>
  </div>
  
  <div class="product-info">
    <h1>Premium Product Name</h1>
    <div class="rating">
      <span class="stars">★★★★☆</span>
      <a href="#reviews">(124 reviews)</a>
    </div>
    <p class="price">
      <span class="current">$79.99</span>
      <span class="original">$99.99</span>
      <span class="discount">20% OFF</span>
    </p>
    
    <form class="product-options">
      <div class="option-group">
        <label for="size">Size:</label>
        <select id="size" name="size" required>
          <option value="">Select size</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>
      </div>
      
      <div class="option-group">
        <label>Color:</label>
        <div class="color-options">
          <input type="radio" id="black" name="color" value="black" required>
          <label for="black">Black</label>
          <input type="radio" id="white" name="color" value="white">
          <label for="white">White</label>
          <input type="radio" id="blue" name="color" value="blue">
          <label for="blue">Blue</label>
        </div>
      </div>
      
      <div class="quantity">
        <label for="qty">Quantity:</label>
        <input type="number" id="qty" name="quantity" min="1" max="10" value="1">
      </div>
      
      <button type="submit" class="add-to-cart">Add to Cart</button>
      <button type="button" class="wishlist">♡ Add to Wishlist</button>
    </form>
    
    <div class="product-details">
      <h2>Description</h2>
      <p>High-quality product with premium materials...</p>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  </div>
  
  <section id="reviews" class="reviews">
    <h2>Customer Reviews</h2>
    <div class="review">
      <div class="review-header">
        <span class="stars">★★★★★</span>
        <strong>John D.</strong>
        <time>2 days ago</time>
      </div>
      <p>Excellent product! Exceeded my expectations.</p>
    </div>
  </section>
  
  <section class="related-products">
    <h2>Related Products</h2>
    <div class="products-grid">
      <article class="product-card">
        <img src="related1.jpg" alt="Related product 1">
        <h3>Related Product 1</h3>
        <p class="price">$59.99</p>
      </article>
      <article class="product-card">
        <img src="related2.jpg" alt="Related product 2">
        <h3>Related Product 2</h3>
        <p class="price">$69.99</p>
      </article>
    </div>
  </section>
</main>`,
    explanation:
      'A complete e-commerce product page needs image gallery, product options, reviews, and related products sections.',
  },
  {
    id: 'prac-hard-2',
    category: 'practical-hard',
    type: 'practical',
    difficulty: 'hard',
    question:
      'Create a complete dashboard layout with sidebar navigation, header with user menu, main content area with statistics cards, charts placeholder, and recent activity table.',
    correctAnswer: `<div class="dashboard">
  <aside class="sidebar">
    <div class="logo">
      <img src="logo.png" alt="Company Logo">
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><a href="#" class="active">Dashboard</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </aside>
  
  <header class="header">
    <button class="menu-toggle">☰</button>
    <div class="search">
      <input type="search" placeholder="Search...">
    </div>
    <div class="user-menu">
      <button class="notifications">🔔 <span class="badge">3</span></button>
      <div class="user-profile">
        <img src="user.jpg" alt="User">
        <span>John Doe</span>
        <button class="dropdown-toggle">▼</button>
      </div>
    </div>
  </header>
  
  <main class="main-content">
    <h1>Dashboard Overview</h1>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total Users</h3>
        <p class="stat-value">12,543</p>
        <p class="stat-change positive">+12% from last month</p>
      </div>
      <div class="stat-card">
        <h3>Revenue</h3>
        <p class="stat-value">$45,231</p>
        <p class="stat-change positive">+8% from last month</p>
      </div>
      <div class="stat-card">
        <h3>Active Projects</h3>
        <p class="stat-value">28</p>
        <p class="stat-change negative">-3% from last month</p>
      </div>
      <div class="stat-card">
        <h3>Conversion Rate</h3>
        <p class="stat-value">3.2%</p>
        <p class="stat-change positive">+0.5% from last month</p>
      </div>
    </div>
    
    <div class="charts-section">
      <div class="chart-container">
        <h2>Sales Overview</h2>
        <div class="chart-placeholder">[Chart goes here]</div>
      </div>
      <div class="chart-container">
        <h2>Traffic Sources</h2>
        <div class="chart-placeholder">[Chart goes here]</div>
      </div>
    </div>
    
    <section class="recent-activity">
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Smith</td>
            <td>Created new project</td>
            <td>2 hours ago</td>
            <td><span class="status success">Completed</span></td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Updated user settings</td>
            <td>5 hours ago</td>
            <td><span class="status success">Completed</span></td>
          </tr>
          <tr>
            <td>Carol White</td>
            <td>Uploaded files</td>
            <td>1 day ago</td>
            <td><span class="status pending">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</div>`,
    explanation:
      'A dashboard needs sidebar navigation, header with user controls, statistics cards, charts area, and activity tables.',
  },
  {
    id: 'prac-hard-3',
    category: 'practical-hard',
    type: 'practical',
    difficulty: 'hard',
    question:
      'Create a complete blog homepage with header, featured article, recent posts grid, sidebar with categories and popular posts, newsletter signup, and footer.',
    correctAnswer: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Homepage</title>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1 class="site-title">My Blog</h1>
      <nav class="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main class="site-main">
    <section class="featured-article">
      <img src="featured.jpg" alt="Featured article">
      <div class="featured-content">
        <span class="category">Technology</span>
        <h2>The Future of Web Development</h2>
        <p>Exploring emerging trends and technologies shaping the web...</p>
        <div class="article-meta">
          <span class="author">By Jane Doe</span>
          <time>March 15, 2024</time>
        </div>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </section>
    
    <div class="content-layout">
      <section class="recent-posts">
        <h2>Recent Posts</h2>
        <div class="posts-grid">
          <article class="post-card">
            <img src="post1.jpg" alt="Post 1">
            <div class="post-content">
              <span class="category">Design</span>
              <h3>Understanding UI/UX Principles</h3>
              <p>Key concepts every designer should know...</p>
              <time>March 12, 2024</time>
            </div>
          </article>
          <article class="post-card">
            <img src="post2.jpg" alt="Post 2">
            <div class="post-content">
              <span class="category">Development</span>
              <h3>JavaScript Best Practices</h3>
              <p>Write cleaner and more efficient code...</p>
              <time>March 10, 2024</time>
            </div>
          </article>
          <article class="post-card">
            <img src="post3.jpg" alt="Post 3">
            <div class="post-content">
              <span class="category">Tutorial</span>
              <h3>Getting Started with React</h3>
              <p>A beginner's guide to React development...</p>
              <time>March 8, 2024</time>
            </div>
          </article>
        </div>
      </section>
      
      <aside class="sidebar">
        <section class="widget">
          <h3>Categories</h3>
          <ul class="category-list">
            <li><a href="#">Technology (45)</a></li>
            <li><a href="#">Design (32)</a></li>
            <li><a href="#">Development (28)</a></li>
            <li><a href="#">Tutorial (19)</a></li>
          </ul>
        </section>
        
        <section class="widget">
          <h3>Popular Posts</h3>
          <ul class="popular-posts">
            <li>
              <a href="#">
                <h4>10 CSS Tricks You Should Know</h4>
                <time>March 5, 2024</time>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Building Responsive Layouts</h4>
                <time>March 3, 2024</time>
              </a>
            </li>
            <li>
              <a href="#">
                <h4>Web Performance Optimization</h4>
                <time>March 1, 2024</time>
              </a>
            </li>
          </ul>
        </section>
        
        <section class="widget newsletter">
          <h3>Newsletter</h3>
          <p>Get the latest posts delivered to your inbox</p>
          <form>
            <input type="email" placeholder="Your email" required>
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </aside>
    </div>
  </main>
  
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About</h3>
          <p>A blog about web development, design, and technology.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <p class="copyright">&copy; 2024 My Blog. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,
    explanation:
      'A blog homepage needs featured content, recent posts, sidebar widgets, newsletter signup, and comprehensive footer.',
  },
  {
    id: 'prac-hard-4',
    category: 'practical-hard',
    type: 'practical',
    difficulty: 'hard',
    question:
      'Create a complete multi-step registration form with personal info, account details, preferences, and confirmation steps with progress indicator.',
    correctAnswer: `<div class="registration-form">
  <div class="progress-indicator">
    <div class="step active">
      <span class="step-number">1</span>
      <span class="step-label">Personal Info</span>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <span class="step-label">Account</span>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <span class="step-label">Preferences</span>
    </div>
    <div class="step">
      <span class="step-number">4</span>
      <span class="step-label">Confirm</span>
    </div>
  </div>
  
  <form id="multi-step-form">
    <!-- Step 1: Personal Information -->
    <fieldset class="form-step active" data-step="1">
      <legend>Personal Information</legend>
      
      <div class="form-group">
        <label for="firstname">First Name *</label>
        <input type="text" id="firstname" name="firstname" required>
      </div>
      
      <div class="form-group">
        <label for="lastname">Last Name *</label>
        <input type="text" id="lastname" name="lastname" required>
      </div>
      
      <div class="form-group">
        <label for="dob">Date of Birth *</label>
        <input type="date" id="dob" name="dob" required>
      </div>
      
      <div class="form-group">
        <label>Gender</label>
        <div class="radio-group">
          <input type="radio" id="male" name="gender" value="male">
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female">
          <label for="female">Female</label>
          <input type="radio" id="other" name="gender" value="other">
          <label for="other">Other</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
      </div>
      
      <button type="button" class="next-step">Next</button>
    </fieldset>
    
    <!-- Step 2: Account Details -->
    <fieldset class="form-step" data-step="2">
      <legend>Account Details</legend>
      
      <div class="form-group">
        <label for="username">Username *</label>
        <input type="text" id="username" name="username" required minlength="4">
        <small>At least 4 characters</small>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="password">Password *</label>
        <input type="password" id="password" name="password" required minlength="8">
        <small>At least 8 characters</small>
      </div>
      
      <div class="form-group">
        <label for="confirm-password">Confirm Password *</label>
        <input type="password" id="confirm-password" name="confirm_password" required>
      </div>
      
      <div class="form-group">
        <label for="security-question">Security Question</label>
        <select id="security-question" name="security_question">
          <option value="">Select a question</option>
          <option value="pet">What was your first pet's name?</option>
          <option value="school">What elementary school did you attend?</option>
          <option value="city">In what city were you born?</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="security-answer">Security Answer</label>
        <input type="text" id="security-answer" name="security_answer">
      </div>
      
      <button type="button" class="prev-step">Previous</button>
      <button type="button" class="next-step">Next</button>
    </fieldset>
    
    <!-- Step 3: Preferences -->
    <fieldset class="form-step" data-step="3">
      <legend>Preferences</legend>
      
      <div class="form-group">
        <label>Interests</label>
        <div class="checkbox-group">
          <input type="checkbox" id="tech" name="interests[]" value="technology">
          <label for="tech">Technology</label>
          <input type="checkbox" id="sports" name="interests[]" value="sports">
          <label for="sports">Sports</label>
          <input type="checkbox" id="music" name="interests[]" value="music">
          <label for="music">Music</label>
          <input type="checkbox" id="travel" name="interests[]" value="travel">
          <label for="travel">Travel</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="newsletter">Newsletter Frequency</label>
        <select id="newsletter" name="newsletter_frequency">
          <option value="daily">Daily</option>
          <option value="weekly" selected>Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="never">Never</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>Communication Preferences</label>
        <div class="checkbox-group">
          <input type="checkbox" id="email-notif" name="notifications[]" value="email" checked>
          <label for="email-notif">Email notifications</label>
          <input type="checkbox" id="sms-notif" name="notifications[]" value="sms">
          <label for="sms-notif">SMS notifications</label>
          <input type="checkbox" id="push-notif" name="notifications[]" value="push">
          <label for="push-notif">Push notifications</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="timezone">Timezone</label>
        <select id="timezone" name="timezone">
          <option value="UTC">UTC</option>
          <option value="EST">Eastern Time</option>
          <option value="CST">Central Time</option>
          <option value="PST">Pacific Time</option>
        </select>
      </div>
      
      <button type="button" class="prev-step">Previous</button>
      <button type="button" class="next-step">Next</button>
    </fieldset>
    
    <!-- Step 4: Review and Confirm -->
    <fieldset class="form-step" data-step="4">
      <legend>Review and Confirm</legend>
      
      <div class="summary">
        <h3>Please review your information</h3>
        <div class="summary-section">
          <h4>Personal Information</h4>
          <div id="personal-summary"></div>
        </div>
        <div class="summary-section">
          <h4>Account Details</h4>
          <div id="account-summary"></div>
        </div>
        <div class="summary-section">
          <h4>Preferences</h4>
          <div id="preferences-summary"></div>
        </div>
      </div>
      
      <div class="form-group">
        <input type="checkbox" id="terms" name="terms" required>
        <label for="terms">I agree to the Terms of Service and Privacy Policy *</label>
      </div>
      
      <div class="form-group">
        <input type="checkbox" id="age-confirm" name="age_confirm" required>
        <label for="age-confirm">I confirm that I am 18 years or older *</label>
      </div>
      
      <button type="button" class="prev-step">Previous</button>
      <button type="submit" class="submit-form">Create Account</button>
    </fieldset>
  </form>
</div>`,
    explanation:
      'Multi-step forms need progress indicators, fieldsets for each step, validation, and a review/confirmation step.',
  },
  {
    id: 'prac-hard-5',
    category: 'practical-hard',
    type: 'practical',
    difficulty: 'hard',
    question:
      'Create a complete restaurant website homepage with navigation, hero section with reservation form, menu preview, chef section, testimonials, and contact information with embedded map.',
    correctAnswer: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restaurant Name - Fine Dining Experience</title>
</head>
<body>
  <header class="header">
    <nav class="navbar">
      <div class="nav-brand">
        <img src="logo.png" alt="Restaurant Logo">
        <span>Restaurant Name</span>
      </div>
      <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-toggle" aria-label="Menu">☰</button>
    </nav>
  </header>
  
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Welcome to Restaurant Name</h1>
      <p class="tagline">Experience culinary excellence since 1985</p>
      <div class="hero-reservation">
        <h2>Make a Reservation</h2>
        <form class="reservation-form">
          <div class="form-row">
            <input type="date" name="date" required>
            <input type="time" name="time" min="17:00" max="23:00" required>
          </div>
          <div class="form-row">
            <select name="guests" required>
              <option value="">Number of guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
            <input type="tel" name="phone" placeholder="Phone number" required>
          </div>
          <button type="submit">Reserve Table</button>
        </form>
      </div>
    </div>
    <div class="hero-image">
      <img src="hero-dish.jpg" alt="Signature dish">
    </div>
  </section>
  
  <section id="menu" class="menu-preview">
    <div class="container">
      <h2>Our Menu</h2>
      <div class="menu-categories">
        <button class="tab active" data-category="starters">Starters</button>
        <button class="tab" data-category="mains">Main Courses</button>
        <button class="tab" data-category="desserts">Desserts</button>
        <button class="tab" data-category="drinks">Beverages</button>
      </div>
      
      <div class="menu-items">
        <div class="menu-section active" id="starters">
          <article class="menu-item">
            <img src="starter1.jpg" alt="Caesar Salad">
            <div class="item-details">
              <h3>Caesar Salad</h3>
              <p>Fresh romaine, parmesan, croutons, house-made dressing</p>
              <span class="price">$12</span>
            </div>
          </article>
          <article class="menu-item">
            <img src="starter2.jpg" alt="Soup of the Day">
            <div class="item-details">
              <h3>Soup of the Day</h3>
              <p>Chef's daily selection with artisan bread</p>
              <span class="price">$9</span>
            </div>
          </article>
          <article class="menu-item">
            <img src="starter3.jpg" alt="Bruschetta">
            <div class="item-details">
              <h3>Bruschetta</h3>
              <p>Grilled bread with tomatoes, garlic, and basil</p>
              <span class="price">$10</span>
            </div>
          </article>
        </div>
      </div>
      
      <a href="#" class="view-full-menu">View Full Menu →</a>
    </div>
  </section>
  
  <section id="about" class="chef-section">
    <div class="container">
      <div class="chef-content">
        <img src="chef.jpg" alt="Executive Chef">
        <div class="chef-info">
          <h2>Meet Our Executive Chef</h2>
          <h3>Chef Michael Anderson</h3>
          <p>With over 20 years of culinary experience, Chef Anderson brings innovation and tradition together to create unforgettable dining experiences.</p>
          <blockquote>
            "Every dish tells a story. My passion is creating memorable moments through exceptional cuisine."
          </blockquote>
          <div class="awards">
            <h4>Awards & Recognition</h4>
            <ul>
              <li>Michelin Star 2022</li>
              <li>James Beard Award Nominee</li>
              <li>Best Chef in the City 2021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="testimonials">
    <div class="container">
      <h2>What Our Guests Say</h2>
      <div class="testimonials-grid">
        <article class="testimonial">
          <div class="rating">★★★★★</div>
          <p>"An absolutely incredible dining experience. The attention to detail in every dish was remarkable."</p>
          <footer>
            <strong>Sarah Johnson</strong>
            <span>Food Critic, Gourmet Magazine</span>
          </footer>
        </article>
        <article class="testimonial">
          <div class="rating">★★★★★</div>
          <p>"The ambiance, service, and food were all exceptional. This is our new favorite restaurant!"</p>
          <footer>
            <strong>Mark Thompson</strong>
            <span>Regular Customer</span>
          </footer>
        </article>
        <article class="testimonial">
          <div class="rating">★★★★★</div>
          <p>"Chef Anderson's tasting menu was a journey through flavors. Simply unforgettable."</p>
          <footer>
            <strong>Emily Chen</strong>
            <span>Food Blogger</span>
          </footer>
        </article>
      </div>
    </div>
  </section>
  
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Visit Us</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <h3>Location</h3>
            <address>
              123 Gourmet Street<br>
              Downtown District<br>
              New York, NY 10001
            </address>
          </div>
          
          <div class="info-item">
            <h3>Hours</h3>
            <dl>
              <dt>Monday - Thursday</dt>
              <dd>5:00 PM - 10:00 PM</dd>
              <dt>Friday - Saturday</dt>
              <dd>5:00 PM - 11:00 PM</dd>
              <dt>Sunday</dt>
              <dd>4:00 PM - 9:00 PM</dd>
            </dl>
          </div>
          
          <div class="info-item">
            <h3>Contact</h3>
            <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@restaurant.com">info@restaurant.com</a></p>
          </div>
          
          <div class="info-item">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>
        
        <div class="map-container">
          <iframe 
            src="https://maps.google.com/maps?q=restaurant&output=embed"
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            title="Restaurant Location">
          </iframe>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="logo.png" alt="Restaurant Logo">
          <p>Fine dining excellence since 1985</p>
        </div>
        <nav class="footer-nav">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </nav>
        <div class="newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form>
            <input type="email" placeholder="Your email" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <p class="copyright">&copy; 2024 Restaurant Name. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,
    explanation:
      'A restaurant website needs hero with reservation, menu preview, chef section, testimonials, location/hours, and contact information.',
  },
];

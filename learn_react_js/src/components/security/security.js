import React from "react";

const Security = () => {
  return (
    <>
      <h1>What is XSS?</h1>
      <p>
        XSS (Cross-site scripting) vulnerability is an injection vulnerability,
        where attackers inserts a piece of malicious data into the web
        application. The maliciously injected data will be picked up by the
        browser, which interprets the data as code.
      </p>
      <p>
        In a result, the injected payload from the attacker will be executed as
        legitimate application code, giving the attacker full control to the
        application.
      </p>

      <h1>Security: Avoiding XSS in React Application</h1>
      <p>What all things can cause XSS in React Applications?</p>
      <ul>
        <li>Simple data binding</li>
        <li>Rendering HTML</li>
        <li>Dynamic URLs</li>
        <li>DOM Manipulation</li>
        <li>Inserting Dynamic JSON Data</li>
        <li>Dangerous Library Code</li>
        <li>Non-Vulnerable Version of React</li>
        <li>Direct DOM Access</li>
      </ul>

      <h3>Simple Data Binding</h3>
      <p>
        By default React prevents data to be shown as code. The dynamic data
        binding mechanism does not cause HTML injection attacks. When possible
        always use curly brackets for data binding.
      </p>
      <p>
        React only provides protection for rendering text content and not for
        HTML attributes.
      </p>
      {/* Don’t use <form action={data}>... */}

      <p>
        <strong>Note: </strong> Avoid dynamic attribute values without custom
        validation.
      </p>

      <a href="https://pragmaticwebsecurity.com/files/cheatsheets/reactxss.pdf">
        See Details Here
      </a>

      <hr />

      <h3>Rendering HTML</h3>
      <p>
        It is possible to insert HTML directly into rendered DOM nodes using
        dangerouslySetInnerHTML. Any content inserted this way must be sanitized
        beforehand.
      </p>

      <p>
        <strong>Note: </strong> Use a sanitization library like DOMPurify on any
        values before placing them into the dangerouslySetInnerHTML prop.
        {/* import purify from "dompurify";
          <div dangerouslySetInnerHTML={{__html:purify.sanitize(data)
          }} /> */}
      </p>

      <hr />

      <h3>Direct DOM Access</h3>
      <p>
        Accessing the DOM to inject content into DOM nodes directly should be
        avoided. Use dangerouslySetInnerHTML if you must inject HTML and
        sanitize it before injecting it using DOMPurify
      </p>

      <p>
        <strong>Note: </strong> Avoid using refs and findDomNode() to access
        rendered DOM elements to directly inject content via innerHTML and
        similar properties and methods.
      </p>

      <hr />

      <h3>Dynamic URLs</h3>
      <p>
        URLs can contain dynamic script content via javascript: protocol urls.
        Validate URLs before use.
      </p>

      <p>
        <strong>Note: </strong>
        Use validation to assure your links are http or https to avoid
        javascript: URL based script injection. Achieve URL validation using a
        native URL parsing function then match the parsed protocol property to
        an allow list.
      </p>

      <p>Use a native URL() to sanitize your URLs.</p>

      <ul>
        <li>Never allow unvetted data in an href or src attribute</li>
        <li>Use a URL sanitization library to sanitize untrusted URLs</li>
        <li>Use DOMPurify to output HTML with dynamic URLs</li>
      </ul>

      <hr />

      <h3>Accessing Native DOM Elements</h3>
      <ul>
        <li>innerHTML and outerHTML often cause DOM-based XSS</li>
        <li>React’s createRef function exposes DOM elements</li>
        <li>ReactDOM’s findDOMNode function exposes DOM elements</li>
        <li>
          When DOM manipulation cannot be avoided, use safe APIs (E.g.,
          document.createElement instead of innerHTML)
        </li>
      </ul>

      <hr />
      <h3>Dangerous Library Code</h3>
      <p>
        Library code is often used to perform dangerous operations like directly
        inserting HTML into the DOM. Review library code manually or with
        linters to detect unsafe usage of React’s security mechanisms.
      </p>
      <ul>
        <li>
          Avoid libraries that do use dangerouslySetInnerHTML, innerHTML,
          unvalidated URLs or other unsafe patterns.
        </li>
        <li>
          Use security linters on your node_modules folder to detect unsafe
          patterns in your library code.
        </li>
      </ul>
    </>
  );
};

export default Security;

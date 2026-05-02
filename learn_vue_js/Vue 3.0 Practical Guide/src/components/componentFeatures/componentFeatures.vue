<script setup>
import componentFeaturesExample from "./componentFeaturesExample.vue";
</script>

<template>
  <div>
    <h1>All Component Features</h1>
    <p>This Vue component demonstrates several key concepts:</p>

    <h2>Template Section</h2>
    <p>The <code>&lt;template&gt;</code> section defines the HTML structure of the component.</p>
    <ul>
      <li>
        <strong>String Interpolation:</strong> The <code>{{ name }}</code> syntax binds the component's
        <code>name</code>
        data property to the template, dynamically displaying its value.
      </li>
      <li>
        <strong>Event Handling:</strong> The <code>@click="changeName"</code> directive binds a click event to the
        <code>changeName</code> method, allowing the button to trigger this method when clicked.
      </li>
    </ul>

    <h2>Script Section</h2>
    <p>The <code>&lt;script&gt;</code> section contains the JavaScript logic of the component.</p>
    <ul>
      <li>
        <strong>Component Name:</strong> The <code>name</code> property specifies the component's name as "welcome".
      </li>
      <li>
        <strong>Data Function:</strong> The <code>data</code> function returns an object that contains reactive data
        properties, such as <code>name</code>, which is initialized to "Sachin".
      </li>
      <li>
        <strong>Methods Object:</strong> The <code>methods</code> object defines the component's methods, including
        <code>changeName</code>, which changes the value of <code>name</code> to "Tanish".
      </li>
    </ul>

    <h2>Style Section</h2>
    <p>The <code>&lt;style lang="scss" scoped&gt;</code> section contains scoped styles for the component.</p>
    <ul>
      <li>
        <strong>Scoped Styles:</strong> The <code>scoped</code> attribute ensures that the styles apply only to this
        component. The example styles change the color of the <code>&lt;h1&gt;</code> element to red
        (<code>#f00</code>).
      </li>
    </ul>

    <componentFeaturesExample />
  </div>
</template>


// Writing my styles here
<style lang="scss" scoped></style>

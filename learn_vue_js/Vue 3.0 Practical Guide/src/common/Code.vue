<script></script>

<template>
  <div class="code">
    <button class="copy-btn">Copy</button>
    <pre><code><slot></slot></code></pre>
  </div>
</template>

<style lang="scss" scoped>
.code {
  position: relative;
  padding: 0 10px;
  border: 1px solid #eee;
  margin-bottom: 10px;

  pre {
    margin: 0;
  }

  .copy-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
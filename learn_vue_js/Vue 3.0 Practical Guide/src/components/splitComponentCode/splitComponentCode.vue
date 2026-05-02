<template>
  <div>
    <h1>Split Code into multiple files</h1>
    <p>
      Title is:
      <strong>{{ title }}</strong>
    </p>
    <button v-on:click="changeTitle">Change Title</button>
  </div>
</template>

<script src="./splitComponentCode.js" />

<style src="./splitComponentCode.scss" scoped />
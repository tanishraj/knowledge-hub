<script setup>
import { computed, onUnmounted, ref, watch, watchEffect } from 'vue';


const time = ref(0);
let timer = null;

const startTimer = () => {
  timer = setInterval(() => {
    time.value = time.value + 1000
  }, 1000)
}

const udpateTimerEverySecond = () => {
  if (timer === null) {
    return startTimer()
  }
  return null
}

const resetTimer = () => {
  clearInterval(timer)
  time.value = 0
}

onUnmounted(() => {
  clearInterval(timer)
})

const computedHours = computed(() => {
  const hours = Math.floor(time.value / 3600000)
  return hours < 10 ? `0${hours}` : hours
})

const computedMinutes = computed(() => {
  const minutes = Math.floor((time.value % 3600000) / 60000)
  return minutes < 10 ? `0${minutes}` : minutes
})

const computedSeconds = computed(() => {
  const seconds = Math.floor((time.value % 60000) / 1000)
  return seconds < 10 ? `0${seconds}` : seconds
})

// // Below code is to start the timer on app load
// watchEffect(() => {
//   setInterval(() => {
//     console.log("THIS IS BEING EXECUTED", timer.value)
//     timer.value = timer.value + 1000
//   }, 1000)
// })

</script>

<template>
  <div class="stopwatch-container">
    <h1 class="stopwatch-title">Stop Watch App</h1>
    <div class="stopwatch">
      <span id="hours" class="time-placeholder">{{ computedHours }} <span class="helper">HOURS</span></span>:<span
        id="minutes" class="time-placeholder">{{ computedMinutes }} <span class="helper">MINUTES</span></span>:<span
        id="seconds" class="time-placeholder">{{
          computedSeconds }} <span class="helper">SECONDS</span></span>
    </div>

    <div class="controls">
      <button id="startStopButton" @click="udpateTimerEverySecond">Start</button>
      <button id="resetButton" @click="resetTimer">Reset</button>
    </div>

  </div>
</template>

<style scoped>
#hours,
#minutes,
#seconds {
  position: relative;
}

.helper {
  position: absolute;
  font-size: 0.5rem;
  top: 20px;
  left: 0;
}
</style>
<script setup lang="ts">
import { computed, ref } from 'vue';

var playerHealth = ref(100);
var monsterHealth = ref(100);
var currentRound = ref(0);
var playerSurrender = ref(false);

class LogEntry {
  subject: string;
  object: string;
  action: string;
  points: number;

  constructor(subject: string, action: string, object: string, points: number) {
    this.subject = subject;
    this.object = object;
    this.action = action;
    this.points = points;
  }
}

var log = ref([]);

var monsterHealthStyle = computed(() => {
  return { width: monsterHealth.value + '%' }
});
var playerHealthStyle = computed(() => {
  return { width: playerHealth.value + '%' }
});

function playerWon() {
  return monsterHealth.value <= 0;
}
function mosterWon() {
  return playerSurrender.value || playerHealth.value <= 0;
}
function draw() {
  return playerWon() && mosterWon();
}
var status = computed(() => {
  if (draw()) {
    return "Draw!";
  } else if (playerWon()) {
    monsterHealth.value = 0;
    return "You won!";
  } else if (mosterWon()) {
    playerHealth.value = 0;
    return "Monster Won!";
  }
  return "";
});

function getRandomNumber(from: number, to: number): number {
  return Number((Math.random() * (to - from) + from).toFixed(0));
}

function attackMonster() {
  var playerAttack = getRandomNumber(5, 12);
  monsterHealth.value -= playerAttack;
  log.value.push(new LogEntry("Player", "attacks", "Monster", playerAttack));

  attackPlayer();
  currentRound.value++;
}
function attackPlayer() {
  var monsterAttack = getRandomNumber(8, 15);
  playerHealth.value -= monsterAttack;
  log.value.push(new LogEntry("Monster", "attacks", "Player", monsterAttack));
}
function specialAttack() {
  var playerAttack = getRandomNumber(12, 24);
  monsterHealth.value -= playerAttack;
  log.value.push(new LogEntry("Player", "performs special attack on", "Monster", playerAttack));

  attackPlayer();
  currentRound.value++;
}
function heal() {
  var playerHeal = getRandomNumber(10, 15);
  playerHealth.value += playerHeal;
  log.value.push(new LogEntry("Player", "heals", "Player", playerHeal));

  attackPlayer();
  currentRound.value++;
}
function surrender() {
  playerSurrender.value = true;
}
</script>

<template>
  <header>
    <h1>Monster Slayer</h1>
  </header>
  <div id="game">
    <section id="monster" class="container">
      <h2>Monster Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="monsterHealthStyle"></div>
      </div>
    </section>
    <section id="player" class="container">
      <h2>Your Health</h2>
      <div class="healthbar">
        <div class="healthbar__value" :style="playerHealthStyle"></div>
      </div>
    </section>
    <section id="status" class="container" v-if="status != ''">
      <h2>Game Status</h2>
      <div>{{ status }}</div>
    </section>
    <section id="controls">
      <button @click="attackMonster">ATTACK</button>
      <button :disabled="currentRound % 3 != 0" @click="specialAttack">SPECIAL ATTACK</button>
      <button @click="heal">HEAL</button>
      <button @click="surrender">SURRENDER</button>
    </section>
    <section id="log" class="container">
      <h2>Battle Log</h2>
      <ul v-for="logEntry in log">
        <span :class="{
          'log--player': logEntry.subject === 'Player',
          'log--monster': logEntry.subject === 'Monster'
        }">{{ logEntry.subject + " " }}</span>
        <span :class="{
          'log--damage': logEntry.action === 'attacks',
          'log--heal': logEntry.action === 'heals'
        }">{{ logEntry.action + " " }}</span>
        <span :class="{
          'log--player': logEntry.object === 'Player',
          'log--monster': logEntry.object === 'Monster'
        }">{{ logEntry.object + " " }}</span>
        <span :class="{
          'log--damage': logEntry.action === 'attacks',
          'log--heal': logEntry.action === 'heals'
        }">({{ logEntry.points }})</span>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>

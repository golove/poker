<script setup lang="ts">

import { pokers, type Poker } from '@/types/poker'
import pokerCard from '../components/pokerCard.vue'
import { ref } from 'vue';



// 洗牌
let shuffle = () => pokers.sort(() => Math.random() - 0.5)

// 随机取出一张牌
let randomCard = () => pokers.splice(Math.floor(Math.random() * pokers.length), 1)[0]


// 发牌
let deal = (num: number) => Array(num).fill(null).map(randomCard)



// 洗牌发牌
shuffle()

let hands = ref([deal(17)])


function dealPoker() {

  hands.value.push(deal(17))
}


// 剩余牌
let remaining = ref(pokers)

function shufflePoker() {
  console.log('xipai')

  remaining.value = remaining.value.sort(() => Math.random() - 0.5)


}


</script>

<template>
  <main>
    <button @click="dealPoker">发牌</button>
    <button @click="shufflePoker">洗牌</button>
    <label for="">
      <h3>已发出{{ hands.length * 17 }}张牌</h3>
    </label>

    <div class="box">
      <div class="hand" v-for="(hand, index) in hands" :key="index + Math.random()">
        <pokerCard v-for="(e, n) in hand" :key="e.type + e.suit" :card="e" :style="{ left: n * 54 + 'px' }" />
      </div>
    </div>
    <label for="">
      <h3>剩余{{ remaining.length }}张牌</h3>
    </label>
    <div class="remaiming">
      <pokerCard v-for="(e, n) in remaining" :key="e.type + e.suit + Math.random()" :card="e"
        :style="{ left: n % 9 * 184 + 'px', top: Math.floor(n / 9) * 260 + 'px' }" />

    </div>
  </main>
</template>

<style>
main {
  /* background-color: ; */
}

.box {
  position: relative;
  width: 100%;
  min-height: 100px;
}

.hand {
  position: relative;
  width: 100%;
  height: 258px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
}

.remaiming {
  position: relative;
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

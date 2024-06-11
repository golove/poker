<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { type Poker } from '@/types/poker'



const props = defineProps<{
  card: Poker,

}>()

const count = computed(() => {
  switch (props.card.type) {
    case 'A':
      return 1
    case '2':
      return 2
    case '3':
      return 3
    case '4':
      return 4
    case '5':
      return 5
    case '6':
      return 6
    case '7':
      return 7
    case '8':
      return 8
    case '9':
      return 9
    case '10':
      return 10
    default:
      return 1
  }
})

const height = 206
const rows = computed(() => {
  const min = height / 4
  let row = Math.ceil(count.value / 4)
  if (count.value == 5 || count.value == 7) row = 3
  if (count.value == 4) row = 2
  // let array:[number?,number?,number?] 

  switch (row) {
    case 1:
      return [count.value]
    case 2:
      return [count.value / 2, count.value / 2]
    case 3:

      switch (count.value) {
        case 5:
          return [Math.floor(count.value / 2), Math.floor(count.value / 3), Math.floor(count.value / 2)]
        case 7:
          return [Math.floor(count.value / 2), Math.floor(count.value / 3), Math.floor(count.value / 2)]

        case 10:
          return [Math.ceil(count.value / 3), Math.floor(count.value / 4), Math.ceil(count.value / 3)]
        default:
          return [count.value / 3, count.value / 3, count.value / 3]
      }

    default:
      return [1]
  }
})


const shapeItemHeight = () => {
  let rotate = ""
  let width = ""
  if (Math.random() > 0.4) {
    rotate = "transform: rotateZ(180deg)"
  }
  switch (rows.value.length) {
    case 1:
      width = "width:80px"
      return `${width};height:${206 / count.value}px;` + rotate
    case 2:
      width = "width:60px"
      return `${width};height:${206 / (count.value / 2)}px;${rotate}`
    case 3:
      width = "width:40px"
      return `${width};height:${206 / Math.ceil(count.value / rows.value.length)}px;` + rotate

  }
}









</script>

<template>

  <div :style="{ color: props.card.suit.color }" class="card">
    <span class="cardText">
      {{ props.card.type }}
    </span>

    <div class="shape">
      <div class="shapeGroup" v-for="i in rows" :key="i + Math.random()">


        <div class="shapeItem" v-for="e in i" :key="i + e + Math.random()" :style=shapeItemHeight()>
          {{ props.card.suit.value }}

        </div>
      </div>
    </div>



    <span class="cardText2">
      {{ props.card.type }}
    </span>



  </div>

</template>

<style>
.card {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 230px;
  background-color: aliceblue;
  border: 1 solid black;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.581) 0.4px 0.5px 2px;
  padding: 12px;
  margin: 4px;
  transition: all 0.3s ease-in-out;
  transform: rotateZ(180deg);
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.788) 0.4px 0.5px 8px;
}

.cardText {
  position: absolute;
  top: 8px;
  font-size: 16px;
}

.cardText2 {
  position: absolute;
  bottom: 8px;
  right: 12px;
  transform: rotateZ(180deg);
  font-size: 16px;
}

.shape {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: aquamarine; */
  align-items: center;
  flex-direction: row;
}

.shapeGroup {

  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: rgb(189, 255, 127); */
  align-items: center;
  flex-direction: column;
}

.shapeItem {
  position: relative;
  font-size: 30px;
  /* 让内容居中 */
  display: flex;
  justify-content: center;
  align-items: center;



}
</style>
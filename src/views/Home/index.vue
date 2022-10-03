<template>
  <div class="farther">
    <div class="box" @contextmenu="rightClick" @click="closeMenu">
      <div
        class="childBox"
        v-show="isShow"
        @click="(e) => e.stopPropagation()"
        ref="rightMenu"
      >
        <a @click="closeMenu" class="shutDown" href="http://www.xxx.com"
          >shut down</a
        >
      </div>
    </div>
    <!-- <button @click="() => move()" class="moveFn">移动---</button> -->
  </div>
</template>

<script setup lang="ts">
import { TweenMax } from "gsap";
import { ref, onMounted } from "vue";

const anima = (
  beign: object,
  end: object,
  time: number,
  onUpdate: Function,
  onComplete?: Function
) => {
  let tween = new TweenMax(beign, time, end)
    .eventCallback("onUpdate", (_) => onUpdate && onUpdate(beign))
    .eventCallback("onComplete", (_) => {
      onComplete && onComplete();
      tween.kill();
    });
};

const move = () => {
  let box = document.querySelector(".box");

  let newAnima = anima(
    {
      top: 0,
      left: 0,
      width: 300,
      height: 300,
    },
    { top: 90, left: 50, width: 10, height: 10, yoyo: true, repeat: -1 },
    1,
    (data: any) => {
      (box as any).style.top = `${data.top}%`;
      (box as any).style.left = `${data.left}%`;
      (box as any).style.width = `${data.width}px`;
      (box as any).style.height = `${data.height}px`;
    }
  );

  // box?.classList.add("changeBox");
};

let isShow = ref(false);

let rightMenu = ref(null);

const rightClick = (e: any) => {
  e.stopPropagation();
  e.preventDefault();
  let menuDom = rightMenu.value;
  (menuDom as any).style.left = `${e.pageX}px`;
  (menuDom as any).style.top = `${e.pageY}px`;
  isShow.value = true;
};

const closeMenu = () => {
  isShow.value = false;
};
</script>

<style scoped>
.farther {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #666;
}

.farther .childBox {
  position: absolute;
  background-color: #111;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: 0;
}

.farther .box {
  width: 300px;
  height: 300px;
  right: 0;
  top: 0;
  left: 0;
  background-color: peru;
  position: absolute;
}

.moveFn {
  position: absolute;
}

.changeBox {
  bottom: 0;
  left: 50%;
  width: 5px !important;
  height: 5px !important;
  transform: translate(-50%);
}

.childBox > .shutDown {
  color: white;
  text-decoration: none;
}

.childBox > .shutDown:link {
  color: white;
}

.childBox > .shutDown:visited {
  color: yellow;
}

.childBox .shutDown:hover {
  color: skyblue;
  text-decoration: underline;
}

.childBox .shutDown:active {
  color: greenyellow;
}
</style>

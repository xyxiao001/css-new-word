<template>
  <section>
    <p class="title-name">第三章 增强 css 属性</p>

    <section class="box">
      <p class="title">fit-content</p>
      <p class="des">尺寸体系，缩紧尺寸, 表现形式是尺寸收缩，但不会超出块级尺寸的限制</p>
      <p>示例</p>
      <section class="fit-content bg-red">
        我是啊哈哈哈哈哈哈哈哈哈
      </section>
      <section class="fit-content bg-red">
        我是
      </section>
      <section class="wrap bg-red">
        <section class="wrap-content bg-black white">
          我是绝对定位，不确定宽度，我要居中
        </section>
      </section>
    </section>

     <section class="box">
      <p class="title">position sticky</p>
      <p class="des">黏性定位，滚动后的固定效果</p>
      <p>示例</p>
      <section class="sticky-box bg-red">
        <section class="sticky-content bg-black white">
          <p>我是滑动的元素哦</p>
          <p class="sticky-nav">我是固定的</p>
          <p>我是滑动的元素哦</p>
          <p>我是滑动的元素哦</p>
          <p>我是滑动的元素哦</p>
          <p>我是滑动的元素哦</p>
        </section>
      </section>
    </section>

  </section>
</template>


<style>
  .fit-content {
    width: fit-content;
    margin-bottom: 20px;
  }

  .wrap {
    position: relative;
    width: 300px;
    height: 200px;
  }

  .wrap-content {
    position: absolute;
    left: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    text-align: center;
    margin: auto;
  }

  .sticky-box {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: auto;
  }

  .sticky-content {
    height: 1000px;
  }

  .sticky-content p {
    text-align: center;
  }

  .sticky-nav {
    position: sticky;
    top: 20px;
    left: 0;
    background: yellow;
    color: #000;
  }
</style>

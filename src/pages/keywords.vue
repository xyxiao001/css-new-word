<template>
  <section>
    <p class="title-name">css 全局关键字</p>
    
    <section class="box">
      <p class="title">inherit</p>
      <p class="des">继承关键字，从 IE8（标准版）开始支持</p>
      <p>示例</p>
      <section class="inherit-example flex wrap bg-red">
        我是父容器，我默认设置了 display flex  背景颜色
        <section class="inherit-child">
          <p>我是子元素</p>
          <p>我继承了父元素的 display</p>
        </section>
      </section>
    </section>

    <section class="box">
      <p class="title">initial</p>
      <p class="des">初始值关键字，可以把值还原为 css 值的默认初始值</p>
      <p>示例</p>
      <section class="initial-example flex wrap bg-red">
        我是父容器，我设置了 hover 属性
        <section class="initial-child">
          <p>我是子元素，我不想有 hover 属性，想要还原</p>
        </section>
      </section>
    </section>

    <section class="box">
      <p class="title">revert</p>
      <p class="des">恢复  可以让当前元素的样式还原为浏览器内置的样式</p>
      <p>示例</p>
      <section class="revert-example flex wrap">
        <ol>
          <li>我是 1</li>
          <li>我是 2</li>
          <li>我是 3</li>
        </ol>
      </section>
    </section>

  </section>
</template>


<style>
.inherit-example  {
  width: 200px;
  height: 200px;
}

.inherit-child {
  display: inherit;
}

.initial-example {
  width: 200px;
  height: 200px;
  cursor: pointer;
}

.initial-child {
  cursor: initial;
}

ol {
  padding: 100px;
}

.revert-example ol {
  padding: revert;
}
</style>

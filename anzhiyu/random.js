var posts=["2024/03/03/部署hexo博客到gitee上踩过的坑/","2024/03/03/值得珍藏的照片/","2024/03/07/写给钦婷/","2024/03/14/stm32-GPIO笔记/","2024/03/19/ADC模拟输入/","2024/03/19/STM32-串口通信/","2024/03/19/按钮扫描篇/","2024/03/31/clion-STM32/","2024/04/07/学习代码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
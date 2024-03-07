var posts=["2024/03/03/部署hexo博客到gitee上踩过的坑/","2024/03/03/值得珍藏的照片/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
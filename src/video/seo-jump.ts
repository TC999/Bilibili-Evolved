if (document.URL.startsWith('https://www.bilibili.com/s/video/')) {
  window.location.assign(document.URL.replace('/s', ''))
}

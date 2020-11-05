class LikeButton {
  constructor () {
    this.initializeAnimation()
  }
  initializeAnimation () {
    const animationParameter = {
      container: document.getElementById('lottie'),
      path: './lottie/animation-w100-h100.json',
      render: 'svg/canvas/html',
      loop: false,
      autoplay: false
    }
    this.animation = bodymovin.loadAnimation(animationParameter)
  }
}

(() => {
  new LikeButton()
})()

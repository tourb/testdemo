class Tabs {
  constructor($container) {
    this.$container = $container
    this.$$tabItems = $container.querySelectorAll('.tab-item')
    this.$$tabPanels = $container.querySelectorAll('.tab-panel')
    this.$line = $container.querySelector('.line')
    //this.init()
    this.bind()
  }

  bind () {
    let self = this
    self.$line.style.width = this.$$tabItems[0].offsetWidth + 'px'
    this.$$tabItems.forEach($tab => {
      $tab.onclick = function () {
        self.$$tabItems.forEach($tab => $tab.classList.remove('active'))
        this.classList.add('active')
        self.$line.style.width = this.offsetWidth + 'px'
        self.$line.style.transform = `translateX(${this.offsetLeft}px)`
        let index = [...self.$$tabItems].indexOf(this)
        self.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
        self.$$tabPanels[index].classList.add('active')
      }
    })
  }
}
document.querySelectorAll('.tabs').forEach($container => new Tabs($container))
//数组去重
let arr = [1, 2, 2, 3]
console.log(arr.filter((v, index) => arr.indexOf(v) === index))
console.log(...new Set(arr))

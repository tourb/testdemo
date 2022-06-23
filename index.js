// class Tabs {
//   constructor($container) {
//     this.$container = $container
//     this.$$tabItems = $container.querySelectorAll('.tab-item')
//     this.$$tabPanels = $container.querySelectorAll('.tab-panel')
//     this.$line = $container.querySelector('.line')
//     this.init()
//     this.bind()
//   }
//   init () {
//     this.$line.style.width = this.$$tabItems[0].offsetWidth + 'px'
//   }
//   bind () {
//     let self = this
//     this.$$tabItems.forEach($tab => {
//       $tab.onclick = function () {
//         self.$$tabItems.forEach($tab => $tab.classList.remove('active'))
//         this.classList.add('active')
//         self.$line.style.width = this.offsetWidth + 'px'
//         self.$line.style.transform = `translateX(${this.offsetLeft}px)`
//         let index = [...self.$$tabItems].indexOf(this)
//         self.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
//         self.$$tabPanels[index].classList.add('active')
//       }
//     })
//   }
// }
// document.querySelectorAll('.tabs').forEach($container => new Tabs($container))
// //数组去重
// let arr = [1, 2, 2, 3]
// console.log(arr.filter((v, index) => arr.indexOf(v) === index))
// console.log(...new Set(arr))
let $ = s => document.querySelector(s)
let $$ = s => document.querySelectorAll(s)
$$('.tabs .tab-item').forEach($tab => {
  //console.log($tab)
  $tab.onclick = function () {
    $$('.tabs .tab-item').forEach($tab => $tab.classList.remove('active'))
    this.classList.add('active')
    console.log(this.offsetWidth)
    console.log(this.offsetLeft)
    $('.tabs .line').style.width = this.offsetWidth + 'px'
    $('.tabs .line').style.transform = `translateX(${this.offsetLeft}px)`
    let index = [...$$('.tabs .tab-item')].indexOf(this)
    // console.log(index)

    $$('.tab-contents .tab-panel').forEach($panel => $panel.classList.remove('active'))
    $$('.tab-contents .tab-panel')[index].classList.add('active')
  }
})
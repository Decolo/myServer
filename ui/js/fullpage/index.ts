// interface Options {
//   element: HTMLElement,
//   duration: string
// }
// class Fullpage {
//   public currentIndex: number;
//   public options: Options;
//   public animating: boolean;
//   public constructor(options: Options = {
//     element: null,
//     duration: '1s'
//   }) {
//     this.currentIndex = 0
//     this.options = options
//     this.animating = false
//     this.checkOptions().initHtml().bindEvent()
//   }
//   public checkOptions() {
//     if (!this.options.element) {
//       throw new Error('Lacking of element')
//     }
//     return this
//   }
//   public initHtml() {
//     this.options.element.style.overflow = 'hidden';
//     for (let item of this.options.element.children) {
//       item.style.transition = `transform ${this.options.duration}`
//     }
//     return this
//   }
//   public bindEvent() {
//     this.options.element.addEventListener('wheel', event => {
//       if (event.deltaY > 0) {
//         this.currentIndex++
//       } else {
//         this.currentIndex--
//       }
//       this.render(this.currentIndex)
//     })
//   }
//   public render(index: number) {
//     if (!this.animating) {
//       return
//     } else {
//       this.animating = true
//       for (let item of this.options.element.children) {
//         item.style.transform = `translateY(-${100 * index}%)`
//       }
//     }
//   }
// }
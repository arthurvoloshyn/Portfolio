import anime from './anime.min';
import { randomBetween } from './wordFx';
const effects = [

  // Effect 6
  {
    options: {
      shapeColors: ['#fff', '#dedede', '#8c8c8c', '#545454', '#000', '#dc2e2e']
    },
    hide: {
      lettersAnimationOpts: {
        duration: 200,
        delay: (t, i, total) => (total - i - 1) * 20,
        easing: 'easeOutExpo',
        opacity: {
          value: [1, 0],
          duration: 100,
          delay: (t, i, total) => (total - i - 1) * 20,
          easing: 'linear'
        },
        scale: [1, 0]
      }
    },
    show: {
      lettersAnimationOpts: {
        duration: 400,
        delay: (t, i) => i * 60,
        easing: 'easeInExpo',
        opacity: [0, 1],
        scale: [0, 1]
      },
      shapesAnimationOpts: {
        duration: 700,
        delay: (t, i) => i * 40,
        easing: 'easeOutExpo',
        translateX: () => [0, anime.random(-20, 20)],
        translateY: () => [0, anime.random(-400, 400)],
        scale: () => [randomBetween(0.2, 0.6), randomBetween(0.2, 0.6)],
        rotate: () => [0, anime.random(-16, 16)],
        opacity: [
          { value: 1, duration: 1, easing: 'linear' },
          { value: 0, duration: 700, easing: 'easeOutQuad' }
        ]
      }
    }
  }

];

class Slideshow {
  constructor (el, callback = () => {}) {
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
    this.DOM.bgs = Array.from(this.DOM.el.querySelectorAll('.slide__bg'));
    this.DOM.words = Array.from(this.DOM.el.querySelectorAll('.word'));
    this.slidesTotal = this.DOM.slides.length;
    this.current = 0;
    this.words = [];
    this.DOM.words.forEach((word, pos) => {
      this.words.push(new Word(word, effects[pos].options));
    });
    this.isAnimating = true;
    this.words[this.current].show(effects[this.current].show)
      .then(() => this.isAnimating = false)
      .then(_ => callback());
  }
  show (direction) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    let newPos;
    let currentPos = this.current;
    if (direction === 'next') {
      newPos = currentPos < this.slidesTotal - 1 ? currentPos + 1 : 0;
    } else if (direction === 'prev') {
      newPos = currentPos > 0 ? currentPos - 1 : this.slidesTotal - 1;
    }

    this.DOM.slides[newPos].style.opacity = 1;
    this.DOM.bgs[newPos].style.transform = 'none';
    anime({
      targets: this.DOM.bgs[currentPos],
      duration: 600,
      easing: [0.2, 1, 0.3, 1],
      translateY: ['0%', direction === 'next' ? '-100%' : '100%'],
      complete: () => {
        this.DOM.slides[currentPos].classList.remove('slide--current');
        this.DOM.slides[currentPos].style.opacity = 0;
        this.DOM.slides[newPos].classList.add('slide--current');
        this.words[newPos].show(effects[newPos].show).then(() => this.isAnimating = false);
      }
    });

    this.words[newPos].hide();
    this.words[this.current].hide(effects[currentPos].hide).then(() => {
      this.current = newPos;
    });
  }
}
export default Slideshow;

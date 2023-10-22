import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBlocksStyle]',
  host: {
    '(document:keyup)': 'initKeyUp($event)',
  },
  exportAs: 'blocksStyle',
})
export class BlocksStyleDirective implements OnInit, AfterViewInit, OnChanges {
  @Input() selector: string;
  @Input() initFirst: boolean = false;
  @Input() items = [];

  @Output() renderComplete = new EventEmitter();

  private index: number = 0;
  public activeElementIndex: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.activeElementIndex = 0;

    if (this.selector) {
      this.items = this.el.nativeElement.querySelectorAll(this.selector);

      if (this.initFirst && this.items.length > 0) {
        this.initStyle(0);
      } else {
        console.error('Не найдено элементов с предоставленным селектором');
      }
    } else {
      console.error('Селектор не предоставлен');
    }

    setTimeout(() => {
      this.renderComplete.emit(true);
    });
  }

  ngOnChanges(data: SimpleChanges): void {}

  initKeyUp(ev: KeyboardEvent): void {
    if (this.items.length === 0) return;

    (this.items[this.index] as HTMLElement)?.removeAttribute('style');

    if (ev.key === 'ArrowRight' && this.index < this.items.length - 1) {
      this.index++;
    } else if (ev.key === 'ArrowLeft' && this.index > 0) {
      this.index--;
    } else if (ev.key === 'ArrowUp' && this.index > 0) {
      this.index--;
    } else if (ev.key === 'ArrowDown' && this.index < this.items.length - 1) {
      this.index++;
    }

    this.activeElementIndex = this.index;
    this.initStyle(this.index);
  }

  initStyle(index: number) {
    if (this.items[index]) {
      (this.items[index] as HTMLElement).setAttribute(
        'style',
        'border: 2px solid red'
      );
    }
  }
}

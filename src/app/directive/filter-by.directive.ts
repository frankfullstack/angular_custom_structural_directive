import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class FilterByContext {
  constructor(public $implicit, public index: number) {}
}

@Directive({
  selector: '[filterBy]',
})
export class FilterByDirective implements OnInit {
  @Input()
  filterBySelect: string[];

  @Input()
  filterByFrom: any[];

  @Input()
  filterByWhere: (c: any) => boolean = (c) => true;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  createView(): void {
    let index = 0;
    for (let item of this.filterByFrom) {
      const result = this.getSelectedProps(item);
      if (this.filterByWhere(item)) {
        this.viewContainerRef.createEmbeddedView(
          this.templateRef,
          new FilterByContext(result, ++index)
        );
      }
    }
  }

  private getSelectedProps(item: any): any {
    const result = {};
    for (let p of this.filterBySelect) {
      result[p] = item[p];
    }
    return result;
  }

  ngOnInit(): void {
    this.createView();
  }
}

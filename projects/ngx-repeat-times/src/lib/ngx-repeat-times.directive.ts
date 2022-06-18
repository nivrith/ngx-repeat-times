import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export type RepeatTimesContext = {
  $implicit: number;
  index: number;
}

/**
 * @description
 * Repeat Template Based On A Number
 *
 * @usage
 * ## Example
 * ```html
 * <div *repeatTimes="length; index as i">
    {{ i }} This will render {{ length }} times
    </div>
 * ```
 *
 *
*/
@Directive({
  selector: '[repeatTimes]'
})
export class RepeatTimesDirective {

  static ngTemplateContextGuard(
    dir: RepeatTimesDirective, ctx: unknown
  ): ctx is RepeatTimesContext { return true; };

  constructor (
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


  @Input('repeatTimes') set count(count: number) {
    this.viewContainer.clear();
    for (let i = 0; i < count; i++) {
      this.viewContainer.createEmbeddedView<RepeatTimesContext>(this.templateRef, { $implicit: i, index: i });
    }
  }
}
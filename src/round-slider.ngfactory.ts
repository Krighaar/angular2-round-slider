/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './round-slider';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import10 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import11 from '@angular/common/src/directives/ng_style';
export class Wrapper_RoundSliderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.RoundSliderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.RoundSliderComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_width(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.width = currValue;
      this._expr_0 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._expr_1 = currValue;
    }
  }
  check_radius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.radius = currValue;
      this._expr_2 = currValue;
    }
  }
  check_max(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.max = currValue;
      this._expr_3 = currValue;
    }
  }
  check_thick(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.thick = currValue;
      this._expr_4 = currValue;
    }
  }
  check_min(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.min = currValue;
      this._expr_5 = currValue;
    }
  }
  check_imageUrl(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.imageUrl = currValue;
      this._expr_6 = currValue;
    }
  }
  check_units(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.units = currValue;
      this._expr_7 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._expr_8 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.onChangeEnd.subscribe(_eventHandler.bind(view,'onChangeEnd'))); }
  }
}
var renderType_RoundSliderComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_RoundSliderComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.RoundSliderComponent>;
  _RoundSliderComponent_0_3:Wrapper_RoundSliderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_RoundSliderComponent_Host0,renderType_RoundSliderComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'round-slider',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_RoundSliderComponent0(this.viewUtils,this,0,this._el_0);
    this._RoundSliderComponent_0_3 = new Wrapper_RoundSliderComponent(new import8.ElementRef(this._el_0));
    this.compView_0.create(this._RoundSliderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._RoundSliderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.RoundSliderComponent) && (0 === requestNodeIndex))) { return this._RoundSliderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RoundSliderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._RoundSliderComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const RoundSliderComponentNgFactory:import7.ComponentFactory<import0.RoundSliderComponent> = new import7.ComponentFactory<import0.RoundSliderComponent>('round-slider',View_RoundSliderComponent_Host0,import0.RoundSliderComponent);
const styles_RoundSliderComponent:any[] = ([] as any[]);
var renderType_RoundSliderComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_RoundSliderComponent,{});
export class View_RoundSliderComponent0 extends import2.AppView<import0.RoundSliderComponent> {
  _text_0:any;
  _el_1:any;
  _NgStyle_1_3:import9.Wrapper_NgStyle;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _NgStyle_6_3:import9.Wrapper_NgStyle;
  _text_7:any;
  _map_10:any;
  /*private*/ _expr_11:any;
  _map_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_RoundSliderComponent0,renderType_RoundSliderComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._map_10 = import3.pureProxy2((p0:any,p1:any):{[key: string]:any} => {
      return {
        width: p0,
        height: p1
      }
      ;
    });
    this._expr_11 = import1.UNINITIALIZED;
    this._map_12 = import3.pureProxy5((p0:any,p1:any,p2:any,p3:any,p4:any):{[key: string]:any} => {
      return {
        'background-image': p0,
        width: p1,
        height: p2,
        top: p3,
        left: p4
      }
      ;
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','round-slider-container'),(null as any));
    this._NgStyle_1_3 = new import9.Wrapper_NgStyle(this.parentView.injectorGet(import10.KeyValueDiffers,this.parentIndex),new import8.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'span',new import3.InlineArray2(2,'class','round-slider-text'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','round-slider-image'),(null as any));
    this._NgStyle_6_3 = new import9.Wrapper_NgStyle(this.parentView.injectorGet(import10.KeyValueDiffers,this.parentIndex),new import8.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.NgStyle) && (6 === requestNodeIndex))) { return this._NgStyle_6_3.context; }
    if (((token === import11.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._NgStyle_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._map_10((this.context.width + 'px'),(this.context.height + 'px'));
    this._NgStyle_1_3.check_ngStyle(currVal_1_0_0,throwOnChange,false);
    this._NgStyle_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_6_0_0:any = this._map_12((('url(' + this.context.imageUrl) + ')'),(this.context.imageSize + 'px'),(this.context.imageSize + 'px'),(this.context.imagePosition + 'px'),(this.context.imagePosition + 'px'));
    this._NgStyle_6_3.check_ngStyle(currVal_6_0_0,throwOnChange,false);
    this._NgStyle_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_11:any = import3.inlineInterpolate(2,'',this.context.value,'',this.context.units,'');
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_4,currVal_11);
      this._expr_11 = currVal_11;
    }
  }
}
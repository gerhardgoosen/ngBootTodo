import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgBootTodoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NgBootTodoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NgBootTodoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgBootTodoSharedModule {
  static forRoot() {
    return {
      ngModule: NgBootTodoSharedModule
    };
  }
}

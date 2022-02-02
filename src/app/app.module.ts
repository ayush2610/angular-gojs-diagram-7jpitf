import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { DiagramEditorComponent } from './diagram-editor/diagram-editor.component';

@NgModule({
  declarations: [AppComponent, ModalComponent, DiagramEditorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordsDetailComponent } from './records-detail/records-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    RecordsDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

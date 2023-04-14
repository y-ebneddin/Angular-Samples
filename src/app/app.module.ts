import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TableFilteringComponent } from './tableFiltering/table-filtering';
import { AppRoutingModule } from './app-routing.module';

import { Router } from '@angular/router';

@NgModule({
  imports: [
    CdkTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HelloComponent, TableFilteringComponent],
  bootstrap: [TableFilteringComponent],
})
export class AppModule {}

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'home',component:HomeComponent,
    loadChildren: () => import('./app-routing.module').then(m => m.AppRoutingModule)},
  { path: 'login', component:LoginComponent},

  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
];
// store
import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { EffectsModule } from '@ngrx/effects';
import {  Effects } from './store/effect';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';
import { FormadminComponent } from './formadmin/formadmin.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import{postreducer} from './store/reducer'
import { Interceptor } from './serviece/interceptor';
import { LazyLoadImageModule } from 'ng-lazyload-image'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    TrangchuComponent,
    FooterComponent,
    SearchComponent,
    ViewmovieComponent,
    FormadminComponent,
  ],
  imports: [
    LazyLoadImageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    MatPaginatorModule,
EffectsModule.forRoot([Effects]),
    StoreModule.forRoot({posts:postreducer}),
    MatCardModule,
    MatSidenavModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularFirestoreModule,
  ],
  providers: [    

  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },

],
  bootstrap: [AppComponent]
})
export class AppModule { }

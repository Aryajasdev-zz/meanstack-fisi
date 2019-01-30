import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './client/header/header.component';
import { HomeComponent } from './client/home/home.component';
import { SliderComponent } from './client/slider/slider.component';
import { PagenotfoundComponent } from './client/pagenotfound/pagenotfound.component';
import { IntroComponent } from './client/intro/intro.component';
import { MissionComponent } from './client/mission/mission.component';
import { VoiceComponent } from './client/voice/voice.component';
import { FooterComponent } from './client/footer/footer.component';
import { ArticlesComponent } from './client/articles/articles.component';
import { EventsComponent } from './client/events/events.component';
import { PressComponent } from './client/press/press.component';
import { JoinusComponent } from './client/joinus/joinus.component';
import { AboutusComponent } from './client/aboutus/aboutus.component';
import { ContactusComponent } from './client/contactus/contactus.component';
import { ArticleComponent } from './client/article/article.component';
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';
import { AdminArticleComponent } from './admin/admin-articles/admin-article/admin-article.component';
import { AdminPagesComponent } from './admin/admin-pages/admin-pages.component';
import { AdminPageComponent } from './admin/admin-pages/admin-page/admin-page.component';
import { AdminPressesComponent } from './admin/admin-presses/admin-presses.component';
import { AdminPressComponent } from './admin/admin-presses/admin-press/admin-press.component';
import { UsersComponent } from './admin/users/users.component';
import { UserComponent } from './admin/users/user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from './admin/admin-topbar/admin-topbar.component';

const appRoutes: Routes = [  
  { path: '', component: HomeComponent, pathMatch :"full" },
  { path: 'admin', component: DashboardComponent },
  { path: 'articles', component: ArticlesComponent}, 
  { path: 'article', component: ArticleComponent},  
  { path: 'admin/articles', component: AdminArticlesComponent},
  { path: 'admin/article', component: AdminArticleComponent},
  { path: 'events', component: EventsComponent},
  { path: 'press', component: PressComponent},
  { path: 'admin/presses', component: AdminPressesComponent},
  { path: 'admin/press', component: AdminPressComponent},
  { path: 'joinus', component: JoinusComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'admin/pages', component: AdminPagesComponent},
  { path: 'admin/page', component: AdminPageComponent},
  { path: 'admin/users', component: UsersComponent},
  { path: 'admin/user', component: UserComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent, 
    HomeComponent, 
    SliderComponent, 
    PagenotfoundComponent, 
    IntroComponent, 
    MissionComponent, 
    VoiceComponent, 
    FooterComponent, 
    ArticlesComponent, 
    EventsComponent,
    PressComponent, 
    JoinusComponent, 
    AboutusComponent, 
    ContactusComponent, 
    ArticleComponent, 
    AdminArticlesComponent, 
    AdminArticleComponent, 
    AdminPagesComponent, 
    AdminPageComponent, 
    AdminPressesComponent, 
    AdminPressComponent, 
    UsersComponent, 
    UserComponent, 
    LoginComponent,
    DashboardComponent,
    AdminSidebarComponent,
    AdminTopbarComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

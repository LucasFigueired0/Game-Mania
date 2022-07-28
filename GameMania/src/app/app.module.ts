import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { ArticleComponent } from './views/article/article.component';
import { SlidesComponent } from './views/slides/slides.component';
import { BannerPromocoesComponent } from './views/banner-promocoes/banner-promocoes.component';
import { SlidesSmartphoneComponent } from './views/slides-smartphone/slides-smartphone.component';
import { BannerNovidadesComponent } from './views/banner-novidades/banner-novidades.component';
import { SlidesAcessoriosComponent } from './views/slides-acessorios/slides-acessorios.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ArticleComponent,
    SlidesComponent,
    BannerPromocoesComponent,
    SlidesSmartphoneComponent,
    BannerNovidadesComponent,
    SlidesAcessoriosComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

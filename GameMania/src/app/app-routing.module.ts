import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './views/article/article.component';
import { BannerNovidadesComponent } from './views/banner-novidades/banner-novidades.component';
import { BannerPromocoesComponent } from './views/banner-promocoes/banner-promocoes.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SlidesAcessoriosComponent } from './views/slides-acessorios/slides-acessorios.component';
import { SlidesSmartphoneComponent } from './views/slides-smartphone/slides-smartphone.component';
import { SlidesComponent } from './views/slides/slides.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "header", component: HeaderComponent },
  { path: "article", component: ArticleComponent },
  { path: "slide", component: SlidesComponent },
  { path: "banner-promocoes", component: BannerPromocoesComponent },
  { path: "slide-smartphone", component: SlidesSmartphoneComponent },
  { path: "banner-novidades", component: BannerNovidadesComponent},
  { path: "slide-acessorios", component: SlidesAcessoriosComponent },
  { path: "Footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

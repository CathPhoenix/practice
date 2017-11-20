import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './application/application.component'
import MenuBarComponent from "./menubar/menubar.component";
import FooterComponent from "./footer/footer.component";
import FilmItemComponent from "./film-item/film-item.component";
import ScoreComponent from "./score/score.component";
import {FormsModule} from "@angular/forms";
import ReviewComponent from "./review/review.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        ApplicationComponent,
        MenuBarComponent,
        FooterComponent,
        FilmItemComponent,
        ScoreComponent,
        ReviewComponent
    ],
    providers: [{provide: "IS_VERBOSE_LOGGER", useValue: false}],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}



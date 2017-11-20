import {Component} from '@angular/core';
import {Film, FilmService} from "../film-service/film-service";
import {ReviewTrackerService} from "../review-tracker-service/review-tracker-service";

@Component({
    moduleId:     module.id,
    selector:    'osl-application', 
    templateUrl: 'application.component.html',
    providers:   [
        FilmService,
        {
            provide: ReviewTrackerService,
            useFactory:(verbose: boolean) => new ReviewTrackerService(verbose),
            deps: ["IS_VERBOSE_LOGGER"]
        }
    ]
})
export default class ApplicationComponent {

    films: Array<Film> = [];

    constructor(filmService: FilmService){

        this.films = filmService.getFilms();
    }
}

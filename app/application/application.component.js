"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var film_service_1 = require("../film-service/film-service");
var review_tracker_service_1 = require("../review-tracker-service/review-tracker-service");
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(filmService) {
        this.films = [];
        this.films = filmService.getFilms();
    }
    ApplicationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-application',
            templateUrl: 'application.component.html',
            providers: [
                film_service_1.FilmService,
                {
                    provide: review_tracker_service_1.ReviewTrackerService,
                    useFactory: function (verbose) { return new review_tracker_service_1.ReviewTrackerService(verbose); },
                    deps: ["IS_VERBOSE_LOGGER"]
                }
            ]
        }),
        __metadata("design:paramtypes", [film_service_1.FilmService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
exports.default = ApplicationComponent;
//# sourceMappingURL=application.component.js.map
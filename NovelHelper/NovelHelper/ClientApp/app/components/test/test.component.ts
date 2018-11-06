import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'test',
    templateUrl: './test.component.html'
})
export class TestComponent {
    public forecasts: number[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/Test').subscribe(result => {
         //   this.forecasts = result.json() as number[];
            this.forecasts = [1, 2, 3, 1, 2, 3];
            console.log(this.forecasts );
        }, error => console.error(error));
    }
}

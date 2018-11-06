import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { IMemo } from '../../models';

@Component({
    selector: 'memo',
    templateUrl: './memo.component.html'
})
export class MemoComponent {
    public forecasts: IMemo[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Memo/List').subscribe(result => {
            this.forecasts = result.json() as IMemo[];
            console.log(this.forecasts);
        }, error => console.error(error));
    }
}

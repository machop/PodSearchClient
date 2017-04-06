import {aurelia, inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class PodcastApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    searchPodcast() {
        this.httpClient.get('http://localhost:58590/api/podcast/72636404-449B-446D-AAD1-8FA4574B86A5').then(data => {
            return data.content;
        });
    }
}

import {inject} from 'aurelia-framework'
import {PodcastApi} from '../../apis/podcast-api';

@inject(PodcastApi)
export class Search {
    constructor(podcastApi) {
        this.podcastApi = podcastApi;
        this.podcastName = '';
    }

    searchPodcast() {
        let response = this.podcastApi.searchPodcast();
        this.podcastName = response.name;
    };
}

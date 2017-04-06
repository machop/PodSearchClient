export class App {
  configureRouter(config, router){
    config.title = 'PodSearch';
    config.map([
      {route: ['', 'search'], name: 'search', moduleId: 'components/search/search', nav: true, title: 'Sök'},
      {route: 'podcasts', name: 'podcasts', moduleId: 'components/podcasts/podcasts', nav: true, title: 'Podcasts'},
      {route: 'about', name: 'about', moduleId: 'components/about/about', nav: true, title: 'Om'}
    ]);

    this.router = router;
  }
}

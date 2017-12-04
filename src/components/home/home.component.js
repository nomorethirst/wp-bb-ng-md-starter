import templateUrl from 'components/home/home.template'

const controller = class HomeController {
  constructor($log) {
    'ngInject'
    this.logger = $log
    this.logger.log('home is a go')
  }
}

export const Home = {
  controller,
  templateUrl,
  controllerAs: 'home'
}
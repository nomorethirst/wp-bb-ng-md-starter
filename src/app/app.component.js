import templateUrl from 'app/app.template'

const controller = class AppController {
  constructor($log, $mdTheming) {
    'ngInject'
    $log.debug('app is a go')
  }
}

export const App = {
  controller,
  templateUrl,
  controllerAs: 'app'
}

import templateUrl from 'components/navbar/navbar.template'

const controller = class NavBarController {
  constructor($log, $state, userService) {
    'ngInject'
    this.logger = $log
    this.state = $state
    this.userService = userService
    this.currentNavItem = 'home'
    this.logger.log('navbar is a go')
  }

  goto(page) {
    this.logger.log(`Goto ${page}`)
    this.state.go(page)
  }
  
  isAuthenticated() {
    return this.userService.isAuthenticated()
  }

  logout() {
    this.userService.logout()
    this.state.go('home')
  }

  getUsername() {
    return this.userService.isAuthenticated() ? this.userService.user.username : ""
  }

}

export const NavBar = {
  controller,
  templateUrl,
  controllerAs: 'navbar'
}
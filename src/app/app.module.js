// Third-party libraries/modules
import uiRouter from '@uirouter/angularjs'
import 'angular-material/angular-material.css'
import ngMaterial from 'angular-material'
import ngAnimate from 'angular-animate'
import ngMessages from 'angular-messages'
import ngMaterialIcons from 'angular-material-icons'
import uiMask from 'angular-ui-mask'

// Services
import { UserService } from 'services/user.service'

// Components
import { App } from 'app/app.component'
import { NavBar } from 'components/navbar/navbar.component'
import { Home } from 'components/home/home.component'
import { Login } from 'components/login/login.component'
import { Signup } from 'components/signup/signup.component'
import { Profile } from 'components/profile/profile.component'


// Config
import { config } from 'app/app.config'
import { routing } from 'app/app.routes'

export default ng
  .module('wp-bb-ng-md-starter', [
    uiRouter, 
    ngMaterial, 
    ngAnimate, 
    ngMessages, 
    ngMaterialIcons,
    uiMask
  ])
  .service('userService', UserService)
  .component('app', App)
  .component('navbar', NavBar)
  .component('home', Home)
  .component('login', Login)
  .component('signup', Signup)
  .component('profile', Profile)
  .config(config)
  .config(routing)
  .name

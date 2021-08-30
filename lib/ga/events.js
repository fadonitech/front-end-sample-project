import * as ga from './index';

export const gaSignUp = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "Sign Up"
    }
  })
}

export const gaMainPage = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "Main Page"
    }
  })
}

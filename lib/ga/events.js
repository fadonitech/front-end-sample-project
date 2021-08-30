import * as ga from './index';

export const gaModalFirstPage = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "Sign Up - Part 1"
    }
  })
}

export const gaModalSecondPage = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "Sign Up - Part 2"
    }
  })
}

export const gaSignUp = () => {
  ga.event({
    action: "sign_up",
    params : {
      method: "Email"
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

import * as ga from './index';

// VIEWS
export const gaHomePage = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "View Home Page"
    }
  })
}

export const gaAboutUs = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "View About Us Page"
    }
  })
}

export const gaSignUp = () => {
  ga.event({
    action: "screen_view",
    params : {
      screen_name: "View Sign Up"
    }
  })
}

// ACTIONS
export const gaCompletedSignUp = () => {
  ga.event({
    action: "sign_up",
    params : {
      method: "Completed Sign Up"
    }
  })
}
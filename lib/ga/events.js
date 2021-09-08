import * as ga from './index';

// VIEWS
export const gaHomePage = () => {
  ga.event({
    action: "screen_view",
    params : {
      event_label: 'View Home Page',
      event_category: 'view_page',
      screen_name: "Home Page"
    }
  })
}

export const gaAboutUs = () => {
  ga.event({
    action: "screen_view",
    params : {
      event_label: 'View About Us Page',
      event_category: 'view_page',
      screen_name: "About Us Page"
    }
  })
}

export const gaSignUp = () => {
  ga.event({
    action: "screen_view",
    params : {
      event_label: 'View Sign Up Page',
      event_category: 'view_page',
      screen_name: "Sign Up"
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
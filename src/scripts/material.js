import { MDCRipple } from "@material/ripple";

// Single instance
// const ripple = new MDCRipple(document.querySelector(".mdc-button"));

// Multiple instances
// const ripples = [].map.call(document.querySelectorAll(".mdc-button"), function (el) {
//   return new MDCRipple(el);
// });

const buttonRipples = [].map.call(document.querySelectorAll(".mdc-button"), function (el) {
  return new MDCRipple(el);
});

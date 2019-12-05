"use strict";

function convertCookieStrToCookieObj(cookieStr) {
  if (!cookieStr) {
    return {};
  }

  return JSON.parse(cookieStr);
}
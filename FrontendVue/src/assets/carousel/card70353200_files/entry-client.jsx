import { jsxDEV } from "/@id/__x00__react/jsx-dev-runtime";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=44032ec6"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom from "/node_modules/.vite/deps/react-dom.js?v=44032ec6"; const hydrate = __vite__cjsImport2_reactDom["hydrate"]; const render = __vite__cjsImport2_reactDom["render"];
import { BrowserRouter, Switch, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=44032ec6";
import { lazyModules } from "/node_modules/@tencent/vrfly/dynamic.jsx";
import { HelmetProvider } from "/node_modules/.vite/deps/react-helmet-async.js?v=44032ec6";
import App from "/pages/vites/card70353200.tsx?t=1723012317123";
const loadHandler = window._FLY_DATA_.ssr ? hydrate : render;
function getRoutes(routes, props = {}) {
  return routes.map((route) => {
    const {
      component: Component,
      path,
      exact,
      routes: routes2
    } = route;
    return /* @__PURE__ */ jsxDEV(Route, { path, render: (routeProps) => {
      return /* @__PURE__ */ jsxDEV(Component, { path: window._FLY_DATA_.path || "", page: window._FLY_DATA_.page || "", query: window._FLY_DATA_.query || "", ...routeProps, ...window._FLY_DATA_.initProps[path || "_"], ...props, children: (nextProps) => routes2 && getRoutes(routes2, nextProps || {}) }, void 0, false, {
        fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
        lineNumber: 17,
        columnNumber: 14
      }, this);
    }, exact }, path || "_", false, {
      fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
      lineNumber: 16,
      columnNumber: 12
    }, this);
  });
}
async function loadLazyComponents() {
  const promiseModules = [];
  for (const [key, val] of lazyModules) {
    if (val instanceof Promise) {
      promiseModules.push(val.then((reactEle) => ({
        key,
        value: reactEle.default || reactEle
      })));
    }
  }
  const ret = await Promise.all(promiseModules);
  ret.forEach((mod) => {
    const {
      key,
      value
    } = mod;
    lazyModules.set(key, value);
  });
}
!async function() {
  await loadLazyComponents();
  const Root = () => /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(HelmetProvider, { context: {}, children: /* @__PURE__ */ jsxDEV(BrowserRouter, { basename: "vites/card70353200", children: /* @__PURE__ */ jsxDEV(Switch, { children: Array.isArray(App) ? getRoutes(App) : /* @__PURE__ */ jsxDEV(Route, { render: (routeProps) => {
    return /* @__PURE__ */ jsxDEV(App, { path: window._FLY_DATA_.path || "", page: window._FLY_DATA_.page || "", query: window._FLY_DATA_.query || "", ...window._FLY_DATA_.initProps, ...routeProps }, void 0, false, {
      fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
      lineNumber: 49,
      columnNumber: 20
    }, this);
  } }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 48,
    columnNumber: 48
  }, this) }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 45,
    columnNumber: 3
  }, this) }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 44,
    columnNumber: 22
  }, this);
  loadHandler(typeof Layout !== "undefined" ? /* @__PURE__ */ jsxDEV(Layout, { Component: Root }, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 55,
    columnNumber: 47
  }, this) : /* @__PURE__ */ jsxDEV(Root, {}, void 0, false, {
    fileName: "/Users/tencent/Code/search-wap/.fly/client/card70353200/entry-client.jsx",
    lineNumber: 55,
    columnNumber: 77
  }, this), document.getElementById("root"));
}();

//# sourceMappingURL=data:application/json;base64,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QUFHIiwibmFtZXMiOlsiUmVhY3QiLCJoeWRyYXRlIiwicmVuZGVyIiwiQnJvd3NlclJvdXRlciIsIlN3aXRjaCIsIlJvdXRlIiwibGF6eU1vZHVsZXMiLCJIZWxtZXRQcm92aWRlciIsIkFwcCIsImxvYWRIYW5kbGVyIiwid2luZG93IiwiX0ZMWV9EQVRBXyIsInNzciIsImdldFJvdXRlcyIsInJvdXRlcyIsInByb3BzIiwibWFwIiwicm91dGUiLCJjb21wb25lbnQiLCJDb21wb25lbnQiLCJwYXRoIiwiZXhhY3QiLCJyb3V0ZVByb3BzIiwicGFnZSIsInF1ZXJ5IiwiaW5pdFByb3BzIiwibmV4dFByb3BzIiwibG9hZExhenlDb21wb25lbnRzIiwicHJvbWlzZU1vZHVsZXMiLCJrZXkiLCJ2YWwiLCJQcm9taXNlIiwicHVzaCIsInRoZW4iLCJyZWFjdEVsZSIsInZhbHVlIiwiZGVmYXVsdCIsInJldCIsImFsbCIsImZvckVhY2giLCJtb2QiLCJzZXQiLCJSb290IiwiQXJyYXkiLCJpc0FycmF5IiwiTGF5b3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VzIjpbImVudHJ5LWNsaWVudC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaHlkcmF0ZSwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBsYXp5TW9kdWxlcyB9IGZyb20gJ0B0ZW5jZW50L3ZyZmx5L2R5bmFtaWMnXG5pbXBvcnQgeyBIZWxtZXRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcblxuaW1wb3J0IEFwcCBmcm9tICcvVXNlcnMvdGVuY2VudC9Db2RlL3NlYXJjaC13YXAvcGFnZXMvdml0ZXMvY2FyZDcwMzUzMjAwLnRzeCdcblxuY29uc3QgbG9hZEhhbmRsZXIgPSB3aW5kb3cuX0ZMWV9EQVRBXy5zc3IgPyBoeWRyYXRlIDogcmVuZGVyXG5cbmZ1bmN0aW9uIGdldFJvdXRlcyhyb3V0ZXMsIHByb3BzID0ge30pIHtcbiAgcmV0dXJuIHJvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XG4gICAgY29uc3QgeyBjb21wb25lbnQ6IENvbXBvbmVudCwgcGF0aCwgZXhhY3QsIHJvdXRlcyB9ID0gcm91dGVcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlXG4gICAgICAgIGtleT17cGF0aCB8fCAnXyd9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIHJlbmRlcj17KHJvdXRlUHJvcHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICBwYXRoPXt3aW5kb3cuX0ZMWV9EQVRBXy5wYXRoIHx8ICcnfVxuICAgICAgICAgICAgICBwYWdlPXt3aW5kb3cuX0ZMWV9EQVRBXy5wYWdlIHx8ICcnfVxuICAgICAgICAgICAgICBxdWVyeT17d2luZG93Ll9GTFlfREFUQV8ucXVlcnkgfHwgJyd9XG4gICAgICAgICAgICAgIHsuLi5yb3V0ZVByb3BzfVxuICAgICAgICAgICAgICB7Li4ud2luZG93Ll9GTFlfREFUQV8uaW5pdFByb3BzW3BhdGggfHwgJ18nXX1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KG5leHRQcm9wcykgPT4gcm91dGVzICYmIGdldFJvdXRlcyhyb3V0ZXMsIG5leHRQcm9wcyB8fCB7fSl9XG4gICAgICAgICAgICA8L0NvbXBvbmVudD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICAgIGV4YWN0PXtleGFjdH1cbiAgICAgID48L1JvdXRlPlxuICAgIClcbiAgfSlcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMYXp5Q29tcG9uZW50cygpIHtcbiAgY29uc3QgcHJvbWlzZU1vZHVsZXMgPSBbXVxuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgbGF6eU1vZHVsZXMpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcHJvbWlzZU1vZHVsZXMucHVzaChcbiAgICAgICAgdmFsLnRoZW4oKHJlYWN0RWxlKSA9PiAoe1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICB2YWx1ZTogcmVhY3RFbGUuZGVmYXVsdCB8fCByZWFjdEVsZVxuICAgICAgICB9KSlcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZU1vZHVsZXMpXG4gIHJldC5mb3JFYWNoKChtb2QpID0+IHtcbiAgICBjb25zdCB7IGtleSwgdmFsdWUgfSA9IG1vZFxuICAgIGxhenlNb2R1bGVzLnNldChrZXksIHZhbHVlKVxuICB9KVxufVxuIShhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGF3YWl0IGxvYWRMYXp5Q29tcG9uZW50cygpXG4gIGNvbnN0IFJvb3QgPSAoKSA9PiA8UmVhY3QuU3RyaWN0TW9kZT5cbiAgPEhlbG1ldFByb3ZpZGVyIGNvbnRleHQ9e3t9fT5cbiAgICA8QnJvd3NlclJvdXRlciBiYXNlbmFtZT1cInZpdGVzL2NhcmQ3MDM1MzIwMFwiPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAge0FycmF5LmlzQXJyYXkoQXBwKSA/IChcbiAgICAgICAgICBnZXRSb3V0ZXMoQXBwKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgcmVuZGVyPXsocm91dGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgICAgICAgIHBhdGg9e3dpbmRvdy5fRkxZX0RBVEFfLnBhdGggfHwgJyd9XG4gICAgICAgICAgICAgICAgICBwYWdlPXt3aW5kb3cuX0ZMWV9EQVRBXy5wYWdlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgcXVlcnk9e3dpbmRvdy5fRkxZX0RBVEFfLnF1ZXJ5IHx8ICcnfVxuICAgICAgICAgICAgICAgICAgey4uLndpbmRvdy5fRkxZX0RBVEFfLmluaXRQcm9wc31cbiAgICAgICAgICAgICAgICAgIHsuLi5yb3V0ZVByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvUm91dGU+XG4gICAgICAgICl9XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIDwvSGVsbWV0UHJvdmlkZXI+XG48L1JlYWN0LlN0cmljdE1vZGU+XG4gIGxvYWRIYW5kbGVyKFxuICAgIHR5cGVvZiBMYXlvdXQgIT09ICd1bmRlZmluZWQnID8gPExheW91dCBDb21wb25lbnQ9e1Jvb3R9IC8+IDogPFJvb3QgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICApXG59KSgpXG4iXSwiZmlsZSI6Ii9Vc2Vycy90ZW5jZW50L0NvZGUvc2VhcmNoLXdhcC8uZmx5L2NsaWVudC9jYXJkNzAzNTMyMDAvZW50cnktY2xpZW50LmpzeCJ9
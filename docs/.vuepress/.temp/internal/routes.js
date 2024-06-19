export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"快速索引"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/Page/10K-Automatic-Uploadplate.html", { loader: () => import(/* webpackChunkName: "Page_10K-Automatic-Uploadplate.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/10K-Automatic-Uploadplate.html.js"), meta: {"title":"10千伏 K型 自愈 信息量表"} }],
  ["/Page/10K-SF6-Uploadplate.html", { loader: () => import(/* webpackChunkName: "Page_10K-SF6-Uploadplate.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/10K-SF6-Uploadplate.html.js"), meta: {"title":"10千伏 K型 SF6充气柜 信息量表"} }],
  ["/Page/10K-Standard-Nameplate.html", { loader: () => import(/* webpackChunkName: "Page_10K-Standard-Nameplate.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/10K-Standard-Nameplate.html.js"), meta: {"title":"10千伏 K型 标准 二次铭牌表"} }],
  ["/Page/10K-Standard-Uploadplate.html", { loader: () => import(/* webpackChunkName: "Page_10K-Standard-Uploadplate.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/10K-Standard-Uploadplate.html.js"), meta: {"title":"10千伏 K型 标准 信息量表"} }],
  ["/Page/10P-Standard-Uploadplate.html", { loader: () => import(/* webpackChunkName: "Page_10P-Standard-Uploadplate.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/Page/10P-Standard-Uploadplate.html.js"), meta: {"title":"10千伏 P型 标准 信息量表"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Web/Github/JinShan-RelayProtection/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

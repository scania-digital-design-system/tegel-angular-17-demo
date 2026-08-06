import { Routes } from "@angular/router";

const routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "form",
    loadChildren: () => import("./form-routes"),
  },
  {
    path: "web-components",
    redirectTo: "web-components/accordion",
    pathMatch: "full"
  },
  {
    path: "web-components/accordion",
    loadComponent: () => import("@components/accordion/accordion.component"),
  },
  {
    path: "web-components/badge",
    loadComponent: () => import("@components/badge/badge.component"),
  },
  {
    path: "web-components/banner",
    loadComponent: () => import("@components/banner/banner.component"),
  },
  {
    path: "web-components/block",
    loadComponent: () => import("@components/block/block.component"),
  },
  {
    path: "web-components/breadcrumbs",
    loadComponent: () => import("@components/breadcrumbs/breadcrumbs.component"),
  },
  {
    path: "web-components/button",
    loadComponent: () => import("@components/button/button.component"),
  },
  {
    path: "web-components/card",
    loadComponent: () => import("@components/card/card.component"),
  },
  {
    path: "web-components/checkbox",
    loadComponent: () => import("@components/checkbox/checkbox.component"),
  },
  {
    path: "web-components/chip",
    loadComponent: () => import("@components/chip/chip.component"),
  },
  {
    path: "web-components/datetime",
    loadComponent: () => import("@components/datetime/datetime.component"),
  },
  {
    path: "web-components/divider",
    loadComponent: () => import("@components/divider/divider.component"),
  },
  {
    path: "web-components/dropdown",
    loadComponent: () => import("@components/dropdown/dropdown.component"),
  },
  {
    path: "web-components/link",
    loadComponent: () => import("@components/link/link.component"),
  },
  {
    path: "web-components/message",
    loadComponent: () => import("@components/message/message.component"),
  },
  {
    path: "web-components/modal",
    loadComponent: () => import("@components/modal/modal.component"),
  },
  {
    path: "web-components/popover-canvas",
    loadComponent: () => import("@components/popover-canvas/popover-canvas.component"),
  },
  {
    path: "web-components/popover-menu",
    loadComponent: () => import("@components/popover-menu/popover-menu.component"),
  },
  {
    path: "web-components/radio-button",
    loadComponent: () => import("@components/radio-button/radio-button.component"),
  },
  {
    path: "web-components/spinner",
    loadComponent: () => import("@components/spinner/spinner.component"),
  },
  {
    path: "web-components/stepper",
    loadComponent: () => import("@components/stepper/stepper.component"),
  },
  {
    path: "web-components/tabs",
    loadComponent: () => import("@components/tabs/tabs.component"),
  },
  {
    path: "web-components/tag",
    loadComponent: () => import("@components/tag/tag.component"),
  },
  {
    path: "web-components/text-field",
    loadComponent: () => import("@components/text-field/text-field.component"),
  },
  {
    path: "web-components/textarea",
    loadComponent: () => import("@components/textarea/textarea.component"),
  },
  {
    path: "web-components/toast",
    loadComponent: () => import("@components/toast/toast.component"),
  },
  {
    path: "web-components/toggle",
    loadComponent: () => import("@components/toggle/toggle.component"),
  },
  {
    path: "web-components/tooltip",
    loadComponent: () => import("@components/tooltip/tooltip.component"),
  },
  {
    path: "text",
    loadComponent: () => import("@pages/text-page/text-page.component"),
  },
  {
    path: "text/text-subpage-with-long-name",
    loadComponent: () => import("@pages/text-subpage/text-subpage.component"),
  },
  {
    path: "tabs-buttons",
    loadComponent: () =>
      import("@pages/tabs-buttons-page/tabs-buttons-page.component"),
  },
  {
    path: "tabs-links",
    loadComponent: () =>
      import("@pages/tabs-links-page/tabs-links-page.component"),
    children: [
      {
        path: "first-tab",
        loadComponent: () =>
          import("@pages/tabs-links-page/tabs-subpage/tabs-subpage.component"),
      },
      {
        path: "second-tab",
        loadComponent: () =>
          import("@pages/tabs-links-page/tabs-subpage/tabs-subpage.component"),
      },
      {
        path: "third-tab",
        loadComponent: () =>
          import("@pages/tabs-links-page/tabs-subpage/tabs-subpage.component"),
      },
      { path: "", redirectTo: "first-tab", pathMatch: "full" },
    ],
  },
  {
    path: "about",
    loadComponent: () => import("@pages/about-page/about-page.component"),
  },
  {
    path: "table",
    loadComponent: () => import("@pages/table-page/table-page.component"),
  },
  {
    path: "ag-grid",
    loadComponent: () => import("@pages/ag-grid/ag-grid-page.component"),
  },
  {
    path: "tanstack",
    loadComponent: () => import("@pages/tanstack-page/tanstack-page.component"),
  },
  {
    path: "settings",
    loadComponent: () => import("@pages/settings-page/settings-page.component"),
  },
  {
    path: "notifications",
    loadComponent: () =>
      import("@pages/notifications-page/notifications-page.component"),
  },
  {
    path: "**",
    loadComponent: () => import("@pages/error-page/error-page.component"),
    pathMatch: "full",
  }, // Wildcard route
] satisfies Routes;

export default routes;

import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import routes from "@routes/app-routing.module";
import { defineCustomElements } from "@scania/tegel/loader";

// Define the prefix for versioning
const prefix = 'v1'; // The prefix they choose
// (window as any).customElementPrefix = prefix; // Set the global prefix

// Register custom elements with the prefix
defineCustomElements(window, {
  transformTagName: (tagName: any) =>
  `${prefix}-${tagName}`
} as any);

// Also register the default custom elements without prefix
defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: "enabled",
      }),
      BrowserModule
    ),
  ],
}).catch((err) => console.error(err));

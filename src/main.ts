import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import routes from "@routes/app-routing.module";
import { defineCustomElements } from "@scania/tegel/loader";

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

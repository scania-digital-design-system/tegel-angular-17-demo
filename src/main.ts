import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import routes from "@routes/app-routing.module";
import { defineCustomElements } from "@scania/tegel/loader";
import { TegelModule } from "@scania/tegel-angular-17";

defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: "enabled",
      }),
      BrowserModule,
      HttpClientModule,
      AgGridModule,
      TegelModule
    ),
  ],
}).catch((err) => console.error(err));

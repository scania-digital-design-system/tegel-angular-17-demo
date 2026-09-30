import { importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AgGridModule } from "ag-grid-angular";
import routes from "@routes/app-routing.module";
import { TegelModule } from "@scania/tegel-angular-17";

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: "enabled",
      }),
      BrowserModule,
      AgGridModule,
      TegelModule,
    ),
  ],
}).catch((err) => console.error(err));

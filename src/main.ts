import { importProvidersFrom, isDevMode, provideZoneChangeDetection } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import {
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  ModuleRegistry,
  NumberEditorModule,
  NumberFilterModule,
  TextEditorModule,
  TextFilterModule,
  enableDevValidations,
  provideGlobalGridOptions,
} from "ag-grid-community";
import routes from "@routes/app-routing.module";
import { TegelModule } from "@scania/tegel-angular-17";

if (isDevMode()) {
  enableDevValidations();
}

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnAutoSizeModule,
  TextFilterModule,
  NumberFilterModule,
  TextEditorModule,
  NumberEditorModule,
]);
provideGlobalGridOptions({ theme: "legacy" });

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    importProvidersFrom(
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: "enabled",
      }),
      BrowserModule,
      TegelModule,
    ),
  ],
}).catch((err) => console.error(err));

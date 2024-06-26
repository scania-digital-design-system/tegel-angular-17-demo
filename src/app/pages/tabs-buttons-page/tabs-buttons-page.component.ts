import { Component } from "@angular/core";
import BreadcrumbsComponent from "../../navigation/breadcrumbs/breadcrumbs.component";
import { TegelModule } from "@scania/tegel-angular-17";
import TabsSubpageComponent from "@pages/tabs-links-page/tabs-subpage/tabs-subpage.component";

@Component({
  selector: "app-tabs-buttons-page",
  templateUrl: "./tabs-buttons-page.component.html",
  standalone: true,
  imports: [BreadcrumbsComponent, TegelModule, TabsSubpageComponent],
})
export default class TabsButtonsPageComponent {
  folderTabIndex: number = 0;
  inlineTabIndex: number = 0;
  navigationTabIndex: number = 0;

  onFolderTabChange(event: any): void {
    this.folderTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }

  onInlineTabChange(event: any): void {
    this.inlineTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }

  onNavigationTabChange(event: any): void {
    this.navigationTabIndex = event.detail.selectedTabIndex;
    console.log(event);
  }
}

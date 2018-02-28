import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortalModule } from "./portal/portal.module";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "portal" },
  { path: "portal", loadChildren: () => PortalModule },
  { path: "**", redirectTo: "portal" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

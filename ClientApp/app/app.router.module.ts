import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortalModule } from "./portal/portal.module";
import { AccountModule } from "./account/account.module";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "account" },
  { path: "portal", loadChildren: () => PortalModule },
  { path: "account", loadChildren: () => AccountModule },
  { path: "**", redirectTo: "account" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

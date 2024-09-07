import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatepickersComponent } from './pages/datepickers/datepickers.component';
import { ButtonDialogComponent } from './pages/button-dialog/button-dialog.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { TableComponent } from './pages/table/table.component';
import { SteeperComponent } from './pages/steeper/steeper.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "datepickers",
        component: DatepickersComponent
    },
    {
        path: "buttondialog",
        component: ButtonDialogComponent
    },
    {
        path: "dialog",
        component: DialogComponent
    },
    {
        path: "table",
        component: TableComponent
    },
    {
        path: "steeper",
        component: SteeperComponent
    }
];

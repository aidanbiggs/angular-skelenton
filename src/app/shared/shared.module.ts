import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedServiceModule } from './shared-service.module';

const components = [];

const pipes = [];

const directives = [];

const imports = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
];

const providers = [];

@NgModule({
    imports: [
        SharedServiceModule,
        ...imports
    ],
    exports: [
        ...imports,
        ...pipes,
        ...components,
        ...directives
    ],
    declarations: [
        ...pipes,
        ...components,
        ...directives
    ],
    providers: [
        ...providers
    ]
})
export class SharedModule {
    public static forRoot() {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}

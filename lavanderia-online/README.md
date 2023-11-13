# ProjetoCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


--------------------------------------------------------------------------------------------------------------
Há duas diretivas de númerico:
    - numerico: implementado igual ao do professor, porém com o ajuste do "undefined". A diferença para o personalizado é que este mostra o caractere digitado e se não numero, ele some ao subir a tecla.
    - meuNumerico: ja tem implementado a questão de mostrar o "undefined". A diferença para a versão do professor é que nesta, ao digitar algo que não seja um número, o digito nem é mostrado na tela. (exemplo editar no INPUT DA IDADE)

Há duas diretivas de valor minimo:
    - minimo-validator: o valor setado é definido dentro da diretiva, logo é "fixo" para o usuario
    - minimo-validator-parametro: o valor setado pode ser passado na tag (exemplo editar no INPUT DA IDADE)
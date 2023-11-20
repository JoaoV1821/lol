import { Pipe, PipeTransform } from "@angular/core"


@Pipe({
    standalone: true,
    name: "format"
})

export class Format implements PipeTransform {
    transform(value: string | undefined, ...args: any[]): string {
        if (value != undefined) {
            const parts = value.split('-');
            const dateObject = new Date(+parts[0], +parts[1] - 1, +parts[2]);
            const dataFormatada = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
            return dataFormatada;
        }
        return "";
    }

}

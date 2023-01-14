import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEntrada } from 'src/app/shared/interfaces/ientrada';
import { EntradasService } from '../../../../shared/services/entrada/entradas.service';

@Component({
    selector: 'app-editar-entrada',
    templateUrl: './editar-entrada.component.html',
    styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent implements OnInit {
    private id: number = -1;
    private entrada: IEntrada = {
        id: this.id,
        body: "",
        autor: "",
        fecha: "",
        userId: 0,
        title: "Es una fake entrada ..."
    }

    public grupoEntrada: FormGroup;

    private HoyDate = new Date();
    private readonly FechaMinima: string = '1500-01-01 00:00:00';
    public readonly FechaMinimaLocal: string = new Date(this.FechaMinima).toLocaleDateString();
    public readonly HoyEsLocal: string = this.HoyDate.toLocaleDateString();

    constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute, private entradaServicio: EntradasService, private router: Router) {
        this.grupoEntrada = this.formBuilder.group({
            titulo: ['', Validators.required],
            autor: ['', Validators.required],
            resumen: ['', [Validators.required, Validators.minLength(10)]],
            fecha: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.ObtenerEntradaEditar();
    }

    private ObtenerEntradaEditar() {
        this.rutaActiva.params.subscribe((params) => { this.id = +params['id']; });
        this.entradaServicio.RecuperarEntrada(this.id).subscribe({
            next: (dato: IEntrada) => {
                this.entrada = dato;
                this.Resetear();
            },
            error: () => { },
            complete: () => { }
        });
    }

    private ParseFechaNumero(): number {
        let fechaNueva = this.grupoEntrada.get("fecha")?.value;

        return new Date(fechaNueva).getTime();
    }

    public FechaAnterior(): boolean {
        let fechaMinNumerica = new Date(this.FechaMinima).getTime();

        return this.ParseFechaNumero() < fechaMinNumerica;
    }

    public FechaPosterior(): boolean {
        let fechaActualNumerica = new Date().getTime();


        return this.ParseFechaNumero() > fechaActualNumerica;
    }

    public ErrorFecha(): boolean {
        return this.FechaAnterior() || this.FechaPosterior();
    }

    public EnviarEditada(): void {
        this.ModificarEntrada();
        this.entradaServicio.EditarEntrada(this.entrada).subscribe({
            next: (dato) => {
                alert(`Entrada editada correctamente (${dato.fecha} = ${this.entrada.fecha}) ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert("Entrada editada con errores ...");
            }
        })
    }

    private ModificarEntrada(): void {
        this.entrada.autor = this.grupoEntrada.get('autor')?.value;
        this.entrada.body = this.grupoEntrada.get('resumen')?.value;
        this.entrada.fecha = this.grupoEntrada.get('fecha')?.value;
        this.entrada.title = this.grupoEntrada.get('titulo')?.value;
    }

    public Resetear(): void {
        this.grupoEntrada.patchValue({
            titulo: this.entrada.title,
            autor: this.entrada.autor,
            resumen: this.entrada.body,
            fecha: this.entrada.fecha
        });
    }

    public Cancelar(): void {
        this.router.navigate(['/administracion/dashboard']);
    }
}

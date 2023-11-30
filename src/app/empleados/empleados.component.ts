import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    {id:1, nombre:"Juan", sueldo:"$450.94", activo:true},
    {id:2, nombre:"Luis", sueldo:"$400.94", activo:true},
    {id:3, nombre:"Ana", sueldo:"$550.00", activo:true},
    {id:4, nombre:"Rubí", sueldo:"$300.00", activo:true},
    {id:5, nombre:"Gerardo", sueldo:"$520.04", activo:true},
    {id:6, nombre:"Raquel", sueldo:"$445.94", activo:false},
    {id:7, nombre:"María", sueldo:"$450.50", activo:false},
    {id:8, nombre:"Jorge", sueldo:"$246.00", activo:true},
    {id:9, nombre:"Carolina", sueldo:"$373.45", activo:false},
    {id:10, nombre:"Efraín", sueldo:"$268.24", activo:false}
  ]
}

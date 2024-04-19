import { Component } from '@angular/core';
import { TarefasServiceService } from '../../services/tarefas-service.service';
import { Tarefa } from '../../interfaces/Tarefa';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarefas-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas-component.component.html',
  styleUrl: './tarefas-component.component.css'
})
export class TarefasComponentComponent {

  tarefas: Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({});
  constructor(private tarefaService: TarefasServiceService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataVencimento: ['', Validators.required],
    })
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  inserir() {
    if (this.tarefaForm.valid) {
      const taskNovo: Tarefa = {
        id: this.generateRandomString(3),
        titulo: this.tarefaForm.value.titulo,
        descricao: this.tarefaForm.value.descricao,
        dataVencimento: this.tarefaForm.value.dataVencimento
      }
      this.tarefaForm.reset();
      this.tarefaService.add(taskNovo);
      alert("Cadastro feito com sucesso!")
    } else {
      alert("Dados invalidos");
      return;
    }
  }

  listar(): void {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: string): void {
    this.tarefaService.remover(id);
    alert("Cadastro feito com sucesso!!");
  }

  ngOnInit(): void {
    this.listar();
  }
}

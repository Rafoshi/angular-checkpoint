import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasServiceService {

  constructor() { }
  tarefas: Tarefa[] = [
    { id: "123", titulo: "Lavar roupa", descricao: "lavar roupa bem", dataVencimento: "14/01/2004" },
    { id: "125", titulo: "Lavar tenis", descricao: "lavar tenis bem", dataVencimento: "14/01/2004" },
    { id: "126", titulo: "LImpar quarto", descricao: "limpar quarto", dataVencimento: "14/01/2004" }
  ];

  listar(): Tarefa[] {
    return this.tarefas;
  }

  remover(id: string) {
    const tarefa = this.tarefas.find(c => c.id == id);
    if (tarefa) {
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);
    }
  }

  add(tarefa: Tarefa) {
    this.tarefas.push(tarefa);
  }
}

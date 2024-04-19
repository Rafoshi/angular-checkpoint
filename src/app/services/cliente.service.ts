import { Injectable } from '@angular/core';
import { Cliente } from "../interfaces/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
  clientes: Cliente[] = [
    { id: "eueueue", nome: "yannsantana", telefone: "9393939" },
    { id: "sjajsa", nome: "nayy", telefone: "121212" },
    { id: "euwqiiq", nome: "anny", telefone: "213123" }
  ];

  listar(): Cliente[] {
    return this.clientes;
  }
  remover(id: string) {
    const cliente = this.clientes.find(c => c.id == id);
    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index,1);

    }
  }

  add(cliente:Cliente){
    this.clientes.push(cliente);
    
  }
}

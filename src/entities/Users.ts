export class Users {
  id: number;
  email?: string;
  name: string;
  cpf?: string | null;
  cargo?: string;

  constructor(
    id: number,
    email: string,
    name: string,
    cpf: string,
    cargo: string
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.cpf = cpf;
    this.cargo = cargo;
  }
}

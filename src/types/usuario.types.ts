export interface IUsuario {
  id?: string;
  nombre: string;
  correo_electronico: string;
  contrasena: string;
  telefono?: string;
  direccion?: string;
  es_cuidador: boolean;
  fecha_nacimiento?: string;
  fecha_registro?: string;
}

export interface IUsuarioResponse {
  id: string;
  nombre: string;
  correo_electronico: string;
  telefono?: string;
  direccion?: string;
  es_cuidador: boolean;
  fecha_registro: Date;
}

export interface ILoginRequest {
  correo_electronico: string;
  contrasena: string;
}

export interface ILoginResponse {
  usuario: IUsuarioResponse;
  token: string;
}

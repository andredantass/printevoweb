import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  // moduleId: module.id,
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  private usuario: Usuario = new Usuario("", "", "");
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {

    var user: string  = this.form.get('uname').value;
    var senha: string = this.form.get('password').value;

    console.log("usuario: " + user);
    console.log("senha: " + senha);

    if (user) {
      this.usuarioService.getUsuario(user)
        .then((usuario: Usuario) => {
          this.usuario = usuario;
        })
    }


    if (user !='admin')  {
      alert("Usuário ou senha inválidos !");
    }
    else {
       this.router.navigate(['/']);
    }

  }
}

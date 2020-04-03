import { Component, OnInit } from '@angular/core';
import { PessoaControllerService } from 'src/app/typescript-angular-client/api/pessoaController.service';
import { CompromissoControllerService } from 'src/app/typescript-angular-client';
import { MedicoControllerService } from 'src/app/typescript-angular-client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject, fromEventPattern } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Compromisso } from 'src/app/model/compromisso.model';
import { Medico } from 'src/app/model/medico.model';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { CreateMedicoComponent } from '../create-medico/create-medico.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CreateCompromissoComponent } from '../create-compromisso/create-compromisso.component';
 
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
 editProfileForm: FormGroup;
 
  headElementsMedico = ['#', 'Médico'];
  listMedicos: Array<Medico> = new Array();

  headElements = ['#', 'Médico', 'Data/Hora'];
  list: Array<Compromisso> = new Array();
  error: string = null;
  nome: string = null;

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;
  modalOptions:NgbModalOptions;
 
  constructor(private fb: FormBuilder, private modalService: NgbModal, private compromissoApi: CompromissoControllerService, private medicoApi: MedicoControllerService) { }
  
  ngOnInit(): void {
    const userData: { 
      nome: string;
    } = JSON.parse(localStorage.getItem('userData'));
    this.nome = 'Bem vindo ' + userData.nome + ' !!';
    this.getMedicos();
    this.getConsultasByPessoa();

    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }

    this.editProfileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      email: ['']
     });
    
  }
  
  private getMedicos(){
    
    this.medicoApi.findAllUsingGET1().subscribe(resp => {
      resp.data.forEach(e => {
        this.listMedicos.push(e);
      });
      this.error = null;
    },
    errorMessage => {
      this.handleError(errorMessage);
    })
  }
  
  private getConsultasByPessoa(){
    
    const userData: {
      nome: string;
      userId: string;
    } = JSON.parse(localStorage.getItem('userData'));
    
    this.compromissoApi.allByPessoaUsingGET(userData.userId).subscribe(resp => {
      resp.data.forEach(element => {
        this.list.push(element);
      });
      this.error = null;
    },
    errorMessage => {
      this.handleError(errorMessage);
    })
  }
  
  private handleError(errorRes: HttpErrorResponse) {
    
    let errorMessage = 'Erro desconhecido!';
    if (!errorRes.error || !errorRes.error.errorDescription) {
      return throwError(errorMessage);
    }
    
    errorMessage = errorRes.error.errorDescription.message
    this.error = errorMessage;
    return throwError(errorMessage);
  }

  
  public open(cadastraMedico:boolean) {
    const modalRef = this.modalService.open(cadastraMedico ? CreateMedicoComponent : CreateCompromissoComponent, {
        windowClass: 'modal-holder',
        centered: true
    });
  }
}

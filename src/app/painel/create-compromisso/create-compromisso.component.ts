import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicoControllerService } from 'src/app/typescript-angular-client';
import { Medico } from 'src/app/model/medico.model';

@Component({
  selector: 'app-create-compromisso',
  templateUrl: './create-compromisso.component.html',
  styleUrls: ['./create-compromisso.component.css']
})
export class CreateCompromissoComponent {

  @Input()id: number;
  myForm: FormGroup;
  error: string = null;
  allMedicos = [ "medico 1", "medico 2", "medico 3", "medico 4" ] 
  
  listMedicos: Array<Medico> = new Array();

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder,
   private medicoApi: MedicoControllerService
  ) {
    this.createForm();
    this.getMedicos();
  }
  

  private createForm() {
    this.myForm = this.formBuilder.group({
      nomeMedico: ['', Validators.required]
    });
  }
  
  public submitForm() {
    console.log(this.myForm.value)
    this.activeModal.close(this.myForm.value);
  }

  private getMedicos(){
    
    this.medicoApi.findAllUsingGET1().subscribe(resp => {
      resp.data.forEach(e => {
        this.listMedicos.push(e);
      });
      this.error = null;
    },
    errorMessage => {
    })
  }
  

}

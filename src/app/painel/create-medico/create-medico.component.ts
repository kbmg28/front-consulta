import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-medico',
  templateUrl: './create-medico.component.html',
  styleUrls: ['./create-medico.component.css']
})
export class CreateMedicoComponent implements OnInit {
  
  formMedico: FormGroup;

  constructor(public modalService: NgbModal,
    private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    console.log('create')
    this.formMedico = this.formBuilder.group({
      nomeMedico: ''
    });
    console.log('form: ', this.formMedico)
  }
  
  onSubmit() {
    this.modalService.dismissAll();
    console.log("res:", this.formMedico.getRawValue());
   }

   closeModal(){
    this.modalService.dismissAll();
   }
}

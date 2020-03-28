import { Component, OnInit } from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})
export class DynamicFormBuilderComponent {

  modalPopupObject: any;
  display: boolean = false;
  vegetables = [
    { name: 'Label', type: 'label', inputType: 'label' },
    { name: 'text', type: 'input-text', inputType: 'text', placeholder: '' },
    // { name: 'div', type: 'input-text', inputType: 'div', placeholder: '' },
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox', placeholder: null, displayText: 'Check box' }];

  droppedVegetables = [];
  droppedItems = [];
  dragEnabled = true;
  htmlText: any;
  test: string = '';
  currentDraggedItem: any;
  model:any=""

  colClassList=['col-3','col-4','col-6','col-12'];
  selectedCol:any=this.colClassList[0];
  FormList: any=[];

  constructor() {
    this.modalPopupObject = {};
  }
  
  onAnyDrop(e: any) {
    this.currentDraggedItem = e;
    if(e.dragData.type !== 'label'){    this.display = true;}
    else {
      this.updateDroppedItem(this.currentDraggedItem);
    }
    
    // this.droppedItems.push(e.dragData);
    // this.updateHtmlCode();
    // this.test += this.renderHtmlCode(e.dragData);
  }

  updateHtmlCode(): void {
    this.htmlText = this.droppedItems;
  }

  cloneForm(){
    var originalFrom=document.getElementById("formElements");
    var cln = originalFrom.cloneNode(true);
    console.log('clone form',originalFrom.toString())
    var name =prompt("Enter name of form")
    let obj={
      id:1,
      name:name,
      form:originalFrom.innerHTML,
    }

    this.FormList.push(obj)
    document.getElementById("cloneForm").appendChild(cln);
  }

  populateForm(obj:any){

    // console.log("frag data",obj.form)
 
    document.getElementById("cloneForm2").innerHTML=    (obj.form);

  }

  // removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }

  renderHtmlCode(htmlObject: any): string {
    if (htmlObject.inputType === 'label') {
      return '<label> </label>';
    } else if(htmlObject.inputType === 'text') {
      return`<input  type=${htmlObject.inputType} name=${htmlObject.placeholder}  placeholder=${htmlObject.placeholder} [(ngModel)]=model.${htmlObject.placeholder} />`
      
     
    }
    else if(htmlObject.inputType === 'div') {
      return (`<div class="row">
      <div class="col-6 fl" droppable></div>
      <div class="col-6 fl" droppable></div>
  </div>`)
      
     
    }
  }

  onSubmit(f: any): void {
    this.display = false;
    this.updateDroppedItem(f.value);
  }

  updateDroppedItem(e: any): void {
    this.currentDraggedItem.dragData.placeholder = e.placeholder;
    this.droppedItems.push(this.currentDraggedItem.dragData);
    this.updateHtmlCode();
    this.test += this.renderHtmlCode(this.currentDraggedItem.dragData);
  }

  showModelData(f){
console.log("form data",f.value)
console.log("model data",this.model)

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dragable',
  templateUrl: './custom-dragable.component.html',
  styleUrls: ['./custom-dragable.component.css']
})
export class CustomDraggableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDragStart(event) {
    debugger
    event.dataTransfer.setData('text/plain', event.target.id);
  
    event.currentTarget.style.backgroundColor = 'yellow';
  }

  onDragOver(event) {
    debugger

    event.preventDefault();
  }

  onDrop(event) {
    debugger
    const id = event.dataTransfer.getData('text');
  
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    
    dropzone.appendChild(draggableElement);
  
    event
      .dataTransfer
      .clearData();
  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-impressoras',
  templateUrl: './impressoras.component.html',
  styleUrls: ['./impressoras.component.scss']
})
export class ImpressorasComponent {

  rows: any[] = [];
  selected: any[] = [];
  temp = [];

  columns = [{ name: 'Marca' }, { prop: 'modelo' }, { name: 'total_ini' }, { name: 'total_fim' }];

  
  constructor() {
    this.fetch(data => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/impressoras.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.nome.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }

  onSelect(event){
    console.log('Event: select: ', event, this.selected);

  }

  onActivate(event) {
    console.log('Event: activate: ', event);

  }

}

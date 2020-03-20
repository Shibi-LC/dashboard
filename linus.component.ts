import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/commands.json';
import * as usersList from '../../../assets/data/users.json';

@Component({
  selector: 'app-linus',
  templateUrl: './linus.component.html',
  styleUrls: ['./linus.component.scss']
})
export class LinusComponent implements OnInit {
  public filteredData: object = {};
  public totalCommands: number = 0;
  public mostUsedCommand: string = '';
  public users:any= [];
  public mostUsedCommandTimes: number = 0;

  constructor() { }

  ngOnInit() {
    data.default.forEach(e => {
      e.option = e.option.replace(/[\",\[,\],\-]/g, "");
      if (!e.option) e.option = "default";
      this.filteredData[e.option] = this.filteredData[e.option] ? [...this.filteredData[e.option], e] : [e]
      return e;
    });
    this.users = usersList.default.map( e => {
      e.option = e.option.replace(/[\",\[,\],\-]/g, "");
      if (!e.option) e.option = "default";
      return e;
    });
    for (let [key, value] of Object.entries(this.filteredData)) {
      this.totalCommands += value.length;
      if(this.mostUsedCommandTimes < value.length ) {
        this.mostUsedCommandTimes = value.length;
        this.mostUsedCommand = key;
      }
    }
  }

}

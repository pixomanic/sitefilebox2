import { Component, OnInit } from '@angular/core';
import {Item, PlantService} from '../services/plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.page.html',
  styleUrls: ['./plant.page.scss'],
})
export class PlantPage implements OnInit {
  items: Item[];
  constructor(private itemService: PlantService) {

   }

  ngOnInit() {
    this.itemService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  remove(item) {
    this.itemService.removeItem(item.id);
  }
}

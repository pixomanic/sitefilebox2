import { Component, OnInit } from '@angular/core';
import { Item, PlantService } from './../services/plant.service';

import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: Item = {
    name: 'Plant Item Name',
    serial: "Serial Number"
  };
  itemId=null;
  constructor(private route: ActivatedRoute, 
              private nav: NavController, 
              private plantService: PlantService, 
              private loadingController: LoadingController) {

               }

  ngOnInit() {
    this.itemId = this.route.snapshot.params['id'];
    if (this.itemId)  {
      this.loadItems();
    }
  }

  async loadItems() {
    const loading = await this.loadingController.create({
      message: 'Loading Items...'
    });
    await loading.present();
 
    this.plantService.getItem(this.itemId).subscribe(res => {
      loading.dismiss();
      this.item = res;
    });
  }

  async saveItem() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Item..'
    });
    await loading.present();
 
    if (this.itemId) {
      this.plantService.updateItem(this.item, this.itemId).then(() => {
        loading.dismiss();
        this.nav.goBack(true);
      });
    } else {
      this.plantService.addItem(this.item).then(() => {
        loading.dismiss();
        this.nav.goBack(true);
      });
    }
  }
 
}

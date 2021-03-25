import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  items;

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.initializeItems();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  initializeItems() {
    this.items = [
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getReportes() {
    this.reporteServices.obtenerReportes().subscribe(
      res => {
        console.log(res)
      },
      err => this.presentToast("Error al enviar Reporte")
    );
  }

}

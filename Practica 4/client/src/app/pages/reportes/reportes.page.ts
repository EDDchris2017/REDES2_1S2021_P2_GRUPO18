import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service'
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  items;

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.initializeItems();
  }

  async presentAlert(datos) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingreso de reportes de practicantes',
      subHeader: `Solicitud atendida por el servidor \"${'jose'}\"`,
      message: `Carnet <strong>${datos}</strong><hr> Nombre <strong>lorem1</strong><hr> Curso <strong>lorem1</strong><hr> Procesado <strong>lorem1</strong><hr> Fecha <strong>lorem1</strong><hr> Cuerpo del Reporte <strong>lorem1</strong>`,
      buttons: ['OK']
    });

    await alert.present();
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
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-en-reporte',
  templateUrl: './en-reporte.page.html',
  styleUrls: ['./en-reporte.page.scss'],
})
export class EnReportePage implements OnInit {
  reporte: any = [];

  constructor(private reporteServices: ReporteService,
    public toastController: ToastController) { }

  ngOnInit() {
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
  obtenerDatos(id, name, cur, cuerpo) {
    console.log(id.value, name.value, cur.value, cuerpo.value)
    this.reporteServices.guardarReporte(id.value, name.value, cur.value, cuerpo.value).subscribe(
      res => {
        console.log(res)
      },
      err => this.presentToast("Error al enviar Reporte")
    )
  }

}

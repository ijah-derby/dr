import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Injector,
} from "@angular/core";
import { ChartsService } from "../../services/charts/charts.service";
import { Extender } from "src/shared/helpers/extender";

/**
 * get all charts data to display on charts page from the charts service
 */
@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent extends Extender implements OnInit {
  // @ViewChild('bar', null) public barCanvas: ElementRef;
  // @ViewChild('line', null) public lineCanvas: ElementRef;
  // @ViewChild('pie', null) public pieCanvas: ElementRef;
  // @ViewChild('doughnut', null) public doughnutCanvas: ElementRef;

  public barChart: any;
  public lineChart: any;
  public doughnutChart: any;
  public pieChart: any;

  constructor(
    private injector: Injector,
    private chartsService: ChartsService
  ) {
    super(injector);
  }

  /** get all charts data to display on charts page from the charts service */
  public ngOnInit() {
    this.loadingService.presentProcessingLoading();
    console.log("charts ngOnInit()");
    // this.barChart = this.chartsService.createBarChart(this.barCanvas.nativeElement);
    // this.doughnutChart = this.chartsService.createDoughnutChart(this.doughnutCanvas.nativeElement);
    // this.lineChart = this.chartsService.createLineChart(this.lineCanvas.nativeElement);
    // this.pieChart = this.chartsService.createPieChart(this.pieCanvas.nativeElement);
    let myIframe = document.getElementById("FrameContent");
    myIframe.addEventListener("load", () => {
      console.log("loaded");
      this.loadingService.dismissLoader();
    });
    this.loadingService.dismissLoader();
  }
}

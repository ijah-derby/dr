import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Injector,
} from "@angular/core";
import { ChartsService } from "../../services/charts/charts.service";
import { Extender } from "src/shared/helpers/extender";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


/**
 * get all charts data to display on charts page from the charts service
 */
@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent extends Extender implements OnInit {

  text: string='Don’t Ramp Something for us! Social media community app Meeting all your needs in one place Join us and become a Dont Rampian!buiding commUNITY.'
  imgurl:string= 'https://dontramp.com/hq/wp-content/uploads/2020/12/photo.jpg'
  link: string='https://dontramp.com'


  // @ViewChild('bar', null) public barCanvas: ElementRef;
  // @ViewChild('line', null) public lineCanvas: ElementRef;
  // @ViewChild('pie', null) public pieCanvas: ElementRef;
  // @ViewChild('doughnut', null) public doughnutCanvas: ElementRef;

  public barChart: any;
  public lineChart: any;
  public doughnutChart: any;
  public pieChart: any;
 

  constructor(
    private iab: InAppBrowser,
    private injector: Injector,
    private socialSharing: SocialSharing,
    private spinnerDialog: SpinnerDialog,
    private chartsService: ChartsService
  ) {
    super(injector);
  }

  ShareGeneric(parameter){
    const url = this.link
    const text = parameter+'\n'
    this.socialSharing.share(text, 'MEDIUM', null, url)
  }
  
  ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
  }

  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!')
  }

  SendEmail(){
    this.socialSharing.shareViaEmail('text', 'subject', ['info@dontramp.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }




  openBusiness() {
    let browser = this.iab.create('https://dontramp.com/hq/businesses', '_blank','toolbarcolor=#ffffff,location=yes,closebuttoncolor=#202020,navigationbuttoncolor=#202020');

  
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
  }
  


  openMoors() {
    let browser = this.iab.create('https://dontramp.com/hq/moors', '_blank','toolbarcolor=#ffffff,location=yes,closebuttoncolor=#202020,navigationbuttoncolor=#202020');

  
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
  
  }

  openLaw() {
    let browser = this.iab.create('https://dontramp.com/hq/know-the-law', '_blank','toolbarcolor=#ffffff,location=yes,closebuttoncolor=#202020,navigationbuttoncolor=#202020');

  
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);     
    }, err => {
      this.spinnerDialog.hide();
    })
    
    browser.on('loadstop').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('loaderror').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })
    
    browser.on('exit').subscribe(()=>{
      this.spinnerDialog.hide();
    }, err =>{
      this.spinnerDialog.hide();
    })

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

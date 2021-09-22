import { Component, OnInit, ViewChild } from '@angular/core';
import { FaceRecognitionService } from '../services/face-recognition.service'

@Component({
  selector: 'app-face-analyze',
  templateUrl: './face-analyze.component.html',
  styleUrls: ['./face-analyze.component.css']
})
export class FaceAnalyzeComponent implements OnInit {

  faceDetails: any;
  @ViewChild('mainImg') mainImg : any;
  public multiplier: number;

  constructor(private faceRecognitionService: FaceRecognitionService) { }

  ngOnInit(): void {
  }

  /**
   * Calls face-recognition service to get the attributes of the person in the image.
   * @param imageUrl the Url of the image
   */
  getPersonDetails(imageUrl: string){
    this.faceRecognitionService.findBy(imageUrl).subscribe(data =>{
      this.faceDetails = data[0];
    });
  }

  /**
   * This method is triggered whenever the photo is uploaded
   * @param $event
   */
  imageLoaded(event: any) {
    this.faceDetails = [];
    let img = this.mainImg.nativeElement;
    this.multiplier = img.clientWidth / img.naturalWidth;
  }
}

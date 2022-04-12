import { Component, OnInit } from '@angular/core';
import { Album } from '../albums/album.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  albumPlaying = {} as Album;

  constructor() { }

  ngOnInit(): void {
  }

  onPlay(event: Album): void {
    this.albumPlaying = event;
  }

}

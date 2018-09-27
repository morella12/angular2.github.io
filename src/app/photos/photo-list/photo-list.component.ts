import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators'
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoServices } from '../photo/photo.services';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy{
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  
  constructor(
    private activateRoute: ActivatedRoute,
    private photoServices: PhotoServices
  ) {}
  
  ngOnInit(): void {
    this.userName = this.activateRoute.snapshot.params.userName;
    this.photos = this.activateRoute.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    
    this.photoServices
      .listFromUberPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
    });
  }
}

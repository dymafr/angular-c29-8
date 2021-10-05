import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LayoutModule } from '../../shared/modules/layout.module';
import { PHOTOS_ROUTES } from './photos.routes';
import { PhotosSearchComponent } from './views/photos-search/photos-search.component';

@NgModule({
  declarations: [PhotosSearchComponent],
  imports: [
    LayoutModule,
    FormsModule,
    RouterModule.forChild(PHOTOS_ROUTES),
    // StoreModule.forFeature(),
    EffectsModule.forFeature([]),
  ],
})
export class PhotosModule {}

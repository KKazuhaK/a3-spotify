import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ProfileData } from 'src/app/data/profile-data';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  name:string = "";
  profile_pic:string = "assets/unknown.jpg";
  profile_link:string = "";


  //TODO: inject the Spotify service
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

   /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  aboutMe() {
    // 2. Implement aboutMe() to fetch profile info from the service
   {
    this.spotifyService.aboutMe().then((data: ProfileData) => {
      this.name = data.name;
      this.profile_pic = data.imageURL || "assets/unknown.jpg";
      this.profile_link = data.spotifyProfile;
    });
  }
  }
}

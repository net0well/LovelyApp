import {Component, inject, OnInit} from '@angular/core';
import { LikesService } from '../_services/likes.service';
import { Member } from '../_models/member';
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {FormsModule} from "@angular/forms";
import { MembersCardComponent } from '../members/members-card/members-card.component';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ButtonsModule, FormsModule, MembersCardComponent, NgClass],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit{
  private likesService = inject(LikesService);
  members: Member[] = [];
  predicate = 'liked';

  ngOnInit(): void {
    this.loadLikes();
  }

  getTitle(){
    switch (this.predicate){
      case 'liked': return 'Pessoas que você curtiu';
      case 'likedBy': return 'Pessoas que curtiram você';
      default: return 'Deram match'
    }
  }
  loadLikes() {
    this.likesService.getLikes(this.predicate).subscribe({
      next: members => this.members = members
    })
  }
}

import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { LikesService } from '../_services/likes.service';
import { Member } from '../_models/member';
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {FormsModule} from "@angular/forms";
import { MembersCardComponent } from '../members/members-card/members-card.component';
import {NgClass} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ButtonsModule, FormsModule, MembersCardComponent, NgClass, PaginationModule, RouterLink],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit, OnDestroy {
  likesService = inject(LikesService);
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.loadLikes();
    this.loadLikeIds();
  }

  ngOnDestroy(): void {
    this.likesService.paginatedResult.set(null);
  }

  getTitle(){
    switch (this.predicate){
      case 'liked': return 'Pessoas que você curtiu';
      case 'likedBy': return 'Pessoas que curtiram você';
      default: return 'Deram match'
    }
  }

  loadLikes() {
    this.likesService.getLikes(this.predicate, this.pageNumber, this.pageSize);
  }

  loadLikeIds() {
    this.likesService.getLikesIds();
  }

  pageChanged(event: any){
    if(this.pageNumber !== event.page){
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }

  hasUserLikedMember(member: Member): boolean {
    return this.likesService.likeIds().includes(member.id);
  }

  likeMember(member: Member) {
    this.likesService.toggleLike(member.id).subscribe(() => {
      this.loadLikeIds();
      this.loadLikes();
    });
  }
}

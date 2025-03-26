import {Component, OnInit, inject} from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { MembersCardComponent } from '../members-card/members-card.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MembersCardComponent, PaginationModule, CommonModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
   memberService = inject(MembersService);
   pageNumber = 1;
   pageSize = 12;

    ngOnInit(): void {
      if(!this.memberService.paginatedResult()){
        this.loadMembers();
      }
    }
    loadMembers() {
      this.memberService.getMembers(this.pageNumber, this.pageSize)
    }

    pageChanged(event: any){
      if(this.pageNumber != event.page){
        this.pageNumber = event.page;
        this.loadMembers();
      }
    }
}

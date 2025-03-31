import {Component, OnInit, inject} from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { MembersCardComponent } from '../members-card/members-card.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CommonModule} from "@angular/common";
import { AccountService } from '../../_services/account.service';
import { UserParams } from '../../_models/userParams';
import {FormsModule} from "@angular/forms";
import {ButtonsModule} from "ngx-bootstrap/buttons";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MembersCardComponent, PaginationModule, CommonModule, FormsModule, ButtonsModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
   memberService = inject(MembersService);
   genderList = [{value: 'male', display: 'Homens'}, {value: 'female', display: 'Mulheres'}]

    ngOnInit(): void {
      if(!this.memberService.paginatedResult()){
        this.loadMembers();
      }
    }
    loadMembers() {
      this.memberService.getMembers()
    }

    resetFilters(){
     this.memberService.resetUserParams();
     this.loadMembers();
    }

  validateMinAge() {
    if (this.memberService.userParams().minAge < 18) {
      this.memberService.userParams().minAge = 18;
    }
  }


    pageChanged(event: any){
      if(this.memberService.userParams().pageNumber != event.page){
        this.memberService.userParams().pageNumber = event.page;
        this.loadMembers();
      }
    }
}

import {Component, OnInit, inject} from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { MembersCardComponent } from '../members-card/members-card.component';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {CommonModule} from "@angular/common";
import { AccountService } from '../../_services/account.service';
import { UserParams } from '../../_models/userParams';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MembersCardComponent, PaginationModule, CommonModule, FormsModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
   private accountService = inject(AccountService)
   memberService = inject(MembersService);
   userParams = new UserParams(this.accountService.currentUser());
   genderList = [{value: 'male', display: 'Homens'}, {value: 'female', display: 'Mulheres'}]

    ngOnInit(): void {
      if(!this.memberService.paginatedResult()){
        this.loadMembers();
      }
    }
    loadMembers() {
      this.memberService.getMembers(this.userParams)
    }

    resetFilters(){
     this.userParams = new UserParams(this.accountService.currentUser());
     this.loadMembers();
    }

  validateMinAge() {
    if (this.userParams.minAge < 18) {
      this.userParams.minAge = 18;
    }
  }


    pageChanged(event: any){
      if(this.userParams.pageNumber != event.page){
        this.userParams.pageNumber = event.page;
        this.loadMembers();
      }
    }
}

import {Component, OnInit, inject} from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { MembersCardComponent } from '../members-card/members-card.component';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MembersCardComponent],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit{
  private memberService = inject(MembersService);
  members: Member[] = [];

    ngOnInit(): void {
      this.loadMembers();
    }
    loadMembers() {
      this.memberService.getMembers().subscribe({
        next: members => this.members = members
      })
    }
}

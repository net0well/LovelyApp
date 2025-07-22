import {Component, inject, OnInit, ViewChild} from '@angular/core';
import { MembersService } from '../../_services/members.service';
import {ActivatedRoute, Router} from "@angular/router";
import { Member } from '../../_models/member';
import {TabDirective, TabsetComponent, TabsModule} from 'ngx-bootstrap/tabs';
import {GalleryItem, GalleryModule, ImageItem} from 'ng-gallery';
import {CommonModule, DatePipe} from "@angular/common";
import {MemberMessagesComponent} from "../member-messages/member-messages.component";
import {MessageService} from "../../_services/message.service";
import {Message} from "../../_models/message";

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [TabsModule, GalleryModule, DatePipe, MemberMessagesComponent, CommonModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs') memberTabs?: TabsetComponent;

  private messageService = inject(MessageService);
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  member: Member = {} as Member;
  images: GalleryItem[] = [];
  activeTab?: TabDirective;
  messages: Message[] = [];

  activeTabHeading: string = '';

  ngOnInit(): void {
    this.route.data.subscribe({
      next: data => {
        this.member = data['member'];
        if (this.member && this.member.photos) {
          this.images = this.member.photos.map(p =>
            new ImageItem({ src: p.url, thumb: p.url })
          );
        }

        if (!this.activeTabHeading) {
          this.activeTabHeading = 'Sobre ' + this.member.knownAs;
        }
      }
    });

    this.route.queryParams.subscribe({
      next: params => {
        if (params['tab']) {
          this.activeTabHeading = params['tab'];
          if (params['tab'] === 'Mensagens') {
            this.loadMessages();
          }
        }
      }
    });
  }

  onTabActivated(data: TabDirective): void {
    this.activeTab = data;
    this.activeTabHeading = data.heading || '';

    if (data.heading && this.member) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { tab: data.heading },
        queryParamsHandling: 'merge'
      });
    }

    if (data.heading === 'Mensagens') {
      this.loadMessages();
    }
  }

  private loadMessages(): void {
    if (this.messages.length === 0 && this.member && this.member.userName) {

      this.messageService.getMessageThread(this.member.userName).subscribe({
        next: messages => {
          this.messages = messages;
          console.log('Messages loaded:', messages.length);
        },
        error: error => {
          console.error('Error loading messages:', error);
        }
      });
    }
  }

  isTabActive(tabHeading: string): boolean {
    return this.activeTabHeading === tabHeading;
  }

  selectTab(tabsetComponent: TabsetComponent, heading: string): void {
    console.log('Selecting tab:', heading);

    if (tabsetComponent && tabsetComponent.tabs) {
      const targetTab = tabsetComponent.tabs.find(x => x.heading === heading);
      if (targetTab) {
        targetTab.active = true;
        this.activeTabHeading = heading;

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: heading },
          queryParamsHandling: 'merge'
        });

        if (heading === 'Mensagens') {
          this.loadMessages();
        }
      } else {
        console.error('Tab not found:', heading);
      }
    } else {
      console.error('Tabset component not available');
    }
  }
}

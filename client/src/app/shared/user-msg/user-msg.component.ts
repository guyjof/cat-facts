import { Component, OnInit } from '@angular/core';
import { UserMsgService } from 'src/app/services/user-msg.service';
import { Msg } from 'src/app/types';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnInit {

  public userMsg: Msg | null = null

  constructor(private userMsgService: UserMsgService) { }

  ngOnInit(): void {
    this.userMsgService.currentMessage.subscribe((message: any) => this.userMsg = message)
  }

  getClass(): string {
    return this.userMsg?.type ? this.userMsg.type : '';
  }

}

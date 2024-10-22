// angular import
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party

// icon
import { IconService } from '@ant-design/icons-angular';
import {
  BellOutline,
  SettingOutline,
  GiftOutline,
  MessageOutline,
  PhoneOutline,
  CheckCircleOutline,
  LogoutOutline,
  EditOutline,
  UserOutline,
  ProfileOutline,
  WalletOutline,
  QuestionCircleOutline,
  LockOutline,
  CommentOutline,
  UnorderedListOutline,
  ArrowRightOutline,
  GithubOutline
} from '@ant-design/icons-angular/icons';
import { AuthenticationService } from 'src/app/auth/service';
import { LoginResponse } from 'src/app/api/models';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit {
  @Input() styleSelectorToggle!: boolean;
  @Output() Customize = new EventEmitter();
  windowWidth: number;
  screenFull: boolean = true;
  userLogined: LoginResponse;
  constructor(
    private iconService: IconService,
    private _authenticationService: AuthenticationService,
    private _router: Router,
  ) {
    this.windowWidth = window.innerWidth;
    this.iconService.addIcon(
      ...[
        CheckCircleOutline,
        GiftOutline,
        MessageOutline,
        SettingOutline,
        PhoneOutline,
        LogoutOutline,
        UserOutline,
        EditOutline,
        ProfileOutline,
        QuestionCircleOutline,
        LockOutline,
        CommentOutline,
        UnorderedListOutline,
        ArrowRightOutline,
        BellOutline,
        GithubOutline,
        WalletOutline
      ]
    );
  }
  ngOnInit(): void {
    console.log(this._authenticationService.currentUserValue);
    this.userLogined = this._authenticationService.currentUserValue;
  }
  logout() {
    // Xóa thông tin người dùng trong local storage
    localStorage.removeItem('currentUser');

    // Gọi service để thực hiện đăng xuất nếu cần
    this._authenticationService.logout();

    // Chuyển hướng đến trang đăng nhập hoặc trang khác
    this._router.navigate(['/login']); // Cập nhật đường dẫn đúng
  }
  profile = [
    {
      icon: 'edit',
      title: 'Edit Profile'
    }
    // {
    //   icon: 'user',
    //   title: 'View Profile'
    // },
    // {
    //   icon: 'profile',
    //   title: 'Social Profile'
    // },
    // {
    //   icon: 'wallet',
    //   title: 'Billing'
    // }
  ];

  setting = [
    {
      icon: 'question-circle',
      title: 'Support'
    }
    // {
    //   icon: 'user',
    //   title: 'Account Settings'
    // },
    // {
    //   icon: 'lock',
    //   title: 'Privacy Center'
    // },
    // {
    //   icon: 'comment',
    //   title: 'Feedback'
    // },
    // {
    //   icon: 'unordered-list',
    //   title: 'History'
    // }
  ];
}

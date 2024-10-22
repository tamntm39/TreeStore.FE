import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Role } from 'src/app/auth/models';
// import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from 'src/app/api/models';
// import { NotifierService } from 'angular-notifier';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<LoginResponse>;

  //private
  private currentUserSubject: BehaviorSubject<LoginResponse>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(
    private _http: HttpClient,
    // private _toastrService: ToastrService,
    // private notifierService: NotifierService,
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.currentUserSubject;
    if (isPlatformBrowser(this.platformId)) {
      this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('currentUser') as string));
    }
    this.currentUser = this.currentUserSubject?.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): LoginResponse {
    return this.currentUserSubject?.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.roleName === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.roleName === Role.Client;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http.post<any>(`${environment.apiUrl}/login`, { email: email, password: password }).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        if (user.success) {
          // Store user details and jwt token in local storage to keep user logged in between page refreshes
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('currentUser', JSON.stringify(user.data));
          }

          // Display welcome swal!
          Swal.fire({
            title: '👋 Welcome, ' + user.data.fullname + '!',
            text: 'Bạn đã đăng nhập thành công! 🎉',
            icon: 'success',
            confirmButtonText: 'OK',
            backdrop: true, // Đặt thành false nếu bạn không muốn có nền tối
            position: 'center' // Vị trí hiển thị của modal
          });

          this.currentUserSubject.next(user.data);
        } else {
          // Display error swal
          Swal.fire({
            title: 'Thông báo',
            text: user.message,
            icon: 'error',
            confirmButtonText: 'OK',
            backdrop: true
          });
        }

        return user.data;
      })
    );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
    }

    // notify
    this.currentUserSubject.next(null!);
    // this.notifierService.notify('success', `Đăng xuất thành công`);
  }
}

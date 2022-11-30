import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}      //to be able to redirect user somewhere else

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {     //next is response from API
    return next.handle(request).pipe(
      catchError(error => {           //checking status from http response (404, 400, 500...)
        if(error) {
          if(error.status === 400){
            if(error.error.errors){
                throw error.error;
            }
            else {
              this.toastr.error(error.error.message, error.error.statusCode);
            }
          }

          if(error.status === 401){
            this.toastr.error(error.error.message, error.error.statusCode);
          }

          if(error.status === 404){
            this.router.navigateByUrl('/not-found');
          }
          if(error.status === 500){
            const navigationExtras: NavigationExtras = {state: {error: error.error}}   //creating new error object with our data from error
            this.router.navigateByUrl('/server-error', navigationExtras);
          }
        }
        return throwError(error);
      })
    );
  }
}

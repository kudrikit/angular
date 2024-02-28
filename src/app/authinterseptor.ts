import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dummyToken = 'needRealToken';

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${dummyToken}`
      }
    });

    return next.handle(authRequest).pipe(
      catchError(error => {
        return of(error);
      })
    );
  }
}

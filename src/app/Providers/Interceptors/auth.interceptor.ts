import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const params = req.params.append(
      'code',
      '3hQBtGcJ3qtzYYPlA7mlYTB2Z1VEpUyjhKOW48PyXhq2vsrmgttsBg=='
    );

    req = req.clone({
      params,
    });
    return next.handle(req);
  }
}

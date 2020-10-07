import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      url: `https://mobileaccelerator.azurewebsites.net/api/${req.url}`,
    });
    return next.handle(req);
  }
}
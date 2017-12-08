import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { UrlResponseInterface } from '../interfaces/url-response-interface.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShortenerComponent implements OnInit {

  readonly SHORTEN = 'ENCURTAR';
  readonly COPY = 'COPIAR';

  submitButtonText: string;
  sentUrl: string;
  shortened: boolean;

  constructor(private apiRequest: ApiRequestService) {
  }

  ngOnInit() {
    this.submitButtonText = 'ENCURTAR';
  }

  keyDown(inputField: HTMLInputElement, event: KeyboardEvent) {
    if ((event.key === 'Control' || event.ctrlKey) && !(event.ctrlKey && event.key === 'v')) {
      return;
    }
    if (event.key === 'Enter') {
      document.getElementById('submitButton').click();
      return;
    }
    if (this.shortened) {
      inputField.value = '';
      this.shortened = false;
    }
  }

  buttonClicked(urlInput: HTMLInputElement) {
    if (this.shortened) {
      urlInput.select();
      document.execCommand('copy');
    } else {
      this.shortenUrl(urlInput);
    }
  }

  shortenUrl(urlInput: HTMLInputElement) {
    const url = urlInput.value;
    if (!url) {
      alert('O campo da url está vazio.');
      return;
    }
    this.sentUrl = url;
    const encodedUrl = encodeURIComponent(url);
    this.apiRequest.postUrl(encodedUrl).subscribe(
      (response: UrlResponseInterface) => {
        urlInput.value = response.data.shortUrl;
        this.shortened = true;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}

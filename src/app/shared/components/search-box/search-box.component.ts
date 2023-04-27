import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>(); // apuntes debouncer y subject
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';
  
  @Input()
  public initialValue: string = '';

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    });
  }

  ngOnDestroy(): void {  
    this.debouncerSuscription?.unsubscribe();
  }

  onKeypress( searchTerm : string) {
    this.debouncer.next( searchTerm );
  }

}

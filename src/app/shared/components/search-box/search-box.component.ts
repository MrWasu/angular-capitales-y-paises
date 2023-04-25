import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>(); //! apuntes debouncer y subject
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output() //! apuntes del input 1
  public onValue = new EventEmitter<string>();

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

  ngOnDestroy(): void {  //!apuntes
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }

  onKeypress( searchTerm : string) {
    this.debouncer.next( searchTerm );
  }

}

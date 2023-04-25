import { Component} from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchByCapital(input: string): void {

    this.isLoading = true; 

    // ! apuntes del input 3

    this.countriesService.searchCapital(input)
    .subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    }) //! apuntes de porque si no se pone suscripbes no se ejecuta
  }

}

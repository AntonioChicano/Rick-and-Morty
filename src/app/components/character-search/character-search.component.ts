import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';


@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public query: string;
  public result: string = '';
  @Input() labelButton: string = '';
  public charactersSearch: any;
  public charactersList: any;
  public messageNoResults: string = '';
  public noId: string = '';
  public charname: string = '';
  public charid: string = '';
  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }

  ngOnInit(): void {
  }

  searchByName(event: any) {

    if (event.valid) {
      this.rickmortyService.getCharactersByName(event.value).subscribe(
        (data) => {
          this.charactersSearch = data.results;
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

  searchById(event: any) {

    if (event.valid) {
      this.rickmortyService.getCharactersById(event.value).subscribe(
        (data) => {
          this.charactersSearch = [data];
          this.noId = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.noId = 'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

}

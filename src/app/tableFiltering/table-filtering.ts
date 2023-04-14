import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'table-filtering',
  templateUrl: './table-filtering.html',
  styleUrls: ['./table-filtering.css'],
})
export class TableFilteringComponent implements OnInit {
  columns = [
    {
      columnDef: 'name',
      header: 'Tenant Name',
      displayFilter: true,
      cell: (element: any) => `${element.name}`,
    },
    {
      columnDef: 'id',
      header: 'ID',
      displayFilter: true,
      cell: (element: any) => `${element.id}`,
    },
    {
      columnDef: 'colour',
      header: 'Favourite Colour',
      displayFilter: true,
      cell: (element: any) => `${element.colour}`,
    },
    {
      columnDef: 'pet',
      header: 'Pet',
      displayFilter: false,
      cell: (element: any) => `${element.pet}`,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);
  people = [
    {
      name: 'John',
      id: 1,
      colour: 'Green',
      pet: 'Dog',
    },
    {
      name: 'Sarah',
      id: 2,
      colour: 'Purple',
      pet: 'Cat',
    },
    {
      name: 'Lindsay',
      id: 3,
      colour: 'Blue',
      pet: 'Lizard',
    },
    {
      name: 'Megan',
      id: 4,
      colour: 'Orange',
      pet: 'Dog',
    },
  ];

  // nameKey = 'name';
  // petKey = 'pet';
  // colourKey = 'colour';
  // idKey = 'id';
  // columnsToDisplay = ['name', 'id', 'favouriteColour', 'pet'];

  dataSource = new MatTableDataSource();
  filterValues = { name: '', id: '', colour: '', pet: '' };
  filterForm;

  constructor(private fb: FormBuilder) {
    this.dataSource.data = this.people;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      name: [''],
      id: [''],
      colour: [''],
      pet: [''],
    });
    this.filterForm.valueChanges.subscribe((value) => {
      this.dataSource.filter = JSON.stringify(value);
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return (
        data.name.toLowerCase().indexOf(searchTerms.name) !== -1 &&
        data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1 &&
        data.colour.toLowerCase().indexOf(searchTerms.colour) !== -1 &&
        data.pet.toLowerCase().indexOf(searchTerms.pet) !== -1
      );
    };
    return filterFunction;
  }
}

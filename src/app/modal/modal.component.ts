import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import { from, take } from 'rxjs';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild("places")
  places: GooglePlaceDirective;

  @Output('ngModelChange')
  update = new EventEmitter();

  public placesVariants: Address[];

  // TODO: any => options
  public autocompleteOptions = {
    types: [],
    componentRestrictions: { country: "UA" }
  };

  public form: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.pattern('[- +()0-9]+'), Validators.required]],
      idNumber: ['', [Validators.minLength(13), Validators.required]],
      country: ['', Validators.required],
      postalCode: ['', Validators.required],
    })
  }

  open(content: any): void {
    console.log(content);
    from(this.modalService.open(content, { size: 'lg' }).result)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

// TODO: han
  public handleAddressChange($event?: any, address?: Address) {
    // if (address) {
    //   this.placesVariants.push(address);
    //   console.log(this.placesVariants)
    //   console.log(address.name);
    //   this.update.emit(address.name)
    // }
  }

  handleOnChange($event: any) {
    console.log($event)
  }
}

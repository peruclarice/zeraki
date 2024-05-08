import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-the-waitlist',
  standalone: true,
  imports: [],
  templateUrl: './join-the-waitlist.component.html',
  styleUrl: './join-the-waitlist.component.scss'
})
export class JoinTheWaitlistComponent implements OnInit {
  // alert: { type: FuseAlertType; message: string } = {
  //   type   : 'success',
  //   message: ''
  // };
  
  joinTheWaitlistForm: UntypedFormGroup | undefined;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
      // private _authService: AuthService,
      private _formBuilder: UntypedFormBuilder
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.joinTheWaitlistForm = this._formBuilder.group({
          name : ['', Validators.required],
          email     : ['', [Validators.required, Validators.email]],
          // password  : ['', Validators.required],
          rememberMe: ['']
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  joinTheWaitlist(): void
  {
  }
}

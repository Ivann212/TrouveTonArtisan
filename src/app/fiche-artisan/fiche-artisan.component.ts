import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from '../datas.service';
import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fiche-artisan',
  templateUrl: './fiche-artisan.component.html',
  styleUrls: ['./fiche-artisan.component.scss']
})
export class FicheArtisanComponent implements OnInit {
  artisan: any;

  constructor(
    private route: ActivatedRoute,
    private datasService: DatasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artisan = this.datasService.artisans.find(a => a.id === id);
  }

  form: FormGroup = this.fb.group({
    from_name: '',
    subject: '',
    message: '',
  })

async send() {
  emailjs.init('U7AKnqbm2_Po6TXgp')
  let response = await emailjs.send("service_e303xjo","template_1ixv2mf",{
    name: this.form.value.from_name,
    subject: this.form.value.subject,
    message: this.form.value.from_name,
    });

    alert('le message a bien été envoyé');
    this.form.reset();
}
  

}

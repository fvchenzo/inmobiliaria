import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  project: any = []
  apartment: any = []

  constructor(
    private readonly ps: ProjectService,
    private readonly as: ApartmentService,
    private ar: ActivatedRoute
  ) { }

  __getProjectById(id: number) {
    this.ps.__getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number}) => item.id == id)
      //console.log(this.project)
    })
  }

  __getApartmentById(id: number) {
    this.as.__getApartments().subscribe((rest: any) => {
      this.apartment = rest.data.filter((item: { id: number}) => item.id == id)
      //console.log(this.apartment)
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if (params.id && params.projectId) {
        this.__getProjectById(params.projectId)
        this.__getApartmentById(params.id)
      }
    })
  }

}

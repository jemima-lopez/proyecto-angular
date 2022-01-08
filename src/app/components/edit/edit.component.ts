import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/gobal';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project!: Project;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> = [];
  public url: string | undefined;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar proyecto";
    this.url = Global.url;
   }


  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.getProject(id);
    });
  }

  //guardar datos
  onSubmit(form: any){

    this._projectService.updateProject(this.project).subscribe(
      Response =>{
        if(Response.project){

          //subir imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+Response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) =>{

              this.save_project=result.project;
              this.status = 'success';

              //form.reset();
            });
          }else{
            this.save_project=Response.project;
            this.status = 'success';
          }

        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      Response =>{
        this.project = Response.project;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}

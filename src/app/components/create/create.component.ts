import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/gobal';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public save_project: any;
  public status: string | undefined;
  public filesToUpload: Array<File> = [];
  public url: string | undefined;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "crear proyecto";
    this.project = new Project('','','','',2021,'','');
    this.url = Global.url;
   }

  ngOnInit(): void {
  }

  //guardar datos
  onSubmit(form: any){

    this._projectService.saveProject(this.project).subscribe(
      Response =>{
        if(Response.project){

          //subir imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+Response.project._id, [], this.filesToUpload, 'image')
            .then((result:any) =>{

              this.save_project=result.project;

              this.status = 'success';

              form.reset();
            });
          }else{
            this.save_project=Response.project;
              this.status = 'success';
              form.reset();
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

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

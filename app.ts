import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  FirstName:string = ""
  lastName:string = ""
  Gender:string = "Male"
  Age:number = 0
  Student_list:any[]=[]
  Update_Index :number = -1

  Save(){
    const Id = Math.floor(Math.random() * 1000);
    this.Student_list.push({
      Id:Id,
      FirstName: this.FirstName,
      lastName: this.lastName,
      Gender: this.Gender,
      age: this.Age
    })
    this.clearForm()
  }

  clearForm(){
    this.FirstName = ""
    this.lastName = ""
    this.Age = 0
    this.Gender = "Male"
    this.Update_Index = -1
  }

  deleteStudent(Id:number){
    if(confirm("Are you want to delete this student ?? ")){
      let index = this.Student_list.findIndex( x => x.Id === Id)
      this.Student_list.splice(index , 1)
    }
    
  }

  getEdit(Id:Number){
      let index = this.Student_list.findIndex( x => x.Id === Id)
      this.Update_Index = index
      this.FirstName = this.Student_list[index].FirstName
      this.lastName = this.Student_list[index].lastName
      this.Gender = this.Student_list[index].Gender
      this.Age = this.Student_list[index].Age
  }

  update(){
    this.Student_list[this.Update_Index].FirstName = this.FirstName
    this.Student_list[this.Update_Index].lastName = this.lastName
    this.Student_list[this.Update_Index].Gender = this.Gender
    this.Student_list[this.Update_Index].Age = this.Age

    this.clearForm()
  }

}



import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  select()
  {
    return  this.http.get("http://localhost:9999/emps");
  }

  selectByNo(No)
  {
    return  this.http.get("http://localhost:9999/emps/"+No);
  }
  insert(empObj)
  {
    return  this.http.post("http://localhost:9999/emps",empObj);
  }
  
  update(empObj)
  {
    return  this.http.put("http://localhost:9999/emps/"+empObj.No,empObj);
  }
  delete(No)
  {
    return  this.http.delete("http://localhost:9999/emps/"+No);
  }

}

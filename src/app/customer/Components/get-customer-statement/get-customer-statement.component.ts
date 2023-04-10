import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from '../../Services/customer.service';
import {jsPDF} from 'jspdf';
import { Statement } from 'src/Models/Statement';
import * as Sherlock from '../../../../../node_modules/sherlockjs';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-get-customer-statement',
  templateUrl: './get-customer-statement.component.html',
  styleUrls: ['./get-customer-statement.component.css']
})
export class GetCustomerStatementComponent implements OnInit
{
  customerStatement:Statement[]=[];
  id:string=localStorage.getItem("CustomerId")
  Fdate:Date
  Tdate:Date
  msg:string
  startDate:Date
  endDate:Date
  nlpString:any
  showTable:boolean = false
  SearchString:string
  url:string

  constructor(private obj:CustomerService,private toastr:ToastrService) 
  {
    this.getCustomerStatement();
  }
 

  ngOnInit()
   {
  }



  PrintStatement(): void {
    var tab = document.getElementById('StatementTable');
    var today = new Date();
    var file_name = "EBstatement_" + this.id.toString() + "_" + today.toLocaleDateString();

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "th {background-color:#f50057}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    var doc = new jsPDF();
    doc.html(tab, {
      callback: function (doc) {
        doc.save(file_name);
      },
      x: 15,
      y: 15,
      width: 170, //target width in the PDF document
      windowWidth: 650 //window width in CSS pixels
    },
     );
  }

  SearchToDates(){
    this.showTable = false
    var flag = true
    this.nlpString = Sherlock.parse(this.SearchString)
    this.startDate = this.nlpString.startDate
    this.endDate = this.nlpString.endDate
    if(this.startDate == null || this.endDate == null ){
      this.toastr.error("Enter Proper date span of from and to dates")
      flag = false
    }
    var differenceInDays = (this.endDate.getTime() - this.startDate.getTime())/(1000 * 3600 * 24)
    console.log(differenceInDays)
    if(differenceInDays>30){
      this.toastr.info("Date Difference is more than a month, hence dispaying this month's statements by default")
      flag=false
    }
    if(this.endDate > new Date()){
      this.toastr.error("the End Date should be in the past")
    }
    if(flag){
      var startdate = formatDate(this.startDate,'mm/dd/yyyy','en-US');
      var enddate = formatDate(this.endDate,'mm/dd/yyyy','en-US');
      this.url = 'https://localhost:7035/api/Customer/GetCustomerStatement?CustomerId='+localStorage.getItem("CustomerId")+'&from_date='+this.startDate.getDate() +'%2F'+ this.startDate.getMonth() + '%2F'+this.startDate.getFullYear() + '&to_date=' + this.endDate.getDate() + '%2F' + this.endDate.getMonth() +'%2F'+this.endDate.getFullYear()
      console.log(this.url)
    }
    if(flag==false){
      this.url = 'https://localhost:7035/api/Customer/GetCustomerStatement?CustomerId='+localStorage.getItem("CustomerId")
    }
    this.getCustomerStatement()
  }

  getCustomerStatement(){
    this.obj.GetCustomerStatement(this.url).subscribe(data => {
      console.log(data);
      this.customerStatement = data;
      this.showTable = true
    });

  }

}

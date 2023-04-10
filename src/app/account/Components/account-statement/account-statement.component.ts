import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { Guid } from 'guid-typescript';
import { Statement } from '../../../../Models/Statement';
import * as html2pdf from 'html2canvas';
import { jsPDF } from "jspdf";
import * as Sherlock from '../../../../../node_modules/sherlockjs';
import { ToastrService } from 'ngx-toastr';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  url:string
  AccStatement: Statement[] = []
  SearchString:string;

  from_date:Date;
  to_date:Date;

  //get using route parameter / localstorage
  AccId: string = localStorage.getItem("AccountId");
  startDate:Date
  endDate:Date
  nlpString:any
  showTable:boolean = false

  constructor(private AccService: AccountService, private toastr:ToastrService) {
  }

  ngOnInit(): void {

  }


  PrintStatement(): void {
    var tab = document.getElementById('StatementTable');
    var today = new Date();
    var file_name = "EBstatement_" + this.AccId.toString() + "_" + today.toLocaleDateString();

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
      this.url = 'https://localhost:7035/api/Accounts/GetAccountStatement?AccountId='+localStorage.getItem("AccountId")+'&from_date='+this.startDate.getDate() +'%2F'+ this.startDate.getMonth() + '%2F'+this.startDate.getFullYear() + '&to_date=' + this.endDate.getDate() + '%2F' + this.endDate.getMonth() +'%2F'+this.endDate.getFullYear()
      console.log(this.url)
    }
    if(flag==false){
      this.url = 'https://localhost:7035/api/Accounts/GetAccountStatement?AccountId='+localStorage.getItem("AccountId")
    }
    this.getAccountStatement()
  }

  getAccountStatement(){
    this.AccService.GetAccStatement(this.url).subscribe(data => {
      console.log(data);
      this.AccStatement = data;
    });
    this.showTable = true

  }
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Guid } from 'guid-typescript';
import { Statement } from '../../../../Models/Statement';
import * as html2pdf from 'html2canvas';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  AccStatement: Statement[] = []

  //get using route parameter / localstorage
  AccId: string = "C0BF0099-9706-4231-B4DA-6452C043F614";

  constructor(private AccService: AccountService) {
    this.AccService.GetAccStatement(Guid.parse(this.AccId)).subscribe(data => {
      console.log(data);
      this.AccStatement = data;
    });
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
}

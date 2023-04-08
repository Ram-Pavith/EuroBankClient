import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/Customer';
import { CustomerService } from '../../Services/customer.service';
import jsPDF from 'jspdf';
import { Statement } from 'src/Models/Statement';

@Component({
  selector: 'app-get-customer-statement',
  templateUrl: './get-customer-statement.component.html',
  styleUrls: ['./get-customer-statement.component.css']
})
export class GetCustomerStatementComponent implements OnInit
{
  customer:Statement[]=[];
  id:string=""
  Fdate:Date
  Tdate:Date
  msg:string
  constructor(private obj:CustomerService) 
  {
    this.id=localStorage.getItem("CustomerId");
  }
 

  ngOnInit()
   {
    this.getstatement();
  }

  getstatement()
  {
    this.obj.GetCustomerStatement(this.id,this.Fdate,this.Tdate).subscribe(data=>{
      console.log(data);
      if(data.length == 0) this.msg = "No transactions";
      this.customer = data;
    },err =>{
      console.log(err);
    })
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

}

import { TestBed } from '@angular/core/testing';
import { inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../app/account/Services/account.service';
import { Account } from 'src/Models/Account';
import { AccountBalance } from 'src/Models/AccountBalance';
import { Guid } from 'guid-typescript';

describe('AccountService', () => {
    let service: AccountService;
    let http: HttpClient;
    let accBalArr: AccountBalance[];
    let mockPostArray: Account[];
    let httpController: HttpTestingController;
    let count: number;
    let url: "https://localhost:7035/api/Accounts/GetCustomerAccountsBalance?CustomerId=";

    beforeEach(() => {
        accBalArr = [
            {
                accountId: Guid.parse("02761FA0-E307-49AB-A214-2D4AB036E97F"),
                balance: 50000
            },
            {
                accountId: Guid.parse("5945FAD5-AE0B-4DF9-B6F7-5D16AECB7932"),
                balance: 100000
            }
        ];

        mockPostArray = [
            {
                accountId: Guid.parse("02761FA0-E307-49AB-A214-2D4AB036E97F"),
                accountTypeId: 1,
                accountCreationStatusId: 1,
                dateCreated: new Date(),
                customerId: "CustomerEurobank",
                balance: 50000
            },
            {
                accountId: Guid.parse("5945FAD5-AE0B-4DF9-B6F7-5D16AECB7932"),
                accountTypeId: 1,
                accountCreationStatusId: 1,
                dateCreated: new Date(),
                customerId: "CustomerEurobank2",
                balance: 100000
            },
            {
                accountId: Guid.parse("C0BF0099-9706-4231-B4DA-6452C043F614"),
                accountTypeId: 1,
                accountCreationStatusId: 1,
                dateCreated: new Date(),
                customerId: "CustomerEurobank",
                balance: 150000
            },
        ]

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule,
            ],
        });
        service = TestBed.inject(AccountService);
        httpController = TestBed.inject(HttpTestingController);

    });

    it('get accounts based on customer Id', waitForAsync(inject([HttpTestingController], (http: HttpTestingController) => {
        const id = "CustomerEuroBank";
        service.GetCustomerAccountsBalance(id).subscribe((res) => {
            count = res.length;
            expect(count).toEqual(2);
            console.log(res);
        });
        const req = httpController.expectOne({
            method: 'GET',
            url: "https://localhost:7035/api/Accounts/GetCustomerAccountsBalance?CustomerId=CustomerEuorbank",
        });
        req.flush(accBalArr);
    })));

});

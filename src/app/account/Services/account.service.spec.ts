import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { AccountBalance } from 'src/Models/AccountBalance';
import { Guid } from 'guid-typescript';
import { AccountCreationStatus } from 'src/Models/AccountCreationStatus';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should send GET AccountBalance request with headers', () => {
    // Arrange
    const expectedUrl = 'https://localhost:7035/api/Accounts/GetAccountBalance?AccountId=02761FA0-E307-49AB-A214-2D4AB036E97F';
    const expectedHeaders = {
      'Authorization': 'Bearer null',
      'Content-Type': 'application/json;charset=UTF-8'
    };
    const requestData = Guid.parse("02761FA0-E307-49AB-A214-2D4AB036E97F");
    const expectedResponse: AccountBalance = {
      accountId: Guid.parse("02761FA0-E307-49AB-A214-2D4AB036E97F"),
      balance: 20000
    }
    // Act
    service.GetAccountBalance(requestData).subscribe(response => {
      // Assert
      expect(response).toEqual(expectedResponse);
    });

    // Assert
    const httpRequest = httpMock.expectOne(expectedUrl);
    expect(httpRequest.request.method).toBe('GET');
    expect(httpRequest.request.url).toBe(expectedUrl);
    //expect(httpRequest.request.headers.get('Authorization')).toBe(expectedHeaders.Authorization);
    expect(httpRequest.request.headers.get('Authorization')).toContain('Bearer');
    expect(httpRequest.request.headers.get('Content-Type')).toBe(expectedHeaders['Content-Type']);

    // Respond with expected response
    httpRequest.flush(expectedResponse);
  });

  it('should send POST CreateAccount request with headers', () => {
    // Arrange
    const expectedUrl = 'https://localhost:7035/api/Accounts/CreateAccount?CustomerId=CustomerEurobank';
    const expectedHeaders = {
      'Authorization': 'Bearer null',
      'Content-Type': 'application/json;charset=UTF-8'
    };
    const requestData = "CustomerEurobank";
    const expectedResponse: AccountCreationStatus = {
      accountCreationStatusId: 1,
      message : "Account Creation Success"
    }
    // Act
    service.CreateAccount(requestData).subscribe(response => {
      // Assert
      expect(response).toEqual(expectedResponse);
    });

    // Assert
    const httpRequest = httpMock.expectOne(expectedUrl);
    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.url).toBe(expectedUrl);
    expect(httpRequest.request.headers.get('Authorization')).toBe(expectedHeaders.Authorization);
    //expect(httpRequest.request.headers.get('Authorization')).toContain('Bearer');
    expect(httpRequest.request.headers.get('Content-Type')).toBe(expectedHeaders['Content-Type']);
    expect(httpRequest.request.body).toEqual(requestData);
    // Respond with expected response
    httpRequest.flush(expectedResponse);
  });

});

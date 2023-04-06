export class UserAuthResponseDTO{
    success:Boolean;
    message:String;
    token:String;
    refreshToken:String;
    tokenExpires:Date;
}
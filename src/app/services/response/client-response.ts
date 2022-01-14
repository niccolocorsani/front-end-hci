
export class ClientResponse {

  id: any
  firstName: string;
  lastName: string;
  userName: string;
  description: string;
  email:string;
  appointments: any;


  constructor(data?: any) {
    this.id = data ? data.id : null;
    this.firstName = data ? data.firstName : null;
    this.lastName = data ? data.lastName : null;
    this.userName = data ? data.userName : null;
    this.appointments = data ? data.appointments : null;
    this.description = data ? data.description : null;
    this.email = data ? data.email : null;

  }
}

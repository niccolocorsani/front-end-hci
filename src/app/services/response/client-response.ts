
export class ClientResponse {

  firstName: string;
  lastName: string;
  userName: string;
  appointments: any;

  constructor(data?: any) {
    this.firstName = data ? data.firstName : null;
    this.lastName = data ? data.lastName : null;
    this.userName = data ? data.userName : null;
    this.appointments = data ? data.appointments : null;

  }
}

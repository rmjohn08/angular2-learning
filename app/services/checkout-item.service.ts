import {Injectable} from  'angular2/core';

export class CheckoutItem {
  constructor (
    public id: number,
    public name: string,
    public technology: string,
    public description: string,
    public checkedOutBy?: string,
    public checkedOutDate?: string,
    public dueDate?: string) {}
}

@Injectable()
export class CheckoutItemService {
  getItems () : Array<CheckoutItem> {
    return items.map(p => new CheckoutItem(p.id, p.name, p.os,
    p.description, p.checkedOutBy, p.checkedOutDate, p.dueDate));

  }
}

var items = [
  {
    "id": 100,
    "name" : "LS 5 White",
    "os" : "Android",
    "description":"white LS Samsung 5",
    "checkedOutBy":"", "checkedOutDate":"","dueDate":""
  },
  {
    "id": 101,
    "name" : "LS 4 Blue",
    "os" : "Android",
    "description":"blue LS Samsung 5",
    "checkedOutBy":"", "checkedOutDate":"","dueDate":""
  },
  {
    "id": 102,
    "name" : "iPhone 6",
    "os" : "iOS",
    "description":"Apple white iOS 6",
    "checkedOutBy":"", "checkedOutDate":"","dueDate":""
  }

]

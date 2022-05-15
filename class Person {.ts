// Инкапсуляция и сокрытие. Создание приватных свойств редактирование которых доступно только через сеттеры, а получение данных через геттеры. На прямую со свойствами заимодействовать нельзя

class Person {
  private _name: string;
  private _surname: string;
  private _id: string;

  constructor(name: string, surname: string) {
    this._name = name;
    this._surname = surname;
    this._id = "12345";
  }

  public greetings() {
    console.log("hello I am person");
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get surname(): string {
    return this._surname;
  }
  public set surname(value: string) {
    this._surname = value;
  }

  public get id() {
    return this._id;
  }
}

class Employee extends Person {
  private _position: string;
  private _iin: number;

  constructor(name: string, surname: string, position: string, iin: number) {
    super(name, surname);
    this._position = position;
    this._iin = iin;
  }

  public greetings() {
    console.log("hello I am person");
  }

  public get position(): string {
    return this._position;
  }
  public set position(value: string) {
    this._position = value;
  }

  public get iin(): number {
    return this._iin;
  }
  public set iin(value: number) {
    this._iin = value;
  }
}

const max = new Employee("max", "popov", "director", 134253);
const per = new Person("alex", "maxov");

max.greetings();
per.greetings();

const personList: Person[] = [max, per];

// ---------------------------------------------------------

// Классы аггрегации

class Freshener {}

class Flat {
  freshener: Freshener;

  constructor(freshener: Freshener) {
    this.freshener = freshener;
  }
}

// Классы композиции
class Engine {
  showDetail() {
    console.log("it is engine");
  }
}

class Wheels {
  showDetail() {
    console.log("they are wheels");
  }
}

class Car {
  wheels: Wheels[];
  engine: Engine;
  freshener: Freshener;

  constructor(freshener: Freshener) {
    this.freshener = freshener;

    this.engine = new Engine();
    this.wheels.push(new Wheels());
    this.wheels.push(new Wheels());
    this.wheels.push(new Wheels());
    this.wheels.push(new Wheels());
  }

  showDetail() {
    this.engine.showDetail;
    this.wheels.forEach((wheel) => wheel.showDetail());
  }
}

const car = new Car(new Freshener());
car.showDetail();

// ---------------------------------------------------------------------

class User {}

class Vehicle {}

interface Repository<T> {
  get: (obj: T) => T;
  put: (obj: T) => T;
  delete: (obj: T) => T;
  update: (obj: T) => T;
}

class VehicleRepo implements Repository<Vehicle> {
  get(obj: Vehicle) {
    return obj;
  }

  put(obj: Vehicle) {
    return obj;
  }

  delete(obj: Vehicle) {
    return obj;
  }

  update(obj: Vehicle) {
    return obj;
  }
}

class UseRepo implements Repository<User> {
  get(obj: User) {
    return undefined;
  }

  put(obj: User) {
    return undefined;
  }

  delete(obj: User) {
    return undefined;
  }

  update(obj: User) {
    return undefined;
  }
}

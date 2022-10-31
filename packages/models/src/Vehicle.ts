export class Vehicle {
    public id: string;
    public vin: string;
    public licensePlate: string;
    public testField: string;

    public toString(): string {
        return `id: ${this.id} | vin: ${this.vin}`;
    }
}
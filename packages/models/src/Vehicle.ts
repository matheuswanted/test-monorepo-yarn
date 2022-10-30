export class Vehicle {
    public id: string;
    public vin: string;

    public toString(): string {
        return `id: ${this.id} | vin: ${this.vin}`;
    }
}
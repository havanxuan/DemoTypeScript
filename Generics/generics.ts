/**
 * Generics cung cấp các biến cho các loại. vd phổ biển là một mảng.
 * Một mảng không có generics có thể chứa bất kỳ thứ gì.
 * Còn một mảng với generics có thể khai báo các giá trị mà mảng đó chứa.
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>

// có thể khai báo các loại của riêng mình sử dụng generic.
interface Backpack<Type> {
    add: (obj : Type) => void;
    get: () => Type;
}
declare const backpack : Backpack<string>;
const obj = backpack.get();
backpack.add('Xuan');
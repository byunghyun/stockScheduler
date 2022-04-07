export class ConvertClassToPlain {
 private jsonObject: any;
 set setClassToPlain(classObject: unknown) {
   this.jsonObject = JSON.parse(JSON.stringify(classObject));
 }
 get getClassToPlain() {
   return this.jsonObject;
 }
}
import { AbstractControl, ValidationErrors } from "@angular/Forms";

export class UserNameValidators {
    static cannotContainSpace(control:AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace:true};
        }

        return null;
    }

    //async validator, data coming from server
    static shouldBeUnique(control: AbstractControl) : Promise <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "mosh")
                    resolve ({ shouldBeUnique: true });
                else resolve(null);
            }, 2000);
        });
    }
}
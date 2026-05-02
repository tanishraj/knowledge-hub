import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

export class MyGaurd implements CanActivate{
	canActivate() : Promise<boolean> | Observable<boolean> | boolean{
		return true;
	}
}
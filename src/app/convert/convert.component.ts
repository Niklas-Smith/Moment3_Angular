import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
convert: number = 0;
result: number = 0;
feet: number = 0;
result2: number = 0;

convertFtoC(): void{

  this.result = (this.convert - 32) * 5/9
}

convertCtoF(): void{

  this.result = (this.convert * 9/5) + 32
}

feetToMeter(): void{

this.result2 = (this.feet / 3.28)

}

meterToFeet(): void{

this.result2 = (this.feet * 3.28)

}


}


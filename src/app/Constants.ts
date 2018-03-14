/**
 * Created by mac on 13/03/2018.
 */
/* COLORS */
import {Color} from "./Color";
export class Constants {
  public static LIGHTBLUE = new Color(179, 229, 252, 1);
  public static GREY = new Color(148, 159, 177, 1);
  public static GREEN = new Color(80, 174, 84, 1);
  public static LIGHTRED = new Color(253, 162, 182, 1);
  public static BROWN = new Color(120, 85, 73, 1);
  public static borderDarkenFactor = 40;

  public static darkenColor(color: Color, factor: number) {
    return new Color(color.r - factor, color.g - factor, color.b - factor, color.a);
  }
  public static toBorderColor(color: Color): string {
    const newColor = this.darkenColor(color, this.borderDarkenFactor);
    const returnString = newColor.toRGBAString();
    return returnString;
  }
}



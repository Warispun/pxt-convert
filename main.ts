
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * Convert blocks
 */
//% weight=100 color=#0fbc11 icon="⇔"
namespace convert {
    /**Convert Celcius(number) to Farenheit (string)
     * @param value degree in celcius, eg: 0
     */
    //% blockId=CelciusToFarenheit block="convert %value|℃ to ℉(string)"
    export function celciusToFarenheit(value: number): string {

        let farenheit = (value * 9 / 5) + 32
        let remain = Math.abs(((value * 90 / 5) + 320)) % 10

        return farenheit.toString() + "." + remain.toString()
    }

    /**Convert milimeter(number > 0) to inch(string)
     * @param value in mm, eg: 0
     * value.min=0
     */
    //% blockId=MMToInch block="convert %value|mm to inch(string)"
    export function mmToInch(value: number): string {
        if (value < 0)
            value = 0

        let inch = value * 10 / 254
        let remain = ((value * 100) % 2540) / 254
        return inch.toString() + "." + remain.toString()
    }

    /**Convert Kilometer(number > 0) to mile(string)
     * @param value in Km, eg: 0
     * value.min=0
     */
    //% blockId=KmToMile block="convert %value|Km. to mile(string)"
    export function KmToMile(value: number): string {
        if (value < 0)
            value = 0

        let mile = value * 10 / 16
        let remain = ((value * 100) % 160) / 16
        return mile.toString() + "." + remain.toString()
    }
}

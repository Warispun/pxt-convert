
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace แปลงค่า {
    /**แปลงค่า Celcius(ตัวเลข) ไป Farenheit (ตัวอักษร)
     * @param value degree in celcius, eg: 0
     */
    //% blockId=CelciusToFarenheit block="แปลงค่า %value|℃ เป็น ℉(ตัวอักษร)"
    export function celciusToFarenheit(value: number): string {

        let farenheit = (value * 9 / 5) + 32
        let remain = Math.abs(((value * 90 / 5) + 320)) % 10

        return farenheit.toString() + "." + remain.toString()
    }

    /**แปลงค่า มิลลิเมตร(ตัวเลขไม่น้อยกว่า 0) ไป นิ้ว(ตัวอักษร)
     * @param value in mm, eg: 0
     * value.min=0
     */
    //% blockId=MMToInch block="แปลงค่า %value|มม. เป็น นิ้ว(ตัวอักษร)"
    export function mmToInch(value: number): string {
        if (value < 0)
            value = 0

        let inch = value * 10 / 254
        let remain = ((value * 100) % 2540) / 254
        return inch.toString() + "." + remain.toString()
    }

    /**แปลงค่า กิโลเมตร(ตัวเลขไม่น้อยกว่า 0) ไป ไมล์(ตัวอักษร)
     * @param value in Km, eg: 0
     * value.min=0
     */
    //% blockId=KmToMile block="แปลงค่า %value|กม. เป็น ไมล์"
    export function KmToMile(value: number): string {
        if (value < 0)
            value = 0

        let mile = value * 10 / 16
        let remain = ((value * 100) % 160) / 16
        return mile.toString() + "." + remain.toString()
    }
}

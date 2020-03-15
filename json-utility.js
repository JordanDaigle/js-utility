/**
 * JSON utility
 * functions
 * 
 * @author jordan.daigle
 * @date 2020-03-14
 **/

 
 export class JSONUtility {
    
     
    /**
     * Parse json else 
     * fallback to default value
     *
     * @return  {[type]}  [return description]
     */
    static tryParse(json, value = null) {
        try {
            return JSON.parse(json);
        } catch (error) {
            return value;
        }
    }
    
    
    
    /**
     * Check if is 
     * valid JSON
     */
    static isValid(json) {
        try {
            JSON.parse(json);
            return true;
        } catch (error) {
            return false;
        }
    }
    
    
 }
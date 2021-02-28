/**
 * This script runs all license key validation operations.
 * 
 * THIS CODE SHOULD BE OBFUSCATED FOR SECURITY. (see https://www.obfuscator.io)
 */

/**
 * This function sends an api request to validate they key.
 * DO NOT call this function directly from your html doc
 */
async function runValidation() {
    var keyToTest = document.getElementById("licensekey").value;
    /**
     * You will need to customize this to function to return "true" if the key is valid
     * and "false" if the key is invalid.
     * 
     * You could make an api request directly to METALABS, but it his highly recommended to use
     * a middleman api. A great example of this can be found HERE: https://github.com/connorstevens/meta-labs-middleman-js
     */
    return isKeyValid;
}


// Run this when you want to validate the contents of your "licensekey" input field
async function checkKey() {
    /** 
     * The regex statement below checks if the key is formatted correctly.
     * This prevents server requests when they key couldn't possibly be correct
     * Example:
     *   Key: aasiudybasfuiyb will not send a server requset
     *   Key: XXXX-XXXX-XXXX-XXXX will send a server reqest, even if it is not a valid key
     * 
     * You may need to change the regex statement if your key is not formatted like: XXXX-XXXX-XXXX-XXXX
     */
    if (/[0-9A-Z-]{4}-[0-9A-Z-]{4}-[0-9A-Z-]{4}-[0-9A-Z-]{4}/.test(document.getElementById('licensekey').value.toUpperCase())) {
        var vdResp = await runValidation(document.getElementById('licensekey').value.toUpperCase());
        if(vdResp == 'active') {
            document.getElementById('status-text').classList.remove('error');
            document.getElementById('status-text').classList.add('success');
            document.getElementById('status-text').innerHTML = "Key Validated";
            // Download your product here. (A single-use download link is best for security)
        } else {
            // This runs if the key format is valid but the API returned a non-valid response
            document.getElementById('status-text').classList.add('error');
            document.getElementById('status-text').classList.remove('success');
            document.getElementById('status-text').innerHTML = "Please Enter A Valid Key";
        }
    } else {
        // This runs if the key FORMAT is invalid
        document.getElementById('status-text').classList.add('error');
        document.getElementById('status-text').classList.remove('success');
        document.getElementById('status-text').innerHTML = "Please Enter A Valid Key";
        console.log('Error: Bad Format');
    }
}
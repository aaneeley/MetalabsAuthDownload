async function runValidation() {
    var middleResp = await fetch(` https://sphinx-middleman-api.herokuapp.com/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ license: document.getElementById('licensekey').value.toUpperCase() })
    }).then(function (res) {
        return res.json();
    })
    return middleResp;
}

async function checkKey() {
    if (/(SPHINX)-[0-9A-Z-]{19}/.test(document.getElementById('licensekey').value.toUpperCase())) {
        var vdResp = await runValidation(document.getElementById('licensekey').value.toUpperCase());
        if(vdResp == 'active') {
            document.getElementById('status-text').classList.remove('error');
            document.getElementById('status-text').classList.add('success');
            document.getElementById('status-text').innerHTML = "Key Validated";
            // Download
        } else {
            document.getElementById('status-text').classList.add('error');
            document.getElementById('status-text').classList.remove('success');
            document.getElementById('status-text').innerHTML = "Please Enter A Valid Key";
            console.log('ERR: BK');
        }
    } else {
        document.getElementById('status-text').classList.add('error');
        document.getElementById('status-text').classList.remove('success');
        document.getElementById('status-text').innerHTML = "Please Enter A Valid Key";
        console.log('ERR: BF');
    }
}
//